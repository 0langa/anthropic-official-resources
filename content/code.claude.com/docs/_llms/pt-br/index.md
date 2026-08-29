# Claude Code Docs: Brazilian Portuguese

> Official documentation for Claude Code, Anthropic's agentic coding tool available in the terminal, IDE, desktop app, and browser. Covers installation, configuration, skills, subagents, hooks, MCP, the Agent SDK, and reference material.

## Brazilian Portuguese

### Primeiros passos

#### Primeiros passos

- [Visão geral](https://code.claude.com/docs/pt/overview.md): Claude Code é uma ferramenta de codificação agentic que lê sua base de código, edita arquivos, executa comandos e se integra com suas ferramentas de desenvolvimento. Disponível em seu terminal, IDE, aplicativo de desktop e navegador.
- [Guia de Início Rápido](https://code.claude.com/docs/pt/quickstart.md): Bem-vindo ao Claude Code!
- [Changelog](https://code.claude.com/docs/pt/changelog.md)

#### Conceitos principais

- [Como Claude Code funciona](https://code.claude.com/docs/pt/how-claude-code-works.md): Entenda o loop agentic, as ferramentas integradas e como Claude Code interage com seu projeto.
- [Estender Claude Code](https://code.claude.com/docs/pt/features-overview.md): Entenda quando usar CLAUDE.md, Skills, subagents, hooks, MCP e plugins.
- [Explore o diretório .claude](https://code.claude.com/docs/pt/claude-directory.md): Onde Claude Code lê CLAUDE.md, settings.json, hooks, skills, commands, subagents, workflows, rules e auto memory. Explore o diretório .claude em seu projeto e ~/.claude em seu diretório home.
- [Explore a janela de contexto](https://code.claude.com/docs/pt/context-window.md): Uma simulação interativa de como a janela de contexto do Claude Code se preenche durante uma sessão. Veja o que é carregado automaticamente, quanto cada leitura de arquivo custa e quando regras e hooks são acionados.
- [Como Claude Code usa prompt caching](https://code.claude.com/docs/pt/prompt-caching.md): Claude Code gerencia prompt caching automaticamente. Veja por que uma mudança de modelo dispara um turno lento sem cache, o que `/compact` custa, por que edições de CLAUDE.md não se aplicam no meio da sessão e como verificar sua taxa de acerto de cache.

#### Usar Claude Code

- [Como Claude se lembra do seu projeto](https://code.claude.com/docs/pt/memory.md): Dê a Claude instruções persistentes com arquivos CLAUDE.md e deixe Claude acumular aprendizados automaticamente com memória automática.
- [Escolha um modo de permissão](https://code.claude.com/docs/pt/permission-modes.md): Controle se Claude pede permissão antes de editar arquivos ou executar comandos. Alterne modos com Shift+Tab na CLI ou use o seletor de modo no VS Code, Desktop e claude.ai.
- [Gerenciar sessões](https://code.claude.com/docs/pt/sessions.md): Nomeie, retome, ramifique e alterne entre conversas do Claude Code. Abrange `--continue`, `--resume`, `--from-pr`, o seletor `/resume`, nomeação de sessão, exportação de transcritos e onde os transcritos são armazenados.
- [Fluxos de trabalho comuns](https://code.claude.com/docs/pt/common-workflows.md): Guias passo a passo para explorar bases de código, corrigir bugs, refatorar, testar e outras tarefas cotidianas com Claude Code.
- [Biblioteca de prompts](https://code.claude.com/docs/pt/prompt-library.md): Copie e cole prompts para Claude Code, marcados por tarefa e função.
- [Melhores práticas para Claude Code](https://code.claude.com/docs/pt/best-practices.md): Dicas e padrões para aproveitar ao máximo o Claude Code, desde a configuração do seu ambiente até o dimensionamento em sessões paralelas.

#### Plataformas e integrações

- [Plataformas e integrações](https://code.claude.com/docs/pt/platforms.md): Escolha onde executar Claude Code e o que conectar a ele. Compare a CLI, Desktop, VS Code, JetBrains, web, mobile e integrações como Chrome, Slack e CI/CD.
- [Continue sessões locais de qualquer dispositivo com Remote Control](https://code.claude.com/docs/pt/remote-control.md): Continue uma sessão local do Claude Code do seu telefone, tablet ou qualquer navegador usando Remote Control. Funciona com claude.ai/code e o aplicativo Claude para dispositivos móveis.
- [Use Claude Code with Chrome](https://code.claude.com/docs/pt/chrome.md): Conecte Claude Code ao seu navegador Chrome para testar aplicativos web, depurar com logs de console, automatizar preenchimento de formulários e extrair dados de páginas web.
- [Deixe Claude usar seu computador a partir da CLI](https://code.claude.com/docs/pt/computer-use.md): Ative o computer use na Claude Code CLI para que Claude possa abrir aplicativos, clicar, digitar e ver sua tela no macOS. Teste aplicativos nativos, depure problemas visuais e automatize ferramentas apenas com GUI sem sair do seu terminal.
- [Use Claude Code in VS Code](https://code.claude.com/docs/pt/vs-code.md): Instale e configure a extensão Claude Code para VS Code. Obtenha assistência de codificação com IA com diffs inline, @-mentions, revisão de planos e atalhos de teclado.
- [JetBrains IDEs](https://code.claude.com/docs/pt/jetbrains.md): Use Claude Code with JetBrains IDEs including IntelliJ, PyCharm, WebStorm, and more
- [Claude Code no Slack](https://code.claude.com/docs/pt/slack.md): Delegue tarefas de codificação diretamente do seu espaço de trabalho Slack

##### Claude Code na web

- [Comece com Claude Code na web](https://code.claude.com/docs/pt/web-quickstart.md): Execute Claude Code na nuvem a partir do seu navegador ou telefone. Conecte um repositório GitHub, envie uma tarefa e revise o PR sem configuração local.
- [Use Claude Code na web](https://code.claude.com/docs/pt/claude-code-on-the-web.md): Configure ambientes em nuvem, scripts de configuração, acesso à rede e Docker na sandbox da Anthropic. Mova sessões entre web e terminal com `--cloud` e `--teleport`.
- [Automatizar trabalho com rotinas](https://code.claude.com/docs/pt/routines.md): Coloque Claude Code no piloto automático. Defina rotinas que são executadas em um cronograma, acionadas em chamadas de API ou reagem a eventos do GitHub a partir da infraestrutura em nuvem gerenciada pela Anthropic.
- [Encontre bugs com ultrareview](https://code.claude.com/docs/pt/ultrareview.md): Execute uma revisão de código profunda e multi-agente na nuvem com /code-review ultra para encontrar e verificar bugs antes de fazer merge.

##### Claude Code no desktop

- [Comece com o aplicativo de desktop](https://code.claude.com/docs/pt/desktop-quickstart.md): Instale Claude Code no desktop e inicie sua primeira sessão de codificação
- [Aplicativo Desktop](https://code.claude.com/docs/pt/desktop.md): Aproveite ao máximo o Claude Code Desktop: sessões paralelas com isolamento Git, layout de painel com arrastar e soltar, terminal integrado e editor de arquivo, chats laterais, computer use, Dispatch sessions do seu telefone, revisão visual de diff, visualizações de aplicativos, monitoramento de PR,…
- [Claude Desktop no Linux (beta)](https://code.claude.com/docs/pt/desktop-linux.md): Instale e atualize o aplicativo desktop Claude no Ubuntu e Debian
- [Claude Code Desktop em WSL](https://code.claude.com/docs/pt/desktop-wsl.md): Execute sessões de Code dentro de uma distribuição WSL 2 no Windows
- [Agendar tarefas recorrentes no Claude Code Desktop](https://code.claude.com/docs/pt/desktop-scheduled-tasks.md): Configure tarefas agendadas no Claude Code Desktop para executar Claude automaticamente em uma base recorrente para análises de código diárias, auditorias de dependências ou briefings matinais.

##### Revisão de código e CI/CD

- [Detectar problemas de segurança enquanto Claude escreve código](https://code.claude.com/docs/pt/security-guidance.md): Instale o plugin security-guidance para que Claude revise suas próprias alterações de código em busca de vulnerabilidades e as corrija na mesma sessão.
- [Code Review](https://code.claude.com/docs/pt/code-review.md): Configure análises automatizadas de PR que detectam erros de lógica, vulnerabilidades de segurança e regressões usando análise multi-agente de sua base de código completa
- [Claude Code GitHub Actions](https://code.claude.com/docs/pt/github-actions.md): Saiba como integrar Claude Code no seu fluxo de trabalho de desenvolvimento com Claude Code GitHub Actions
- [Claude Code com GitHub Enterprise Server](https://code.claude.com/docs/pt/github-enterprise-server.md): Conecte Claude Code à sua instância auto-hospedada do GitHub Enterprise Server para sessões web, revisão de código e marketplaces de plugins.
- [Claude Code GitLab CI/CD](https://code.claude.com/docs/pt/gitlab-ci-cd.md): Saiba como integrar Claude Code no seu fluxo de trabalho de desenvolvimento com GitLab CI/CD

### Construir com Claude Code

#### Agentes e trabalho paralelo

- [Executar agentes em paralelo](https://code.claude.com/docs/pt/agents.md): Compare as formas como Claude Code pode assumir múltiplas tarefas simultaneamente: subagentes, visualização de agentes, equipes de agentes e workflows dinâmicos.
- [Criar subagentes personalizados](https://code.claude.com/docs/pt/sub-agents.md): Crie e use subagentes de IA especializados no Claude Code para fluxos de trabalho específicos de tarefas e gerenciamento de contexto aprimorado.
- [Gerenciar múltiplos agentes com agent view](https://code.claude.com/docs/pt/agent-view.md): Despache e gerencie muitas sessões Claude Code a partir de uma tela. Agent view mostra o que cada sessão está fazendo e quais precisam de sua entrada.
- [Orquestre equipes de sessões Claude Code](https://code.claude.com/docs/pt/agent-teams.md): Coordene múltiplas instâncias Claude Code trabalhando juntas como uma equipe, com tarefas compartilhadas, mensagens entre agentes e gerenciamento centralizado.
- [Orquestre subagentos em escala com fluxos de trabalho dinâmicos](https://code.claude.com/docs/pt/workflows.md): Fluxos de trabalho dinâmicos orquestram muitos subagentos a partir de um script que Claude escreve e você pode executar novamente. Use-os para auditorias de base de código, grandes migrações e pesquisa com verificação cruzada.
- [Executar sessões paralelas com worktrees](https://code.claude.com/docs/pt/worktrees.md): Isole sessões paralelas do Claude Code em worktrees git separadas para que as alterações não colidam. Abrange o sinalizador `--worktree`, isolamento de subagentes, `.worktreeinclude`, limpeza e hooks de VCS não-git.

#### MCP

- [Conectar a servidores MCP](https://code.claude.com/docs/pt/mcp-quickstart.md): Adicione um servidor MCP ao Claude Code, verifique a conexão e encontre a configuração no disco.
- [Conectar Claude Code a ferramentas via MCP](https://code.claude.com/docs/pt/mcp.md): Aprenda como conectar Claude Code às suas ferramentas com o Model Context Protocol.

#### Skills

- [Estenda Claude com skills](https://code.claude.com/docs/pt/skills.md): Crie, gerencie e compartilhe skills para estender as capacidades do Claude no Claude Code. Inclui comandos personalizados e skills agrupadas.

#### Plugins

- [Descubra e instale plugins pré-construídos através de marketplaces](https://code.claude.com/docs/pt/discover-plugins.md): Encontre e instale plugins de marketplaces para estender Claude Code com novas skills, agentes e capacidades.
- [Criar plugins](https://code.claude.com/docs/pt/plugins.md): Crie plugins personalizados para estender Claude Code com skills, agents, hooks e MCP servers.

#### Artefatos

- [Compartilhar saída de sessão como artefatos](https://code.claude.com/docs/pt/artifacts.md): Artefatos transformam o trabalho do Claude Code em páginas ao vivo e interativas no claude.ai que você pode manter privadas, compartilhar com sua organização ou publicar em um link público.

#### Automação

- [Automatizar ações com hooks](https://code.claude.com/docs/pt/hooks-guide.md): Execute comandos shell automaticamente quando Claude Code edita arquivos, conclui tarefas ou precisa de entrada. Formate código, envie notificações, valide comandos e aplique regras do projeto.
- [Enviar eventos para uma sessão em execução com canais](https://code.claude.com/docs/pt/channels.md): Use canais para enviar mensagens, alertas e webhooks para sua sessão Claude Code de um servidor MCP. Encaminhe resultados de CI, mensagens de chat e eventos de monitoramento para que Claude possa reagir enquanto você está ausente.
- [Executar prompts em um cronograma](https://code.claude.com/docs/pt/scheduled-tasks.md): Use /loop e as ferramentas de agendamento cron para executar prompts repetidamente, pesquisar status ou definir lembretes únicos em uma sessão do Claude Code.
- [Manter Claude trabalhando em direção a um objetivo](https://code.claude.com/docs/pt/goal.md): Defina uma condição de conclusão com /goal e Claude continua trabalhando entre turnos até que a condição seja atendida.
- [Executar Claude Code programaticamente](https://code.claude.com/docs/pt/headless.md): Use o Agent SDK para executar Claude Code programaticamente a partir da CLI, Python ou TypeScript.
- [Iniciar sessões a partir de links](https://code.claude.com/docs/pt/deep-links.md): Abra uma sessão de terminal Claude Code a partir de uma URL. Incorpore links `claude-cli://` em runbooks, alertas e dashboards para que um clique abra Claude Code no repositório correto com o prompt correto.

#### Guias

- [Configurar Claude Code em um monorepo ou grande base de código](https://code.claude.com/docs/pt/large-codebases.md): Configure Claude Code para monorepos e grandes bases de código de árvore única com arquivos CLAUDE.md aninhados, worktrees esparsos, inteligência de código e skills por pacote para que Claude permaneça focado no código em que você está trabalhando.

#### Solução de Problemas

- [Solucionar problemas de instalação e login](https://code.claude.com/docs/pt/troubleshoot-install.md): Corrija erros de comando não encontrado, PATH, permissão, rede e autenticação ao instalar ou fazer login no Claude Code.
- [Troubleshooting](https://code.claude.com/docs/pt/troubleshooting.md): Corrija o alto uso de CPU ou memória, travamentos, thrashing de auto-compact e problemas de pesquisa no Claude Code, e encontre a página correta para outros problemas.
- [Depure sua configuração](https://code.claude.com/docs/pt/debug-your-config.md): Diagnostique por que CLAUDE.md, configurações, hooks, servidores MCP ou skills não estão tendo efeito. Use /context, /doctor, /hooks e /mcp para ver o que realmente foi carregado.
- [Referência de erros](https://code.claude.com/docs/pt/errors.md): Procure mensagens de erro de tempo de execução do Claude Code com o que cada uma significa e como corrigi-la.

### Administração

#### Configuração e acesso

- [Configure Claude Code para sua organização](https://code.claude.com/docs/pt/admin-setup.md): Um mapa de decisão para administradores que implantam Claude Code, cobrindo provedores de API, configurações gerenciadas, aplicação de políticas, monitoramento de uso e tratamento de dados.
- [Configuração avançada](https://code.claude.com/docs/pt/setup.md): Requisitos do sistema, instalação específica da plataforma, gerenciamento de versão e desinstalação do Claude Code.
- [Autenticação](https://code.claude.com/docs/pt/authentication.md): Faça login no Claude Code e configure a autenticação para indivíduos, equipes e organizações.
- [Configurar configurações gerenciadas pelo servidor](https://code.claude.com/docs/pt/server-managed-settings.md): Configure centralmente o Claude Code para sua organização através de configurações entregues pelo servidor, sem exigir infraestrutura de gerenciamento de dispositivos.
- [Controle o acesso ao servidor MCP para sua organização](https://code.claude.com/docs/pt/managed-mcp.md): Restrinja quais servidores MCP os usuários podem adicionar ou conectar com arquivos de configuração gerenciados, listas de permissão e listas de bloqueio.
- [Configurar modo automático](https://code.claude.com/docs/pt/auto-mode-config.md): Diga ao classificador do modo automático quais repositórios, buckets e domínios sua organização confia. Defina o contexto do ambiente, substitua as regras de bloqueio e permissão padrão e inspecione sua configuração efetiva com os subcomandos da CLI do modo automático.

#### Implantação

- [Visão geral da implantação empresarial](https://code.claude.com/docs/pt/third-party-integrations.md): Saiba como Claude Code pode se integrar com vários serviços de terceiros e infraestrutura para atender aos requisitos de implantação empresarial.
- [Disponibilidade de recursos](https://code.claude.com/docs/pt/feature-availability.md): Compare quais recursos do Claude Code estão disponíveis em planos de assinatura Anthropic, Anthropic Console, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform e Microsoft Foundry.
- [Claude Code no Amazon Bedrock](https://code.claude.com/docs/pt/amazon-bedrock.md): Saiba como configurar Claude Code através do Amazon Bedrock, incluindo configuração, configuração de IAM e resolução de problemas.
- [Claude Code no Claude Platform on AWS](https://code.claude.com/docs/pt/claude-platform-on-aws.md): Configure Claude Code para usar a API Claude operada pela Anthropic com autenticação AWS, controle de acesso IAM e faturamento do AWS Marketplace.
- [Claude Code na Plataforma de Agentes do Google Cloud](https://code.claude.com/docs/pt/google-vertex-ai.md): Saiba como configurar Claude Code através da Plataforma de Agentes do Google Cloud, anteriormente Vertex AI, incluindo configuração, configuração de IAM e resolução de problemas.
- [Claude Code no Microsoft Foundry](https://code.claude.com/docs/pt/microsoft-foundry.md): Saiba como configurar Claude Code através do Microsoft Foundry, incluindo configuração, instalação e resolução de problemas.
- [Configuração de rede empresarial](https://code.claude.com/docs/pt/network-config.md): Configure Claude Code para ambientes empresariais com servidores proxy, Autoridades de Certificação (CA) personalizadas e autenticação mútua de Transport Layer Security (mTLS).
- [Executar Claude Code atrás de um launcher corporativo](https://code.claude.com/docs/pt/corporate-launcher.md): Rotear os processos que Claude Code inicia a partir de seu próprio binário, incluindo o serviço de fundo e cada sessão de visualização de agente, através de um launcher obrigatório com CLAUDE_CODE_PROCESS_WRAPPER.
- [Contêineres de desenvolvimento](https://code.claude.com/docs/pt/devcontainer.md): Execute Claude Code dentro de um contêiner de desenvolvimento para ambientes consistentes e isolados em toda sua equipe.

#### Gateways

- [Executar Claude Code através de um gateway](https://code.claude.com/docs/pt/gateways.md): Rotear Claude Code através de um gateway auto-hospedado para credenciais centralizadas, rastreamento de uso e controles de custo. Abrange a arquitetura, o gateway de aplicativos Claude da Anthropic e o uso de outros produtos de gateway.

##### Gateway de aplicativos Claude

- [Gateway de aplicativos Claude para Amazon Bedrock, Claude Platform on AWS, Google Cloud e Microsoft Foundry](https://code.claude.com/docs/pt/claude-apps-gateway.md): Execute Claude Code através do Amazon Bedrock, Claude Platform on AWS, Google Cloud ou Microsoft Foundry atrás de um gateway auto-hospedado com sign-in SSO, acesso a modelos por grupo e telemetria OTLP.
- [Configuração do gateway de aplicativos Claude](https://code.claude.com/docs/pt/claude-apps-gateway-config.md): Referência para cada opção de gateway.yaml: listener e TLS, OIDC, sessão, armazenamento Postgres, Amazon Bedrock, Claude Platform on AWS, Agent Platform do Google Cloud e upstreams Microsoft Foundry, roteamento de modelos, políticas gerenciadas e telemetria.
- [Limites de gastos do gateway de aplicativos Claude](https://code.claude.com/docs/pt/claude-apps-gateway-spend-limits.md): Limite o gasto de cada desenvolvedor através do gateway de aplicativos Claude por dia, semana ou mês. Defina limites com uma API de administrador e o gateway os aplica em tempo real em cada solicitação.
- [Implantação e operação do gateway de aplicativos Claude](https://code.claude.com/docs/pt/claude-apps-gateway-deploy.md): Registre o gateway com seu IdP, crie o contêiner, implante no Kubernetes ou Cloud Run e o opere: verificações de integridade, rotação de segredos, atualizações e segurança.
- [Implantar gateway de aplicativos Claude no Google Cloud](https://code.claude.com/docs/pt/claude-apps-gateway-on-gcp.md): Um exemplo prático de execução do gateway de aplicativos Claude no Google Cloud: Cloud Run ou GKE, Cloud SQL para PostgreSQL, Secret Manager e autenticação de conta de serviço para Agent Platform do Google Cloud.

##### Outros gateways

- [Outros gateways LLM](https://code.claude.com/docs/pt/llm-gateway.md): Rotear Claude Code através de um gateway LLM que sua organização já executa. Abrange conectar Claude Code a um gateway, implantar um para sua organização e o que Claude Code envia a um gateway.
- [Conectar Claude Code a um gateway LLM](https://code.claude.com/docs/pt/llm-gateway-connect.md): Aponte Claude Code para o gateway LLM da sua organização. Verifique se seu administrador já o configurou ou defina a URL base e a credencial você mesmo, depois verifique a conexão e corrija erros do gateway.
- [Implante um gateway LLM para sua organização](https://code.claude.com/docs/pt/llm-gateway-rollout.md): Implante um produto de gateway para Claude Code: configure-o para encaminhar o que Claude Code envia, emita credenciais de desenvolvedor, distribua a configuração através de configurações gerenciadas e verifique a implantação.
- [Referência do protocolo do gateway](https://code.claude.com/docs/pt/llm-gateway-protocol.md): O contrato de API entre Claude Code e um gateway LLM: endpoints, headers e campos de corpo para encaminhar, degradação de recursos quando campos são removidos, headers de atribuição para rastreamento de custos e descoberta de modelos.

#### Uso e custos

- [Monitoramento](https://code.claude.com/docs/pt/monitoring-usage.md): Saiba como ativar e configurar OpenTelemetry para Claude Code.
- [Gerencie custos de forma eficaz](https://code.claude.com/docs/pt/costs.md): Rastreie o uso de tokens, defina limites de gastos da equipe e reduza os custos do Claude Code com gerenciamento de contexto, seleção de modelo, configurações de pensamento estendido e hooks de pré-processamento.
- [Rastrear o uso da equipe com análise](https://code.claude.com/docs/pt/analytics.md): Visualize as métricas de uso do Claude Code, rastreie a adoção e meça a velocidade de engenharia no painel de análise.

#### Distribuição de plugins

- [Criar e distribuir um marketplace de plugins](https://code.claude.com/docs/pt/plugin-marketplaces.md): Crie e hospede marketplaces de plugins para distribuir extensões Claude Code em equipes e comunidades.
- [Restringir versões de dependências de plugins](https://code.claude.com/docs/pt/plugin-dependencies.md): Declare restrições de versão em dependências de plugins e agrupe um conjunto de plugins curado atrás de uma única instalação.
- [Recomende seu plugin a partir de sua CLI](https://code.claude.com/docs/pt/plugin-hints.md): Emita um marcador de uma linha a partir de sua CLI para que Claude Code solicite aos usuários que instalem seu plugin oficial.
- [Recomende plugins para sua organização](https://code.claude.com/docs/pt/plugin-relevance.md): Adicione um bloco de relevância às entradas de plugins do marketplace para que Claude Code os sugira quando o trabalho de um usuário corresponder.

#### Segurança e dados

- [Segurança](https://code.claude.com/docs/pt/security.md): Aprenda sobre as proteções de segurança do Claude Code e as melhores práticas para uso seguro.
- [Uso de dados](https://code.claude.com/docs/pt/data-usage.md): Saiba mais sobre as políticas de uso de dados da Anthropic para Claude
- [Retenção zero de dados](https://code.claude.com/docs/pt/zero-data-retention.md): Saiba mais sobre Retenção Zero de Dados (ZDR) para Claude Code, disponível para contas qualificadas no Claude for Enterprise, incluindo escopo, recursos desabilitados e como solicitar ativação.

#### Adoção

- [Kit de comunicações](https://code.claude.com/docs/pt/communications-kit.md): Anúncios de lançamento, mensagens de campanha contínua e respostas de FAQ para implementar Claude Code em sua organização de engenharia.
- [Kit do campeão](https://code.claude.com/docs/pt/champion-kit.md): Um guia prático para engenheiros que defendem Claude Code internamente: o que compartilhar, como responder perguntas e como aumentar a adoção na sua equipe.

### Configuração

#### Configurações e permissões

- [Configurações do Claude Code](https://code.claude.com/docs/pt/settings.md): Configure o Claude Code com configurações globais e em nível de projeto, e variáveis de ambiente.
- [Configurar permissões](https://code.claude.com/docs/pt/permissions.md): Controle o que Claude Code pode acessar e fazer com regras de permissão refinadas, modos e políticas gerenciadas.
- [Escolha um ambiente sandbox](https://code.claude.com/docs/pt/sandbox-environments.md): Compare as opções de sandbox do Claude Code: a ferramenta Bash em sandbox integrada, runtime sandbox, dev containers, Docker e VMs. Escolha o isolamento certo para seu modelo de ameaça.
- [Configurar a ferramenta Bash em sandbox](https://code.claude.com/docs/pt/sandboxing.md): Aprenda como a ferramenta Bash em sandbox do Claude Code fornece isolamento de sistema de arquivos e rede para execução de agentes mais segura e autônoma.

#### Modelo e respostas

- [Configuração de modelo](https://code.claude.com/docs/pt/model-config.md): Saiba mais sobre a configuração do modelo Claude Code, incluindo aliases de modelo como `opusplan`
- [Acelere respostas com modo rápido](https://code.claude.com/docs/pt/fast-mode.md): Obtenha respostas mais rápidas do Opus no Claude Code alternando o modo rápido.
- [Escale decisões difíceis com a ferramenta advisor](https://code.claude.com/docs/pt/advisor.md): Combine seu modelo principal com um modelo advisor mais forte que Claude consulta em momentos-chave durante uma tarefa.
- [Estilos de saída](https://code.claude.com/docs/pt/output-styles.md): Adapte Claude Code para usos além da engenharia de software

#### Interface

- [Configure seu terminal para Claude Code](https://code.claude.com/docs/pt/terminal-config.md): Corrija Shift+Enter para quebras de linha, obtenha um sinal sonoro do terminal quando Claude terminar, configure tmux, corresponda o tema de cores e ative o modo Vim na CLI do Claude Code.
- [Renderização em tela cheia](https://code.claude.com/docs/pt/fullscreen.md): Ative um modo de renderização mais suave e sem cintilação com suporte a mouse e uso de memória estável em conversas longas.
- [Use Claude Code com um leitor de tela](https://code.claude.com/docs/pt/accessibility.md): Configure Claude Code para leitores de tela como VoiceOver e NVDA, além de configurações para ampliadores de tela, movimento reduzido e temas amigáveis para daltônicos.
- [Ditado por voz](https://code.claude.com/docs/pt/voice-dictation.md): Fale seus prompts no Claude Code CLI com ditado por voz com manutenção ou toque para gravar.
- [Personalize sua linha de status](https://code.claude.com/docs/pt/statusline.md): Configure uma barra de status personalizada para monitorar o uso da janela de contexto, custos e status do git no Claude Code
- [Personalizar atalhos de teclado](https://code.claude.com/docs/pt/keybindings.md): Personalize atalhos de teclado no Claude Code com um arquivo de configuração de keybindings.

### Referência

#### Referência

- [Referência de CLI](https://code.claude.com/docs/pt/cli-reference.md): Referência completa para a interface de linha de comando Claude Code, incluindo comandos e sinalizadores.
- [Comandos](https://code.claude.com/docs/pt/commands.md): Referência completa dos comandos disponíveis no Claude Code, incluindo comandos integrados e skills agrupadas.
- [Variáveis de ambiente](https://code.claude.com/docs/pt/env-vars.md): Referência para variáveis de ambiente que controlam o comportamento do Claude Code.
- [Referência de ferramentas](https://code.claude.com/docs/pt/tools-reference.md): Referência completa para as ferramentas que Claude Code pode usar, incluindo requisitos de permissão e comportamento por ferramenta.
- [Modo interativo](https://code.claude.com/docs/pt/interactive-mode.md): Referência completa para atalhos de teclado, modos de entrada e recursos interativos em sessões do Claude Code.
- [Checkpointing](https://code.claude.com/docs/pt/checkpointing.md): Rastreie, reverta e resuma as edições e conversas do Claude para gerenciar o estado da sessão.
- [Referência de hooks](https://code.claude.com/docs/pt/hooks.md): Referência para eventos de hooks do Claude Code, esquema de configuração, formatos de entrada/saída JSON, códigos de saída, hooks assíncronos, hooks HTTP, hooks de prompt e hooks de ferramentas MCP.
- [Referência de plugins](https://code.claude.com/docs/pt/plugins-reference.md): Referência técnica completa para o sistema de plugins do Claude Code, incluindo esquemas, comandos CLI e especificações de componentes.
- [Referência de Channels](https://code.claude.com/docs/pt/channels-reference.md): Construa um servidor MCP que envia webhooks, alertas e mensagens de chat para uma sessão Claude Code. Referência para o contrato de channel: declaração de capacidade, eventos de notificação, ferramentas de resposta, gating de remetente e retransmissão de permissão.

#### Glossário

- [Glossário](https://code.claude.com/docs/pt/glossary.md): Definições da terminologia do Claude Code. Aprenda o que significam agentic loop, compaction, CLAUDE.md, hooks, subagents, MCP e outros conceitos principais.

### Agent SDK

#### Agent SDK

- [Visão geral do Agent SDK](https://code.claude.com/docs/pt/agent-sdk/overview.md): Construa agentes de IA em produção com Claude Code como uma biblioteca
- [Início Rápido](https://code.claude.com/docs/pt/agent-sdk/quickstart.md): Comece com o Agent SDK Python ou TypeScript para construir agentes de IA que funcionam autonomamente

#### Conceitos principais

- [Como o loop do agente funciona](https://code.claude.com/docs/pt/agent-sdk/agent-loop.md): Entenda o ciclo de vida das mensagens, execução de ferramentas, janela de contexto e arquitetura que alimentam seus agentes SDK.
- [Use Claude Code features in the SDK](https://code.claude.com/docs/pt/agent-sdk/claude-code-features.md): Load project instructions, skills, hooks, and other Claude Code features into your SDK agents.
- [Trabalhar com sessões](https://code.claude.com/docs/pt/agent-sdk/sessions.md): Como as sessões persistem o histórico de conversas do agente e quando usar continue, resume e fork para retornar a uma execução anterior.
- [Persistir sessões em armazenamento externo](https://code.claude.com/docs/pt/agent-sdk/session-storage.md): Espelhe transcrições de sessão para S3, Redis ou seu próprio backend para que qualquer host possa retomá-las.

#### Entrada e saída

- [Streaming Input](https://code.claude.com/docs/pt/agent-sdk/streaming-vs-single-mode.md): Compreendendo os dois modos de entrada para Claude Agent SDK e quando usar cada um
- [Lidar com aprovações e entrada do usuário](https://code.claude.com/docs/pt/agent-sdk/user-input.md): Apresente as solicitações de aprovação e perguntas de esclarecimento do Claude aos usuários e retorne suas decisões ao SDK.
- [Transmitir respostas em tempo real](https://code.claude.com/docs/pt/agent-sdk/streaming-output.md): Obtenha respostas em tempo real do Agent SDK conforme o texto e as chamadas de ferramentas são transmitidas
- [Obter saída estruturada de agentes](https://code.claude.com/docs/pt/agent-sdk/structured-outputs.md): Retorne JSON validado de fluxos de trabalho de agentes usando JSON Schema, Zod ou Pydantic. Obtenha dados estruturados e type-safe após o uso de múltiplas ferramentas.

#### Estender com ferramentas

- [Dê a Claude ferramentas personalizadas](https://code.claude.com/docs/pt/agent-sdk/custom-tools.md): Defina ferramentas personalizadas com o servidor MCP em processo do Agent SDK do Claude para que Claude possa chamar suas funções, acessar suas APIs e executar operações específicas do domínio.
- [Conectar a ferramentas externas com MCP](https://code.claude.com/docs/pt/agent-sdk/mcp.md): Configure servidores MCP para estender seu agente com ferramentas externas. Abrange tipos de transporte, busca de ferramentas para grandes conjuntos de ferramentas, autenticação e tratamento de erros.
- [Dimensione para muitas ferramentas com busca de ferramentas](https://code.claude.com/docs/pt/agent-sdk/tool-search.md): Dimensione seu agente para milhares de ferramentas descobrindo e carregando apenas o que é necessário, sob demanda.
- [Subagentes no SDK](https://code.claude.com/docs/pt/agent-sdk/subagents.md): Defina e invoque subagentes para isolar contexto, executar tarefas em paralelo e aplicar instruções especializadas em suas aplicações Claude Agent SDK.

#### Personalizar comportamento

- [Modificando prompts do sistema](https://code.claude.com/docs/pt/agent-sdk/modifying-system-prompts.md): Escolha entre a predefinição `claude_code` e um prompt do sistema personalizado, e personalize o comportamento com CLAUDE.md, estilos de saída, append ou um prompt totalmente personalizado.
- [Agent Skills no SDK](https://code.claude.com/docs/pt/agent-sdk/skills.md): Estenda Claude com capacidades especializadas usando Agent Skills no Claude Agent SDK
- [Plugins no SDK](https://code.claude.com/docs/pt/agent-sdk/plugins.md): Carregue plugins personalizados para estender Claude Code com skills, agentes, hooks e servidores MCP através do Agent SDK

#### Controle e observabilidade

- [Configurar permissões](https://code.claude.com/docs/pt/agent-sdk/permissions.md): Controle como seu agente usa ferramentas com modos de permissão, hooks e regras declarativas de permitir/negar.
- [Interceptar e controlar o comportamento do agente com hooks](https://code.claude.com/docs/pt/agent-sdk/hooks.md): Interceptar e personalizar o comportamento do agente em pontos-chave de execução com hooks
- [Rewind de alterações de arquivo com checkpointing](https://code.claude.com/docs/pt/agent-sdk/file-checkpointing.md): Rastreie alterações de arquivo durante sessões de agente e restaure arquivos para qualquer estado anterior
- [Rastrear custo e uso](https://code.claude.com/docs/pt/agent-sdk/cost-tracking.md): Aprenda como rastrear o uso de tokens, estimar custos e configurar prompt caching com o Claude Agent SDK.
- [Observabilidade com OpenTelemetry](https://code.claude.com/docs/pt/agent-sdk/observability.md): Exporte traces, métricas e eventos do Agent SDK para seu backend de observabilidade usando OpenTelemetry.
- [Listas de Tarefas](https://code.claude.com/docs/pt/agent-sdk/todo-tracking.md): Rastreie e exiba tarefas usando o Claude Agent SDK para gerenciamento organizado de tarefas

#### Implantação

- [Hospedagem do Agent SDK](https://code.claude.com/docs/pt/agent-sdk/hosting.md): Implante o Agent SDK em produção: arquitetura de subprocess, persistência de sessão, escalabilidade, observabilidade e isolamento multi-tenant para Docker, Kubernetes e provedores de sandbox.
- [Implantação segura de agentes de IA](https://code.claude.com/docs/pt/agent-sdk/secure-deployment.md): Um guia para proteger implantações do Claude Code e Agent SDK com isolamento, gerenciamento de credenciais e controles de rede

#### Referências do SDK

- [Referência do Agent SDK - TypeScript](https://code.claude.com/docs/pt/agent-sdk/typescript.md): Referência completa da API para o Agent SDK TypeScript, incluindo todas as funções, tipos e interfaces.
- [API de sessão TypeScript SDK V2 (removida)](https://code.claude.com/docs/pt/agent-sdk/typescript-v2-preview.md): Referência para a API de sessão removida V2 do SDK do Agent TypeScript, com padrões de envio/stream baseados em sessão para conversas multi-turno.
- [Referência do Agent SDK - Python](https://code.claude.com/docs/pt/agent-sdk/python.md): Referência completa da API para o Python Agent SDK, incluindo todas as funções, tipos e classes.
- [Migrar para Claude Agent SDK](https://code.claude.com/docs/pt/agent-sdk/migration-guide.md): Guia para migrar os SDKs TypeScript e Python do Claude Code para o Claude Agent SDK

### O Que Há de Novo

#### O Que Há de Novo

- [Novidades](https://code.claude.com/docs/pt/whats-new/index.md): Um resumo semanal de recursos notáveis do Claude Code, com trechos de código, demonstrações e contexto sobre por que são importantes.
- [Semana 28 · 6–10 de julho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w28.md): Navegue em sites externos pelo navegador integrado do aplicativo Desktop, execute uma verificação completa de configuração com /doctor e aproveite as proteções de transcrição do modo automático e as atualizações da visualização de agentes.
- [Semana 27 · 29 de junho – 3 de julho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w27.md): Claude Sonnet 5 torna-se o modelo padrão, Claude no Chrome atinge disponibilidade geral, subagentes executam em segundo plano por padrão, Claude Desktop chega ao Linux em beta, e /radio sintoniza Claude FM.
- [Semana 26 · 22–26 de junho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w26.md): Autentique servidores MCP a partir do seu shell com claude mcp login, obtenha uma resposta para a saída do comando do modo shell com o prefixo !, e retome uma conversa anterior a /clear com /rewind.
- [Semana 25 · 15–19 de junho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w25.md): Publique uma página ao vivo e compartilhável a partir de sua sessão com Artifacts, corresponda parâmetros de ferramentas em regras de negação e permissão, e defina qualquer configuração a partir do prompt com /config.
- [Semana 24 · 8–12 de junho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w24.md): Mova uma sessão para um novo diretório com /cd, deixe sub-agentes gerarem seus próprios sub-agentes e solucione problemas de uma configuração quebrada com modo seguro.
- [Semana 23 · 1–5 de junho de 2026](https://code.claude.com/docs/pt/whats-new/2026-w23.md): Execute o modo auto no Amazon Bedrock, na Plataforma de Agentes do Google Cloud e no Microsoft Foundry, solicite confirmação antes de escrever arquivos que podem executar código no modo acceptEdits, liste plugins instalados com /plugin list e exija um intervalo de versão aprovado para implantações g…
- [Semana 22 · 25–29 de maio de 2026](https://code.claude.com/docs/pt/whats-new/2026-w22.md): Execute Claude Code no Claude Opus 4.8, orquestre tarefas grandes com fluxos de trabalho dinâmicos, detecte problemas de segurança com o plugin security-guidance e use o modo rápido no Opus 4.8 a um preço mais baixo.
- [Semana 21 · 18–22 de maio de 2026](https://code.claude.com/docs/pt/whats-new/2026-w21.md): Use o modo automático no plano Pro e com Sonnet 4.6, veja quais skills, subagentes e servidores MCP impulsionam seus limites de plano em /usage, e revise diffs com o novo comando /code-review.
- [Semana 20 · 11–15 de maio de 2026](https://code.claude.com/docs/pt/whats-new/2026-w20.md): Gerencie todas as sessões do Claude Code em uma única tela com a visualização de agentes, mantenha Claude trabalhando em direção a um objetivo até que uma condição seja atendida e execute o modo rápido no Opus 4.7 por padrão.
- [Semana 19 · 4–8 de maio de 2026](https://code.claude.com/docs/pt/whats-new/2026-w19.md): Carregue plugins de arquivos .zip e URLs, pesquise o histórico de comandos em todos os projetos com Ctrl+R, crie novas worktrees a partir do HEAD local ou do padrão remoto, e bloqueie ações incondicionalmente com regras de negação rígida do modo automático.
- [Semana 18 · 27 de abril – 1º de maio de 2026](https://code.claude.com/docs/pt/whats-new/2026-w18.md): Claude Code no Windows funciona sem Git Bash, claude auth login aceita um código OAuth colado quando o callback do navegador não consegue alcançar localhost, claude project purge limpa o estado local por projeto, e colar uma URL de PR em /resume encontra a sessão que a criou.
- [Semana 17 · 20–24 de abril de 2026](https://code.claude.com/docs/pt/whats-new/2026-w17.md): /ultrareview abre como uma visualização de pesquisa, recapitulações automáticas de sessão quando você retorna a um terminal, temas de cores personalizados que você pode criar e enviar em plugins, e um Claude Code redesenhado na web.
- [Semana 16 · 13–17 de abril de 2026](https://code.claude.com/docs/pt/whats-new/2026-w16.md): Claude Opus 4.7 com o novo nível de esforço xhigh, Routines no Claude Code na web, notificações push móveis que alertam seu telefone quando Claude precisa de você, um /usage breakdown que mostra o que está impulsionando seus limites, e binários nativos substituindo o JavaScript agrupado.
- [Semana 15 · 6–10 de abril de 2026](https://code.claude.com/docs/pt/whats-new/2026-w15.md): Planejamento em nuvem Ultraplan, a ferramenta Monitor com /loop auto-pacing, /team-onboarding para empacotar sua configuração, e /autofix-pr do seu terminal.
- [Semana 14 · 30 de março – 3 de abril de 2026](https://code.claude.com/docs/pt/whats-new/2026-w14.md): Computer use na CLI, lições interativas no produto, renderização sem cintilação, substituições de tamanho de resultado MCP por ferramenta e executáveis de plugin no PATH.
- [Semana 13 · 23–27 de março de 2026](https://code.claude.com/docs/pt/whats-new/2026-w13.md): Modo automático para permissões sem intervenção, controle de computador integrado, correção automática de PR na nuvem, busca de transcrição e uma ferramenta PowerShell para Windows.

### Recursos

#### Recursos

- [Legal e conformidade](https://code.claude.com/docs/pt/legal-and-compliance.md): Acordos legais, certificações de conformidade e informações de segurança para Claude Code.
