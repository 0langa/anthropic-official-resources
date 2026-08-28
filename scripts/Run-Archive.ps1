#requires -Version 7.0
[CmdletBinding()]
param(
    [ValidateSet('Setup','Pilot','Populate','Update','Verify','Assets')]
    [string]$Mode = 'Populate',
    [ValidateRange(0,2147483647)][int]$Limit = 0,
    [ValidateRange(0,2147483647)][int]$MaxSeconds = 0,
    [switch]$Push
)
$ErrorActionPreference = 'Stop'
$ArchiveRoot = Split-Path -Parent $PSScriptRoot
$ArchivePython = Join-Path $ArchiveRoot '.venv\Scripts\python.exe'
$env:PYTHONUTF8 = '1'
$env:PYTHONUNBUFFERED = '1'
Set-Location $ArchiveRoot

function Invoke-Checked {
    param([string]$Executable,[string[]]$Arguments,[int[]]$AllowedExitCodes = @(0))
    & $Executable @Arguments
    if ($LASTEXITCODE -notin $AllowedExitCodes) { throw "Command failed with exit code $LASTEXITCODE`: $Executable" }
}

if ($Mode -eq 'Setup' -or -not (Test-Path $ArchivePython)) {
    Write-Host 'Creating local Python 3.12 environment...'
    if (Get-Command uv -ErrorAction SilentlyContinue) {
        Invoke-Checked 'uv' @('venv','--python','3.12','.venv')
        Invoke-Checked 'uv' @('pip','install','--python',$ArchivePython,'-r','requirements.txt')
    } elseif (Get-Command py -ErrorAction SilentlyContinue) {
        Invoke-Checked 'py' @('-3.12','-m','venv','.venv')
        Invoke-Checked $ArchivePython @('-m','pip','install','-r','requirements.txt')
    } else {
        throw 'Install Python 3.12 (with the py launcher) or uv, then run this command again.'
    }
    Invoke-Checked $ArchivePython @('-m','playwright','install','chromium')
    Invoke-Checked $ArchivePython @('tools/pipeline.py','verify','--repair-line-endings')
    if ($Mode -eq 'Setup') { exit 0 }
}

$ArchiveLogDirectory = Join-Path $ArchiveRoot '.cache\logs'
New-Item -ItemType Directory -Force -Path $ArchiveLogDirectory | Out-Null
$ArchiveLogPath = Join-Path $ArchiveLogDirectory ("{0}-{1}.log" -f (Get-Date -Format 'yyyyMMdd-HHmmss'),$Mode)
$ArchiveArguments = switch ($Mode) {
    'Pilot' { @('tools/pilot.py','--merge') }
    'Populate' { @('tools/pipeline.py','sync','--resume') }
    'Update' { @('tools/pipeline.py','sync') }
    'Verify' { @('tools/pipeline.py','verify') }
    'Assets' { @('tools/pipeline.py','assets','--resume') }
}
if ($Mode -notin @('Pilot','Verify')) {
    if ($Limit -gt 0) { $ArchiveArguments += @('--limit',"$Limit") }
    if ($MaxSeconds -gt 0) { $ArchiveArguments += @('--max-seconds',"$MaxSeconds") }
}
Write-Host "Mode: $Mode. One browser worker. Log: $ArchiveLogPath"
& $ArchivePython @ArchiveArguments 2>&1 | Tee-Object -FilePath $ArchiveLogPath
$ArchiveExitCode = $LASTEXITCODE
if ($ArchiveExitCode -notin @(0,2)) { throw "Archive failed with exit code $ArchiveExitCode. See $ArchiveLogPath" }
Invoke-Checked $ArchivePython @('tools/pipeline.py','verify')
if ($Push) {
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git is required for -Push.' }
    $ArchiveAlreadyStaged = & git diff --cached --name-only
    if ($LASTEXITCODE -ne 0) { throw 'Could not inspect staged Git changes.' }
    if ($ArchiveAlreadyStaged) { throw 'The Git index already contains staged changes. Commit or unstage them before using -Push.' }
    foreach ($ArchiveDirectory in @('content','html','source-bundles','assets','inventory','reports')) {
        if (Test-Path $ArchiveDirectory) { Invoke-Checked 'git' @('add','--',$ArchiveDirectory) }
    }
    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
        Invoke-Checked 'git' @('commit','-m','chore: update English official resources')
        # A concurrent remote change deliberately causes a non-fast-forward failure.
        # Nothing is force-pushed, reset, or silently merged.
        Invoke-Checked 'git' @('push')
    } elseif ($LASTEXITCODE -ne 0) { throw 'Could not inspect staged Git changes.' }
}
if ($ArchiveExitCode -eq 2) { Write-Warning 'Run checkpointed, but coverage or validation gaps remain. See inventory and reports.' }
exit $ArchiveExitCode
