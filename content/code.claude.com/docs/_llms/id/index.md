# Claude Code Docs: Indonesian

> Official documentation for Claude Code, Anthropic's agentic coding tool available in the terminal, IDE, desktop app, and browser. Covers installation, configuration, skills, subagents, hooks, MCP, the Agent SDK, and reference material.

## Indonesian

### Memulai

#### Memulai

- [Ikhtisar](https://code.claude.com/docs/id/overview.md): Claude Code adalah alat pengkodean agentic yang membaca basis kode Anda, mengedit file, menjalankan perintah, dan terintegrasi dengan alat pengembangan Anda. Tersedia di terminal, IDE, aplikasi desktop, dan browser.
- [Panduan Cepat](https://code.claude.com/docs/id/quickstart.md): Selamat datang di Claude Code!
- [Changelog](https://code.claude.com/docs/id/changelog.md)

#### Konsep Inti

- [Cara Kerja Claude Code](https://code.claude.com/docs/id/how-claude-code-works.md): Pahami loop agentic, tools bawaan, dan bagaimana Claude Code berinteraksi dengan proyek Anda.
- [Perluas Claude Code](https://code.claude.com/docs/id/features-overview.md): Pahami kapan menggunakan CLAUDE.md, Skills, subagents, hooks, MCP, dan plugins.
- [Jelajahi direktori .claude](https://code.claude.com/docs/id/claude-directory.md): Tempat Claude Code membaca CLAUDE.md, settings.json, hooks, skills, commands, subagents, workflows, rules, dan auto memory. Jelajahi direktori .claude di proyek Anda dan ~/.claude di direktori home Anda.
- [Jelajahi jendela konteks](https://code.claude.com/docs/id/context-window.md): Simulasi interaktif tentang bagaimana jendela konteks Claude Code terisi selama sesi. Lihat apa yang dimuat secara otomatis, berapa biaya setiap pembacaan file, dan kapan aturan dan hook dijalankan.
- [Bagaimana Claude Code menggunakan prompt caching](https://code.claude.com/docs/id/prompt-caching.md): Claude Code mengelola prompt caching secara otomatis. Lihat mengapa perubahan model memicu giliran tanpa cache yang lambat, berapa biaya `/compact`, mengapa pengeditan CLAUDE.md tidak berlaku di tengah sesi, dan cara memeriksa tingkat cache hit Anda.

#### Gunakan Claude Code

- [Bagaimana Claude mengingat proyek Anda](https://code.claude.com/docs/id/memory.md): Berikan Claude instruksi persisten dengan file CLAUDE.md, dan biarkan Claude mengumpulkan pembelajaran secara otomatis dengan auto memory.
- [Pilih mode izin](https://code.claude.com/docs/id/permission-modes.md): Kontrol apakah Claude meminta izin sebelum mengedit file atau menjalankan perintah. Siklus mode dengan Shift+Tab di CLI atau gunakan pemilih mode di VS Code, Desktop, dan claude.ai.
- [Kelola sesi](https://code.claude.com/docs/id/sessions.md): Beri nama, lanjutkan, cabang, dan beralih antar percakapan Claude Code. Mencakup `--continue`, `--resume`, `--from-pr`, pemilih `/resume`, penamaan sesi, ekspor transkrip, dan tempat penyimpanan transkrip.
- [Alur kerja umum](https://code.claude.com/docs/id/common-workflows.md): Panduan langkah demi langkah untuk menjelajahi basis kode, memperbaiki bug, refactoring, pengujian, dan tugas sehari-hari lainnya dengan Claude Code.
- [Perpustakaan prompt](https://code.claude.com/docs/id/prompt-library.md): Salin-tempel prompt untuk Claude Code, diberi tag berdasarkan tugas dan peran.
- [Praktik Terbaik untuk Claude Code](https://code.claude.com/docs/id/best-practices.md): Tips dan pola untuk memaksimalkan Claude Code, dari mengonfigurasi lingkungan Anda hingga menskalakan di seluruh sesi paralel.

#### Platform dan integrasi

- [Platform dan integrasi](https://code.claude.com/docs/id/platforms.md): Pilih di mana menjalankan Claude Code dan apa yang akan dihubungkan. Bandingkan CLI, Desktop, VS Code, JetBrains, web, mobile, dan integrasi seperti Chrome, Slack, dan CI/CD.
- [Lanjutkan sesi lokal dari perangkat apa pun dengan Remote Control](https://code.claude.com/docs/id/remote-control.md): Lanjutkan sesi Claude Code lokal dari ponsel, tablet, atau browser apa pun menggunakan Remote Control. Bekerja dengan claude.ai/code dan aplikasi Claude mobile.
- [Gunakan Claude Code dengan Chrome](https://code.claude.com/docs/id/chrome.md): Hubungkan Claude Code ke browser Chrome Anda untuk menguji aplikasi web, debug dengan console logs, otomatisasi pengisian formulir, dan ekstrak data dari halaman web.
- [Biarkan Claude menggunakan komputer Anda dari CLI](https://code.claude.com/docs/id/computer-use.md): Aktifkan computer use di Claude Code CLI sehingga Claude dapat membuka aplikasi, mengklik, mengetik, dan melihat layar Anda di macOS. Uji aplikasi native, debug masalah visual, dan otomatisasi alat GUI-only tanpa meninggalkan terminal Anda.
- [Gunakan Claude Code di VS Code](https://code.claude.com/docs/id/vs-code.md): Instal dan konfigurasi ekstensi Claude Code untuk VS Code. Dapatkan bantuan pengkodean AI dengan diff inline, @-mentions, review rencana, dan pintasan keyboard.
- [JetBrains IDEs](https://code.claude.com/docs/id/jetbrains.md): Gunakan Claude Code dengan JetBrains IDEs termasuk IntelliJ, PyCharm, WebStorm, dan lainnya
- [Claude Code di Slack](https://code.claude.com/docs/id/slack.md): Delegasikan tugas coding langsung dari workspace Slack Anda

##### Claude Code di web

- [Mulai dengan Claude Code di web](https://code.claude.com/docs/id/web-quickstart.md): Jalankan Claude Code di cloud dari browser atau ponsel Anda. Hubungkan repositori GitHub, kirimkan tugas, dan tinjau PR tanpa setup lokal.
- [Gunakan Claude Code di web](https://code.claude.com/docs/id/claude-code-on-the-web.md): Konfigurasikan lingkungan cloud, skrip setup, akses jaringan, dan Docker di sandbox Anthropic. Pindahkan sesi antara web dan terminal dengan `--cloud` dan `--teleport`.
- [Otomatisasi pekerjaan dengan rutinitas](https://code.claude.com/docs/id/routines.md): Letakkan Claude Code pada autopilot. Tentukan rutinitas yang berjalan sesuai jadwal, dipicu oleh panggilan API, atau bereaksi terhadap peristiwa GitHub dari infrastruktur cloud yang dikelola Anthropic.
- [Temukan bug dengan ultrareview](https://code.claude.com/docs/id/ultrareview.md): Jalankan tinjauan kode multi-agen yang mendalam di cloud dengan /code-review ultra untuk menemukan dan memverifikasi bug sebelum Anda merge.

##### Claude Code di desktop

- [Memulai dengan aplikasi desktop](https://code.claude.com/docs/id/desktop-quickstart.md): Instal Claude Code di desktop dan mulai sesi coding pertama Anda
- [Aplikasi desktop](https://code.claude.com/docs/id/desktop.md): Dapatkan lebih banyak dari Claude Code Desktop: sesi paralel dengan isolasi Git, tata letak pane drag-and-drop, terminal terintegrasi dan editor file, side chats, computer use, Dispatch sessions dari ponsel Anda, tinjauan diff visual, pratinjau aplikasi, pemantauan PR, konektor, dan konfigurasi ente…
- [Claude Desktop di Linux (beta)](https://code.claude.com/docs/id/desktop-linux.md): Instal dan perbarui aplikasi desktop Claude di Ubuntu dan Debian
- [Claude Code Desktop di WSL](https://code.claude.com/docs/id/desktop-wsl.md): Jalankan sesi Code di dalam distribusi WSL 2 di Windows
- [Jadwalkan tugas berulang di Claude Code Desktop](https://code.claude.com/docs/id/desktop-scheduled-tasks.md): Atur tugas terjadwal di Claude Code Desktop untuk menjalankan Claude secara otomatis pada basis berulang untuk tinjauan kode harian, audit dependensi, atau briefing pagi.

##### Tinjauan kode & CI/CD

- [Tangkap masalah keamanan saat Claude menulis kode](https://code.claude.com/docs/id/security-guidance.md): Instal plugin security-guidance untuk membuat Claude meninjau perubahan kodenya sendiri untuk kerentanan dan memperbaikinya dalam sesi yang sama.
- [Code Review](https://code.claude.com/docs/id/code-review.md): Siapkan ulasan PR otomatis yang menangkap kesalahan logika, kerentanan keamanan, dan regresi menggunakan analisis multi-agen dari seluruh basis kode Anda
- [Claude Code GitHub Actions](https://code.claude.com/docs/id/github-actions.md): Pelajari tentang integrasi Claude Code ke dalam alur kerja pengembangan Anda dengan Claude Code GitHub Actions
- [Claude Code dengan GitHub Enterprise Server](https://code.claude.com/docs/id/github-enterprise-server.md): Hubungkan Claude Code ke instans GitHub Enterprise Server yang di-host sendiri untuk sesi web, tinjauan kode, dan pasar plugin.
- [Claude Code GitLab CI/CD](https://code.claude.com/docs/id/gitlab-ci-cd.md): Pelajari tentang mengintegrasikan Claude Code ke dalam alur kerja pengembangan Anda dengan GitLab CI/CD

### Bangun dengan Claude Code

#### Agen dan pekerjaan paralel

- [Jalankan agen secara paralel](https://code.claude.com/docs/id/agents.md): Bandingkan cara Claude Code dapat menangani beberapa tugas sekaligus: subagents, agent view, agent teams, dan dynamic workflows.
- [Buat subagent khusus](https://code.claude.com/docs/id/sub-agents.md): Buat dan gunakan subagent AI khusus di Claude Code untuk alur kerja khusus tugas dan manajemen konteks yang lebih baik.
- [Kelola banyak agen dengan tampilan agen](https://code.claude.com/docs/id/agent-view.md): Kirim dan kelola banyak sesi Claude Code dari satu layar. Tampilan agen menunjukkan apa yang dilakukan setiap sesi dan mana yang membutuhkan masukan Anda.
- [Koordinasikan tim Claude Code sessions](https://code.claude.com/docs/id/agent-teams.md): Koordinasikan beberapa instance Claude Code yang bekerja bersama sebagai tim, dengan tugas bersama, pesan antar-agent, dan manajemen terpusat.
- [Orkestrasi subagen dalam skala besar dengan alur kerja dinamis](https://code.claude.com/docs/id/workflows.md): Alur kerja dinamis mengorkestrasi banyak subagen dari skrip yang ditulis Claude dan dapat Anda jalankan kembali. Gunakan untuk audit basis kode, migrasi besar, dan penelitian lintas-periksa.
- [Jalankan sesi paralel dengan worktrees](https://code.claude.com/docs/id/worktrees.md): Isolasi sesi Claude Code paralel dalam git worktrees terpisah sehingga perubahan tidak bertabrakan. Mencakup flag `--worktree`, isolasi subagent, `.worktreeinclude`, pembersihan, dan hook VCS non-git.

#### MCP

- [Terhubung ke server MCP](https://code.claude.com/docs/id/mcp-quickstart.md): Tambahkan server MCP ke Claude Code, verifikasi koneksi, dan temukan konfigurasi di disk.
- [Hubungkan Claude Code ke alat melalui MCP](https://code.claude.com/docs/id/mcp.md): Pelajari cara menghubungkan Claude Code ke alat Anda dengan Model Context Protocol.

#### Skills

- [Perluas Claude dengan skills](https://code.claude.com/docs/id/skills.md): Buat, kelola, dan bagikan skills untuk memperluas kemampuan Claude di Claude Code. Termasuk perintah kustom dan skills bundel.

#### Plugin

- [Temukan dan instal plugin yang sudah dibuat melalui marketplace](https://code.claude.com/docs/id/discover-plugins.md): Temukan dan instal plugin dari marketplace untuk memperluas Claude Code dengan skills, agen, dan kemampuan baru.
- [Buat plugins](https://code.claude.com/docs/id/plugins.md): Buat plugins kustom untuk memperluas Claude Code dengan skills, agents, hooks, dan MCP servers.

#### Artefak

- [Bagikan keluaran sesi sebagai artifacts](https://code.claude.com/docs/id/artifacts.md): Artifacts mengubah pekerjaan Claude Code menjadi halaman interaktif langsung di claude.ai yang dapat Anda simpan secara pribadi, bagikan dengan organisasi Anda, atau terbitkan ke tautan publik.

#### Otomasi

- [Otomatisasi tindakan dengan hooks](https://code.claude.com/docs/id/hooks-guide.md): Jalankan perintah shell secara otomatis ketika Claude Code mengedit file, menyelesaikan tugas, atau memerlukan input. Format kode, kirim notifikasi, validasi perintah, dan terapkan aturan proyek.
- [Dorong acara ke dalam sesi yang sedang berjalan dengan channels](https://code.claude.com/docs/id/channels.md): Gunakan channels untuk mendorong pesan, peringatan, dan webhooks ke dalam sesi Claude Code Anda dari server MCP. Teruskan hasil CI, pesan obrolan, dan acara pemantauan sehingga Claude dapat bereaksi saat Anda tidak ada.
- [Jalankan prompt sesuai jadwal](https://code.claude.com/docs/id/scheduled-tasks.md): Gunakan /loop dan alat penjadwalan cron untuk menjalankan prompt berulang kali, polling status, atau mengatur pengingat sekali jalan dalam sesi Claude Code.
- [Jaga Claude tetap bekerja menuju tujuan](https://code.claude.com/docs/id/goal.md): Tetapkan kondisi penyelesaian dengan /goal dan Claude terus bekerja lintas giliran hingga kondisi terpenuhi.
- [Jalankan Claude Code secara programatis](https://code.claude.com/docs/id/headless.md): Gunakan Agent SDK untuk menjalankan Claude Code secara programatis dari CLI, Python, atau TypeScript.
- [Luncurkan sesi dari tautan](https://code.claude.com/docs/id/deep-links.md): Buka sesi terminal Claude Code dari URL. Sematkan tautan `claude-cli://` dalam runbook, peringatan, dan dasbor sehingga klik membuka Claude Code di repo yang tepat dengan prompt yang tepat.

#### Panduan

- [Siapkan Claude Code di monorepo atau codebase besar](https://code.claude.com/docs/id/large-codebases.md): Konfigurasikan Claude Code untuk monorepos dan codebase pohon tunggal besar dengan file CLAUDE.md bersarang, worktrees sparse, code intelligence, dan skills per-paket sehingga Claude tetap fokus pada kode yang sedang Anda kerjakan.

#### Pemecahan Masalah

- [Troubleshoot installation and login](https://code.claude.com/docs/id/troubleshoot-install.md): Perbaiki command not found, PATH, permission, network, dan authentication errors saat menginstal atau masuk ke Claude Code.
- [Troubleshooting](https://code.claude.com/docs/id/troubleshooting.md): Perbaiki penggunaan CPU atau memori yang tinggi, hang, thrashing auto-compact, dan masalah pencarian di Claude Code, dan temukan halaman yang tepat untuk masalah lainnya.
- [Debug konfigurasi Anda](https://code.claude.com/docs/id/debug-your-config.md): Diagnosis mengapa CLAUDE.md, settings, hooks, server MCP, atau skills tidak berlaku. Gunakan /context, /doctor, /hooks, dan /mcp untuk melihat apa yang benar-benar dimuat.
- [Referensi kesalahan](https://code.claude.com/docs/id/errors.md): Cari pesan kesalahan runtime Claude Code dengan penjelasan arti dan cara memperbaikinya.

### Administrasi

#### Pengaturan dan akses

- [Siapkan Claude Code untuk organisasi Anda](https://code.claude.com/docs/id/admin-setup.md): Peta keputusan untuk administrator yang menerapkan Claude Code, mencakup penyedia API, pengaturan terkelola, penegakan kebijakan, pemantauan penggunaan, dan penanganan data.
- [Pengaturan lanjutan](https://code.claude.com/docs/id/setup.md): Persyaratan sistem, instalasi khusus platform, manajemen versi, dan penghapusan instalasi untuk Claude Code.
- [Autentikasi](https://code.claude.com/docs/id/authentication.md): Masuk ke Claude Code dan konfigurasikan autentikasi untuk individu, tim, dan organisasi.
- [Konfigurasi pengaturan yang dikelola server](https://code.claude.com/docs/id/server-managed-settings.md): Konfigurasi Claude Code secara terpusat untuk organisasi Anda melalui pengaturan yang dikirimkan server, tanpa memerlukan infrastruktur manajemen perangkat.
- [Kontrol akses server MCP untuk organisasi Anda](https://code.claude.com/docs/id/managed-mcp.md): Batasi server MCP mana yang dapat ditambahkan atau dihubungkan pengguna dengan file konfigurasi yang dikelola, daftar izin, dan daftar penolakan.
- [Konfigurasi mode otomatis](https://code.claude.com/docs/id/auto-mode-config.md): Beri tahu pengklasifikasi mode otomatis repositori, bucket, dan domain mana yang dipercaya organisasi Anda. Atur konteks lingkungan, ganti aturan blokir dan izin default, dan periksa konfigurasi efektif Anda dengan subperintah CLI mode otomatis.

#### Penyebaran

- [Ikhtisar penyebaran enterprise](https://code.claude.com/docs/id/third-party-integrations.md): Pelajari bagaimana Claude Code dapat terintegrasi dengan berbagai layanan pihak ketiga dan infrastruktur untuk memenuhi persyaratan penyebaran enterprise.
- [Ketersediaan fitur](https://code.claude.com/docs/id/feature-availability.md): Bandingkan fitur Claude Code mana yang tersedia di seluruh paket langganan Anthropic, Anthropic Console, Amazon Bedrock, Claude Platform di AWS, Platform Agent Google Cloud, dan Microsoft Foundry.
- [Claude Code di Amazon Bedrock](https://code.claude.com/docs/id/amazon-bedrock.md): Pelajari tentang mengonfigurasi Claude Code melalui Amazon Bedrock, termasuk pengaturan, konfigurasi IAM, dan pemecahan masalah.
- [Claude Code pada Claude Platform on AWS](https://code.claude.com/docs/id/claude-platform-on-aws.md): Konfigurasi Claude Code untuk menggunakan Claude API yang dioperasikan Anthropic dengan autentikasi AWS, kontrol akses IAM, dan penagihan AWS Marketplace.
- [Claude Code di Platform Agen Google Cloud](https://code.claude.com/docs/id/google-vertex-ai.md): Pelajari tentang mengonfigurasi Claude Code melalui Platform Agen Google Cloud, yang sebelumnya bernama Vertex AI, termasuk pengaturan, konfigurasi IAM, dan pemecahan masalah.
- [Claude Code di Microsoft Foundry](https://code.claude.com/docs/id/microsoft-foundry.md): Pelajari tentang mengonfigurasi Claude Code melalui Microsoft Foundry, termasuk setup, konfigurasi, dan pemecahan masalah.
- [Konfigurasi jaringan enterprise](https://code.claude.com/docs/id/network-config.md): Konfigurasikan Claude Code untuk lingkungan enterprise dengan server proxy, Certificate Authorities (CA) kustom, dan autentikasi mutual Transport Layer Security (mTLS).
- [Jalankan Claude Code di balik peluncur korporat](https://code.claude.com/docs/id/corporate-launcher.md): Arahkan proses yang dimulai Claude Code dari binernya sendiri, termasuk layanan latar belakang dan setiap sesi tampilan agen, melalui peluncur yang diperlukan dengan CLAUDE_CODE_PROCESS_WRAPPER.
- [Kontainer pengembangan](https://code.claude.com/docs/id/devcontainer.md): Jalankan Claude Code di dalam kontainer pengembangan untuk lingkungan yang konsisten dan terisolasi di seluruh tim Anda.

#### Gateway

- [Jalankan Claude Code melalui gateway](https://code.claude.com/docs/id/gateways.md): Arahkan Claude Code melalui gateway yang di-host sendiri untuk kredensial terpusat, pelacakan penggunaan, dan kontrol biaya. Mencakup arsitektur, gateway aplikasi Claude Anthropic, dan menggunakan produk gateway lainnya.

##### Claude apps gateway

- [Claude apps gateway untuk Amazon Bedrock, Claude Platform di AWS, Google Cloud, dan Microsoft Foundry](https://code.claude.com/docs/id/claude-apps-gateway.md): Jalankan Claude Code melalui Amazon Bedrock, Claude Platform di AWS, Google Cloud, atau Microsoft Foundry di balik gateway yang di-host sendiri dengan SSO sign-in, akses model per-grup, dan telemetri OTLP.
- [Konfigurasi gateway aplikasi Claude](https://code.claude.com/docs/id/claude-apps-gateway-config.md): Referensi untuk setiap opsi gateway.yaml: listener dan TLS, OIDC, session, Postgres store, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, dan Microsoft Foundry upstreams, model routing, managed policies, dan telemetry.
- [Batas pengeluaran gateway aplikasi Claude](https://code.claude.com/docs/id/claude-apps-gateway-spend-limits.md): Batasi pengeluaran setiap pengembang melalui gateway aplikasi Claude berdasarkan hari, minggu, atau bulan. Tetapkan batas dengan Admin API dan gateway memberlakukannya secara langsung pada setiap permintaan.
- [Penyebaran dan operasi gateway aplikasi Claude](https://code.claude.com/docs/id/claude-apps-gateway-deploy.md): Daftarkan gateway dengan IdP Anda, bangun kontainer, sebarkan di Kubernetes atau Cloud Run, dan operasikan: pemeriksaan kesehatan, rotasi rahasia, peningkatan, dan keamanan.
- [Terapkan gateway aplikasi Claude di Google Cloud](https://code.claude.com/docs/id/claude-apps-gateway-on-gcp.md): Contoh praktis menjalankan gateway aplikasi Claude di Google Cloud: Cloud Run atau GKE, Cloud SQL untuk PostgreSQL, Secret Manager, dan autentikasi service-account ke Agent Platform Google Cloud.

##### Gateway lainnya

- [Gateway LLM lainnya](https://code.claude.com/docs/id/llm-gateway.md): Arahkan Claude Code melalui gateway LLM yang sudah dijalankan organisasi Anda. Mencakup menghubungkan Claude Code ke gateway, meluncurkannya untuk organisasi Anda, dan apa yang Claude Code kirimkan ke gateway.
- [Hubungkan Claude Code ke gateway LLM](https://code.claude.com/docs/id/llm-gateway-connect.md): Arahkan Claude Code ke gateway LLM organisasi Anda. Periksa apakah admin Anda sudah mengonfigurasinya, atau atur URL dasar dan kredensial sendiri, kemudian verifikasi koneksi dan perbaiki kesalahan gateway.
- [Luncurkan gateway LLM untuk organisasi Anda](https://code.claude.com/docs/id/llm-gateway-rollout.md): Terapkan produk gateway untuk Claude Code: konfigurasikan untuk meneruskan apa yang dikirim Claude Code, keluarkan kredensial pengembang, distribusikan konfigurasi melalui pengaturan terkelola, dan verifikasi peluncuran.
- [Referensi protokol gateway](https://code.claude.com/docs/id/llm-gateway-protocol.md): Kontrak API antara Claude Code dan gateway LLM: endpoint, header dan field body untuk diteruskan, degradasi fitur ketika field dihapus, header atribusi untuk pelacakan biaya, dan penemuan model.

#### Penggunaan dan biaya

- [Pemantauan](https://code.claude.com/docs/id/monitoring-usage.md): Pelajari cara mengaktifkan dan mengonfigurasi OpenTelemetry untuk Claude Code.
- [Kelola biaya secara efektif](https://code.claude.com/docs/id/costs.md): Lacak penggunaan token, tetapkan batas pengeluaran tim, dan kurangi biaya Claude Code dengan manajemen konteks, pemilihan model, pengaturan pemikiran yang diperluas, dan hook prapemrosesan.
- [Lacak penggunaan tim dengan analitik](https://code.claude.com/docs/id/analytics.md): Lihat metrik penggunaan Claude Code, lacak adopsi, dan ukur kecepatan teknik dalam dasbor analitik.

#### Distribusi Plugin

- [Buat dan distribusikan marketplace plugin](https://code.claude.com/docs/id/plugin-marketplaces.md): Bangun dan host marketplace plugin untuk mendistribusikan ekstensi Claude Code di seluruh tim dan komunitas.
- [Batasi versi dependensi plugin](https://code.claude.com/docs/id/plugin-dependencies.md): Deklarasikan batasan versi pada dependensi plugin, dan bundel satu set plugin yang dikurasi di balik satu instalasi.
- [Rekomendasikan plugin Anda dari CLI Anda](https://code.claude.com/docs/id/plugin-hints.md): Keluarkan penanda satu baris dari CLI Anda sehingga Claude Code meminta pengguna untuk memasang plugin resmi Anda.
- [Rekomendasikan plugins untuk organisasi Anda](https://code.claude.com/docs/id/plugin-relevance.md): Tambahkan blok relevance ke entri plugin marketplace sehingga Claude Code menyarankannya ketika pekerjaan pengguna cocok.

#### Keamanan dan data

- [Keamanan](https://code.claude.com/docs/id/security.md): Pelajari tentang perlindungan keamanan Claude Code dan praktik terbaik untuk penggunaan yang aman.
- [Penggunaan data](https://code.claude.com/docs/id/data-usage.md): Pelajari kebijakan penggunaan data Anthropic untuk Claude
- [Retensi data nol](https://code.claude.com/docs/id/zero-data-retention.md): Pelajari tentang Zero Data Retention (ZDR) untuk Claude Code, tersedia untuk akun yang memenuhi syarat di Claude for Enterprise, termasuk cakupan, fitur yang dinonaktifkan, dan cara meminta pengaktifan.

#### Adopsi

- [Kit komunikasi](https://code.claude.com/docs/id/communications-kit.md): Luncurkan pengumuman, pesan kampanye bertahap, dan respons FAQ untuk meluncurkan Claude Code ke organisasi teknik Anda.
- [Champion kit](https://code.claude.com/docs/id/champion-kit.md): Panduan untuk insinyur yang mengadvokasi Claude Code secara internal: apa yang harus dibagikan, cara menjawab pertanyaan, dan cara meningkatkan adopsi di tim Anda.

### Konfigurasi

#### Pengaturan dan izin

- [Pengaturan Claude Code](https://code.claude.com/docs/id/settings.md): Konfigurasikan Claude Code dengan pengaturan global dan tingkat proyek, serta variabel lingkungan.
- [Konfigurasi izin](https://code.claude.com/docs/id/permissions.md): Kontrol apa yang dapat diakses Claude Code dan lakukan dengan aturan izin terperinci, mode, dan kebijakan terkelola.
- [Pilih lingkungan sandbox](https://code.claude.com/docs/id/sandbox-environments.md): Bandingkan opsi sandbox Claude Code: alat Bash bersandbox bawaan, runtime sandbox, dev container, Docker, dan VM. Pilih isolasi yang tepat untuk model ancaman Anda.
- [Konfigurasi alat Bash sandboxed](https://code.claude.com/docs/id/sandboxing.md): Pelajari bagaimana alat Bash sandboxed Claude Code menyediakan isolasi filesystem dan jaringan untuk eksekusi agen yang lebih aman dan mandiri.

#### Model dan respons

- [Konfigurasi model](https://code.claude.com/docs/id/model-config.md): Pelajari tentang konfigurasi model Claude Code, termasuk alias model seperti `opusplan`
- [Percepat respons dengan mode cepat](https://code.claude.com/docs/id/fast-mode.md): Dapatkan respons Opus yang lebih cepat di Claude Code dengan mengaktifkan mode cepat.
- [Eskalasi keputusan sulit dengan alat advisor](https://code.claude.com/docs/id/advisor.md): Pasangkan model utama Anda dengan model advisor yang lebih kuat yang dikonsultasikan Claude pada momen-momen kunci selama tugas.
- [Output styles](https://code.claude.com/docs/id/output-styles.md): Sesuaikan Claude Code untuk penggunaan di luar rekayasa perangkat lunak

#### Antarmuka

- [Konfigurasi terminal Anda untuk Claude Code](https://code.claude.com/docs/id/terminal-config.md): Perbaiki Shift+Enter untuk baris baru, dapatkan bel terminal ketika Claude selesai, konfigurasi tmux, cocokkan tema warna, dan aktifkan mode Vim di CLI Claude Code.
- [Rendering fullscreen](https://code.claude.com/docs/id/fullscreen.md): Aktifkan mode rendering yang lebih halus dan bebas flicker dengan dukungan mouse dan penggunaan memori yang stabil dalam percakapan panjang.
- [Gunakan Claude Code dengan pembaca layar](https://code.claude.com/docs/id/accessibility.md): Atur Claude Code untuk pembaca layar seperti VoiceOver dan NVDA, plus pengaturan untuk pembesar layar, gerakan berkurang, dan tema ramah buta warna.
- [Dikte suara](https://code.claude.com/docs/id/voice-dictation.md): Ucapkan prompt Anda di Claude Code CLI dengan dikte suara tahan-untuk-merekam atau ketuk-untuk-merekam.
- [Sesuaikan baris status Anda](https://code.claude.com/docs/id/statusline.md): Konfigurasikan bilah status khusus untuk memantau penggunaan jendela konteks, biaya, dan status git di Claude Code
- [Sesuaikan pintasan keyboard](https://code.claude.com/docs/id/keybindings.md): Sesuaikan pintasan keyboard di Claude Code dengan file konfigurasi keybindings.

### Referensi

#### Referensi

- [Referensi CLI](https://code.claude.com/docs/id/cli-reference.md): Referensi lengkap untuk antarmuka baris perintah Claude Code, termasuk perintah dan flag.
- [Perintah](https://code.claude.com/docs/id/commands.md): Referensi lengkap untuk perintah yang tersedia di Claude Code, termasuk perintah bawaan dan skills bundel.
- [Variabel lingkungan](https://code.claude.com/docs/id/env-vars.md): Referensi untuk variabel lingkungan yang mengontrol perilaku Claude Code.
- [Referensi Tools](https://code.claude.com/docs/id/tools-reference.md): Referensi lengkap untuk tools yang dapat digunakan Claude Code, termasuk persyaratan izin dan perilaku per-tool.
- [Mode interaktif](https://code.claude.com/docs/id/interactive-mode.md): Referensi lengkap untuk pintasan keyboard, mode input, dan fitur interaktif dalam sesi Claude Code.
- [Checkpointing](https://code.claude.com/docs/id/checkpointing.md): Lacak, putar ulang, dan ringkas edit dan percakapan Claude untuk mengelola status sesi.
- [Referensi hooks](https://code.claude.com/docs/id/hooks.md): Referensi untuk event hook Claude Code, skema konfigurasi, format JSON input/output, kode keluar, hooks asinkron, hooks HTTP, prompt hooks, dan MCP tool hooks.
- [Referensi Plugins](https://code.claude.com/docs/id/plugins-reference.md): Referensi teknis lengkap untuk sistem plugin Claude Code, termasuk skema, perintah CLI, dan spesifikasi komponen.
- [Referensi Channels](https://code.claude.com/docs/id/channels-reference.md): Bangun server MCP yang mendorong webhooks, alerts, dan pesan chat ke dalam sesi Claude Code. Referensi untuk kontrak channel: deklarasi kemampuan, event notifikasi, tools balasan, gating pengirim, dan relay izin.

#### Glosarium

- [Glosarium](https://code.claude.com/docs/id/glossary.md): Definisi untuk terminologi Claude Code. Pelajari apa itu agentic loop, compaction, CLAUDE.md, hooks, subagents, MCP, dan konsep inti lainnya.

### Agent SDK

#### Agent SDK

- [Gambaran Umum Agent SDK](https://code.claude.com/docs/id/agent-sdk/overview.md): Bangun agen AI produksi dengan Claude Code sebagai perpustakaan
- [Panduan Cepat](https://code.claude.com/docs/id/agent-sdk/quickstart.md): Mulai dengan Agent SDK Python atau TypeScript untuk membangun agen AI yang bekerja secara mandiri

#### Konsep Inti

- [Cara kerja agent loop](https://code.claude.com/docs/id/agent-sdk/agent-loop.md): Pahami lifecycle pesan, eksekusi tool, context window, dan arsitektur yang menggerakkan agent SDK Anda.
- [Gunakan fitur Claude Code di SDK](https://code.claude.com/docs/id/agent-sdk/claude-code-features.md): Muat instruksi proyek, skills, hooks, dan fitur Claude Code lainnya ke dalam agen SDK Anda.
- [Bekerja dengan sesi](https://code.claude.com/docs/id/agent-sdk/sessions.md): Bagaimana sesi mempertahankan riwayat percakapan agen, dan kapan menggunakan continue, resume, dan fork untuk kembali ke run sebelumnya.
- [Simpan sesi ke penyimpanan eksternal](https://code.claude.com/docs/id/agent-sdk/session-storage.md): Cerminkan transkrip sesi ke S3, Redis, atau backend Anda sendiri sehingga host apa pun dapat melanjutkannya.

#### Input dan output

- [Streaming Input](https://code.claude.com/docs/id/agent-sdk/streaming-vs-single-mode.md): Memahami dua mode input untuk Claude Agent SDK dan kapan menggunakan masing-masing
- [Menangani persetujuan dan input pengguna](https://code.claude.com/docs/id/agent-sdk/user-input.md): Tampilkan permintaan persetujuan Claude dan pertanyaan klarifikasi kepada pengguna, kemudian kembalikan keputusan mereka ke SDK.
- [Stream responses in real-time](https://code.claude.com/docs/id/agent-sdk/streaming-output.md): Dapatkan respons real-time dari Agent SDK saat teks dan tool calls streaming masuk
- [Dapatkan output terstruktur dari agen](https://code.claude.com/docs/id/agent-sdk/structured-outputs.md): Kembalikan JSON yang divalidasi dari alur kerja agen menggunakan JSON Schema, Zod, atau Pydantic. Dapatkan data terstruktur yang aman tipe setelah penggunaan alat multi-putaran.

#### Perluas dengan tools

- [Berikan Claude alat kustom](https://code.claude.com/docs/id/agent-sdk/custom-tools.md): Tentukan alat kustom dengan server MCP dalam proses SDK Agent sehingga Claude dapat memanggil fungsi Anda, mengakses API Anda, dan melakukan operasi khusus domain.
- [Hubungkan ke alat eksternal dengan MCP](https://code.claude.com/docs/id/agent-sdk/mcp.md): Konfigurasi server MCP untuk memperluas agen Anda dengan alat eksternal. Mencakup jenis transport, pencarian alat untuk set alat besar, autentikasi, dan penanganan kesalahan.
- [Skalakan ke banyak tools dengan pencarian tools](https://code.claude.com/docs/id/agent-sdk/tool-search.md): Skalakan agen Anda ke ribuan tools dengan menemukan dan memuat hanya yang diperlukan, sesuai permintaan.
- [Subagents dalam SDK](https://code.claude.com/docs/id/agent-sdk/subagents.md): Tentukan dan panggil subagents untuk mengisolasi konteks, menjalankan tugas secara paralel, dan menerapkan instruksi khusus dalam aplikasi Claude Agent SDK Anda.

#### Sesuaikan perilaku

- [Memodifikasi system prompts](https://code.claude.com/docs/id/agent-sdk/modifying-system-prompts.md): Pilih antara preset `claude_code` dan system prompt kustom, serta sesuaikan perilaku dengan CLAUDE.md, output styles, append, atau prompt yang sepenuhnya kustom.
- [Agent Skills dalam SDK](https://code.claude.com/docs/id/agent-sdk/skills.md): Perluas Claude dengan kemampuan khusus menggunakan Agent Skills dalam Claude Agent SDK
- [Plugins dalam SDK](https://code.claude.com/docs/id/agent-sdk/plugins.md): Muat plugin kustom untuk memperluas Claude Code dengan skills, agen, hooks, dan server MCP melalui Agent SDK

#### Kontrol dan observabilitas

- [Konfigurasi izin](https://code.claude.com/docs/id/agent-sdk/permissions.md): Kontrol bagaimana agen Anda menggunakan alat dengan mode izin, hooks, dan aturan allow/deny deklaratif.
- [Intercept dan kontrol perilaku agent dengan hooks](https://code.claude.com/docs/id/agent-sdk/hooks.md): Intercept dan customize perilaku agent pada titik eksekusi kunci dengan hooks
- [Kembalikan perubahan file dengan checkpointing](https://code.claude.com/docs/id/agent-sdk/file-checkpointing.md): Lacak perubahan file selama sesi agen dan pulihkan file ke status sebelumnya
- [Lacak biaya dan penggunaan](https://code.claude.com/docs/id/agent-sdk/cost-tracking.md): Pelajari cara melacak penggunaan token, memperkirakan biaya, dan mengonfigurasi prompt caching dengan Claude Agent SDK.
- [Observability dengan OpenTelemetry](https://code.claude.com/docs/id/agent-sdk/observability.md): Ekspor traces, metrics, dan events dari Agent SDK ke backend observability Anda menggunakan OpenTelemetry.
- [Daftar Todo](https://code.claude.com/docs/id/agent-sdk/todo-tracking.md): Lacak dan tampilkan todos menggunakan Claude Agent SDK untuk manajemen tugas yang terorganisir

#### Penyebaran

- [Hosting the Agent SDK](https://code.claude.com/docs/id/agent-sdk/hosting.md): Menerapkan Agent SDK dalam produksi: arsitektur subprocess, persistensi sesi, penskalaan, observabilitas, dan isolasi multi-tenant untuk Docker, Kubernetes, dan penyedia sandbox.
- [Mengamankan penyebaran agen AI](https://code.claude.com/docs/id/agent-sdk/secure-deployment.md): Panduan untuk mengamankan penyebaran Claude Code dan Agent SDK dengan isolasi, manajemen kredensial, dan kontrol jaringan

#### Referensi SDK

- [Agent SDK reference - TypeScript](https://code.claude.com/docs/id/agent-sdk/typescript.md): Referensi API lengkap untuk TypeScript Agent SDK, termasuk semua fungsi, tipe, dan antarmuka.
- [TypeScript SDK V2 session API (dihapus)](https://code.claude.com/docs/id/agent-sdk/typescript-v2-preview.md): Referensi untuk API sesi SDK Agent TypeScript V2 yang dihapus, dengan pola send/stream berbasis sesi untuk percakapan multi-turn.
- [Referensi Agent SDK - Python](https://code.claude.com/docs/id/agent-sdk/python.md): Referensi API lengkap untuk Python Agent SDK, termasuk semua fungsi, tipe, dan kelas.
- [Migrasi ke Claude Agent SDK](https://code.claude.com/docs/id/agent-sdk/migration-guide.md): Panduan untuk migrasi Claude Code TypeScript dan Python SDKs ke Claude Agent SDK

### Apa yang Baru

#### Apa yang Baru

- [Apa yang baru](https://code.claude.com/docs/id/whats-new/index.md): Ringkasan mingguan fitur Claude Code yang penting, dengan cuplikan kode, demo, dan konteks tentang mengapa hal-hal ini penting.
- [Minggu 28 · 6–10 Juli, 2026](https://code.claude.com/docs/id/whats-new/2026-w28.md): Jelajahi situs eksternal dari browser bawaan aplikasi Desktop, jalankan pemeriksaan pengaturan lengkap dengan /doctor, dan dapatkan perlindungan transkrip mode otomatis dan peningkatan tampilan agen.
- [Minggu 27 · 29 Juni – 3 Juli 2026](https://code.claude.com/docs/id/whats-new/2026-w27.md): Claude Sonnet 5 menjadi model default, Claude di Chrome mencapai ketersediaan umum, subagents berjalan di latar belakang secara default, Claude Desktop tiba di Linux dalam beta, dan /radio menyetel Claude FM.
- [Minggu 26 · 22–26 Juni 2026](https://code.claude.com/docs/id/whats-new/2026-w26.md): Autentikasi server MCP dari shell Anda dengan claude mcp login, dapatkan respons terhadap output perintah shell mode dengan awalan !, dan lanjutkan percakapan dari sebelum /clear dengan /rewind.
- [Minggu 25 · 15–19 Juni 2026](https://code.claude.com/docs/id/whats-new/2026-w25.md): Publikasikan halaman langsung yang dapat dibagikan dari sesi Anda dengan Artifacts, cocokkan parameter alat dalam aturan deny dan ask, dan atur pengaturan apa pun dari prompt dengan /config.
- [Minggu 24 · 8–12 Juni 2026](https://code.claude.com/docs/id/whats-new/2026-w24.md): Pindahkan sesi ke direktori baru dengan /cd, biarkan sub-agen menjalankan sub-agen mereka sendiri, dan selesaikan konfigurasi yang rusak dengan mode aman.
- [Minggu 23 · 1–5 Juni 2026](https://code.claude.com/docs/id/whats-new/2026-w23.md): Jalankan auto mode di Amazon Bedrock, Google Cloud's Agent Platform, dan Microsoft Foundry, minta persetujuan sebelum menulis file yang dapat menjalankan kode dalam mode acceptEdits, daftar plugin yang terinstal dengan /plugin list, dan perlukan rentang versi yang disetujui untuk penerapan terkelola…
- [Minggu 22 · 25–29 Mei, 2026](https://code.claude.com/docs/id/whats-new/2026-w22.md): Jalankan Claude Code di Claude Opus 4.8, orkestrasi tugas besar dengan alur kerja dinamis, tangkap masalah keamanan dengan plugin security-guidance, dan gunakan fast mode di Opus 4.8 dengan harga lebih rendah.
- [Minggu 21 · 18–22 Mei, 2026](https://code.claude.com/docs/id/whats-new/2026-w21.md): Gunakan auto mode pada paket Pro dan dengan Sonnet 4.6, lihat skill, subagent, dan server MCP mana yang mendorong batas paket Anda di /usage, dan tinjau diff dengan perintah /code-review yang baru.
- [Minggu 20 · 11–15 Mei, 2026](https://code.claude.com/docs/id/whats-new/2026-w20.md): Kelola setiap sesi Claude Code dari satu layar dengan tampilan agen, biarkan Claude bekerja menuju tujuan hingga kondisi terpenuhi, dan jalankan mode cepat di Opus 4.7 secara default.
- [Minggu 19 · 4–8 Mei 2026](https://code.claude.com/docs/id/whats-new/2026-w19.md): Muat plugin dari arsip .zip dan URL, cari riwayat perintah di seluruh proyek dengan Ctrl+R, cabang worktree baru dari HEAD lokal atau default jarak jauh, dan blokir tindakan tanpa syarat dengan aturan hard deny mode otomatis.
- [Minggu 18 · 27 April – 1 Mei, 2026](https://code.claude.com/docs/id/whats-new/2026-w18.md): Claude Code di Windows berjalan tanpa Git Bash, claude auth login menerima kode OAuth yang ditempel langsung, claude project purge membersihkan status lokal per proyek, dan menempel URL PR ke /resume menemukan sesi yang membuatnya.
- [Minggu 17 · 20–24 April 2026](https://code.claude.com/docs/id/whats-new/2026-w17.md): /ultrareview dibuka sebagai pratinjau penelitian, ringkasan sesi otomatis saat Anda kembali ke terminal, tema warna khusus yang dapat Anda buat dan kirim dalam plugin, dan Claude Code yang dirancang ulang di web.
- [Minggu 16 · 13–17 April 2026](https://code.claude.com/docs/id/whats-new/2026-w16.md): Claude Opus 4.7 dengan tingkat upaya xhigh baru, Routines di Claude Code di web, notifikasi push mobile yang mengirim ping ke ponsel Anda ketika Claude membutuhkan Anda, /usage breakdown yang menunjukkan apa yang mendorong batas Anda, dan binari asli menggantikan JavaScript yang dibundel.
- [Minggu 15 · 6–10 April 2026](https://code.claude.com/docs/id/whats-new/2026-w15.md): Ultraplan perencanaan cloud, alat Monitor dengan self-pacing /loop, /team-onboarding untuk mengemas setup Anda, dan /autofix-pr dari terminal Anda.
- [Minggu 14 · 30 Maret – 3 April 2026](https://code.claude.com/docs/id/whats-new/2026-w14.md): Computer use di CLI, pelajaran interaktif dalam produk, rendering tanpa flicker, override ukuran hasil MCP per-tool, dan executable plugin di PATH.
- [Minggu 13 · 23–27 Maret 2026](https://code.claude.com/docs/id/whats-new/2026-w13.md): Mode otomatis untuk izin tanpa tangan, penggunaan komputer bawaan, perbaikan PR otomatis di cloud, pencarian transkrip, dan alat PowerShell untuk Windows.

### Sumber Daya

#### Sumber Daya

- [Hukum dan kepatuhan](https://code.claude.com/docs/id/legal-and-compliance.md): Perjanjian hukum, sertifikasi kepatuhan, dan informasi keamanan untuk Claude Code.
