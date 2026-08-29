# Claude Code Docs: Spanish

> Official documentation for Claude Code, Anthropic's agentic coding tool available in the terminal, IDE, desktop app, and browser. Covers installation, configuration, skills, subagents, hooks, MCP, the Agent SDK, and reference material.

## Spanish

### Primeros pasos

#### Primeros pasos

- [Descripción general](https://code.claude.com/docs/es/overview.md): Claude Code es una herramienta de codificación agencial que lee tu base de código, edita archivos, ejecuta comandos e integra con tus herramientas de desarrollo. Disponible en tu terminal, IDE, aplicación de escritorio y navegador.
- [Inicio rápido](https://code.claude.com/docs/es/quickstart.md): ¡Bienvenido a Claude Code!
- [Registro de cambios](https://code.claude.com/docs/es/changelog.md)

#### Conceptos fundamentales

- [Cómo funciona Claude Code](https://code.claude.com/docs/es/how-claude-code-works.md): Comprenda el bucle agentico, las herramientas integradas y cómo Claude Code interactúa con su proyecto.
- [Extender Claude Code](https://code.claude.com/docs/es/features-overview.md): Comprenda cuándo usar CLAUDE.md, Skills, subagents, hooks, MCP y plugins.
- [Explorar el directorio .claude](https://code.claude.com/docs/es/claude-directory.md): Dónde Claude Code lee CLAUDE.md, settings.json, hooks, skills, commands, subagents, workflows, rules y auto memory. Explore el directorio .claude en su proyecto y ~/.claude en su directorio de inicio.
- [Explorar la ventana de contexto](https://code.claude.com/docs/es/context-window.md): Una simulación interactiva de cómo se llena la ventana de contexto de Claude Code durante una sesión. Vea qué se carga automáticamente, cuánto cuesta cada lectura de archivo y cuándo se activan las reglas y hooks.
- [Cómo Claude Code utiliza el almacenamiento en caché de prompts](https://code.claude.com/docs/es/prompt-caching.md): Claude Code gestiona automáticamente el almacenamiento en caché de prompts. Vea por qué un cambio de modelo desencadena un turno lento sin caché, qué cuesta `/compact`, por qué las ediciones de CLAUDE.md no se aplican a mitad de sesión, y cómo verificar su tasa de aciertos de caché.

#### Usar Claude Code

- [Cómo Claude recuerda su proyecto](https://code.claude.com/docs/es/memory.md): Proporcione a Claude instrucciones persistentes con archivos CLAUDE.md, y permita que Claude acumule aprendizajes automáticamente con auto memory.
- [Elegir un modo de permisos](https://code.claude.com/docs/es/permission-modes.md): Controle si Claude solicita aprobación antes de editar archivos o ejecutar comandos. Cambie de modo con Mayús+Tab en la CLI o use el selector de modo en VS Code, Desktop y claude.ai.
- [Gestionar sesiones](https://code.claude.com/docs/es/sessions.md): Nombre, reanude, ramifique y cambie entre conversaciones de Claude Code. Cubre `--continue`, `--resume`, `--from-pr`, el selector `/resume`, nombres de sesión, exportación de transcripciones y dónde se almacenan las transcripciones.
- [Flujos de trabajo comunes](https://code.claude.com/docs/es/common-workflows.md): Guías paso a paso para explorar bases de código, corregir errores, refactorizar, probar y otras tareas cotidianas con Claude Code.
- [Biblioteca de prompts](https://code.claude.com/docs/es/prompt-library.md): Copie y pegue prompts para Claude Code, etiquetados por tarea y rol.
- [Mejores prácticas para Claude Code](https://code.claude.com/docs/es/best-practices.md): Consejos y patrones para aprovechar al máximo Claude Code, desde configurar su entorno hasta escalar entre sesiones paralelas.

#### Plataformas e integraciones

- [Plataformas e integraciones](https://code.claude.com/docs/es/platforms.md): Elija dónde ejecutar Claude Code y qué conectar. Compare la CLI, Desktop, VS Code, JetBrains, web, móvil e integraciones como Chrome, Slack e CI/CD.
- [Continúe sesiones locales desde cualquier dispositivo con Remote Control](https://code.claude.com/docs/es/remote-control.md): Continúe una sesión local de Claude Code desde su teléfono, tableta o cualquier navegador usando Remote Control. Funciona con claude.ai/code y la aplicación móvil de Claude.
- [Usar Claude Code con Chrome](https://code.claude.com/docs/es/chrome.md): Conecta Claude Code a tu navegador Chrome para probar aplicaciones web, depurar con registros de consola, automatizar el relleno de formularios y extraer datos de páginas web.
- [Permitir que Claude use su computadora desde la CLI](https://code.claude.com/docs/es/computer-use.md): Habilite computer use en la CLI de Claude Code para que Claude pueda abrir aplicaciones, hacer clic, escribir y ver su pantalla en macOS. Pruebe aplicaciones nativas, depure problemas visuales y automatice herramientas solo GUI sin salir de su terminal.
- [Usar Claude Code en VS Code](https://code.claude.com/docs/es/vs-code.md): Instala y configura la extensión Claude Code para VS Code. Obtén asistencia de codificación con IA con diffs en línea, menciones @, revisión de planes y atajos de teclado.
- [JetBrains IDEs](https://code.claude.com/docs/es/jetbrains.md): Utiliza Claude Code con JetBrains IDEs incluyendo IntelliJ, PyCharm, WebStorm y más
- [Claude Code en Slack](https://code.claude.com/docs/es/slack.md): Delega tareas de codificación directamente desde tu espacio de trabajo de Slack

##### Claude Code en la web

- [Comienza con Claude Code en la web](https://code.claude.com/docs/es/web-quickstart.md): Ejecuta Claude Code en la nube desde tu navegador o teléfono. Conecta un repositorio de GitHub, envía una tarea y revisa el PR sin configuración local.
- [Usar Claude Code en la web](https://code.claude.com/docs/es/claude-code-on-the-web.md): Configura entornos en la nube, scripts de configuración, acceso a la red y Docker en el sandbox de Anthropic. Mueve sesiones entre web y terminal con `--cloud` y `--teleport`.
- [Automatizar el trabajo con rutinas](https://code.claude.com/docs/es/routines.md): Ponga Claude Code en piloto automático. Defina rutinas que se ejecuten en un horario, se activen en llamadas API o reaccionen a eventos de GitHub desde la infraestructura en la nube administrada por Anthropic.
- [Encuentra errores con ultrareview](https://code.claude.com/docs/es/ultrareview.md): Ejecuta una revisión de código profunda y multiagente en la nube con /code-review ultra para encontrar y verificar errores antes de fusionar.

##### Claude Code en escritorio

- [Comenzar con la aplicación de escritorio](https://code.claude.com/docs/es/desktop-quickstart.md): Instale Claude Code en el escritorio e inicie su primera sesión de codificación
- [Aplicación de escritorio](https://code.claude.com/docs/es/desktop.md): Aproveche al máximo Claude Code Desktop: sesiones paralelas con aislamiento de Git, diseño de panel de arrastrar y soltar, terminal integrada y editor de archivos, chats laterales, uso de computadora, envíe sesiones desde su teléfono, revisión visual de diferencias, vistas previas de aplicaciones, m…
- [Claude Desktop en Linux (beta)](https://code.claude.com/docs/es/desktop-linux.md): Instala y actualiza la aplicación de escritorio Claude en Ubuntu y Debian
- [Claude Code Desktop en WSL](https://code.claude.com/docs/es/desktop-wsl.md): Ejecutar sesiones de Code dentro de una distribución WSL 2 en Windows
- [Programar tareas recurrentes en Claude Code Desktop](https://code.claude.com/docs/es/desktop-scheduled-tasks.md): Configure tareas programadas en Claude Code Desktop para ejecutar Claude automáticamente de forma recurrente para revisiones de código diarias, auditorías de dependencias o resúmenes matutinos.

##### Revisión de código e CI/CD

- [Detectar problemas de seguridad mientras Claude escribe código](https://code.claude.com/docs/es/security-guidance.md): Instale el plugin security-guidance para que Claude revise sus propios cambios de código en busca de vulnerabilidades y las corrija en la misma sesión.
- [Code Review](https://code.claude.com/docs/es/code-review.md): Configure revisiones automatizadas de PR que detecten errores lógicos, vulnerabilidades de seguridad y regresiones mediante análisis multiagente de su base de código completa
- [Claude Code GitHub Actions](https://code.claude.com/docs/es/github-actions.md): Aprenda a integrar Claude Code en su flujo de trabajo de desarrollo con Claude Code GitHub Actions
- [Claude Code con GitHub Enterprise Server](https://code.claude.com/docs/es/github-enterprise-server.md): Conecte Claude Code a su instancia de GitHub Enterprise Server autohospedada para sesiones web, revisión de código y mercados de plugins.
- [Claude Code GitLab CI/CD](https://code.claude.com/docs/es/gitlab-ci-cd.md): Aprenda a integrar Claude Code en su flujo de trabajo de desarrollo con GitLab CI/CD

### Crear con Claude Code

#### Agentes y trabajo paralelo

- [Ejecutar agentes en paralelo](https://code.claude.com/docs/es/agents.md): Compare las formas en que Claude Code puede realizar múltiples tareas simultáneamente: subagentes, vista de agentes, equipos de agentes y flujos de trabajo dinámicos.
- [Crear subagentes personalizados](https://code.claude.com/docs/es/sub-agents.md): Cree y utilice subagentes de IA especializados en Claude Code para flujos de trabajo específicos de tareas y una mejor gestión del contexto.
- [Gestionar múltiples agentes con la vista de agentes](https://code.claude.com/docs/es/agent-view.md): Distribuya y gestione muchas sesiones de Claude Code desde una pantalla. La vista de agentes muestra qué está haciendo cada sesión y cuáles necesitan su entrada.
- [Orquestar equipos de sesiones de Claude Code](https://code.claude.com/docs/es/agent-teams.md): Coordine múltiples instancias de Claude Code trabajando juntas como un equipo, con tareas compartidas, mensajería entre agentes y gestión centralizada.
- [Orquestar subagentes a escala con flujos de trabajo dinámicos](https://code.claude.com/docs/es/workflows.md): Los dynamic workflows orquestan muchos subagentes a partir de un script que Claude escribe y que puede volver a ejecutar. Úselos para auditorías de base de código, migraciones grandes e investigación con verificación cruzada.
- [Ejecutar sesiones paralelas con worktrees](https://code.claude.com/docs/es/worktrees.md): Aisle sesiones paralelas de Claude Code en worktrees de git separados para que los cambios no colisionen. Cubre la bandera `--worktree`, aislamiento de subagentes, `.worktreeinclude`, limpieza y hooks de VCS no-git.

#### MCP

- [Conectarse a servidores MCP](https://code.claude.com/docs/es/mcp-quickstart.md): Agregue un servidor MCP a Claude Code, verifique la conexión y encuentre la configuración en el disco.
- [Conectar Claude Code a herramientas mediante MCP](https://code.claude.com/docs/es/mcp.md): Aprenda cómo conectar Claude Code a sus herramientas con el Model Context Protocol.

#### Skills

- [Ampliar Claude con skills](https://code.claude.com/docs/es/skills.md): Crear, gestionar y compartir skills para ampliar las capacidades de Claude en Claude Code. Incluye comandos personalizados y skills agrupados.

#### Plugins

- [Descubra e instale plugins pregenerados a través de mercados](https://code.claude.com/docs/es/discover-plugins.md): Encuentre e instale plugins de mercados para extender Claude Code con nuevas skills, agentes y capacidades.
- [Crear plugins](https://code.claude.com/docs/es/plugins.md): Crea plugins personalizados para extender Claude Code con skills, agentes, hooks y servidores MCP.

#### Artefactos

- [Compartir la salida de la sesión como artefactos](https://code.claude.com/docs/es/artifacts.md): Los artefactos convierten el trabajo de Claude Code en páginas interactivas en vivo en claude.ai que puede mantener privadas, compartir con su organización o publicar en un enlace público.

#### Automatización

- [Automatizar acciones con hooks](https://code.claude.com/docs/es/hooks-guide.md): Ejecuta comandos de shell automáticamente cuando Claude Code edita archivos, finaliza tareas o necesita entrada. Formatea código, envía notificaciones, valida comandos y aplica reglas del proyecto.
- [Enviar eventos a una sesión en ejecución con channels](https://code.claude.com/docs/es/channels.md): Utilice channels para enviar mensajes, alertas y webhooks a su sesión de Claude Code desde un servidor MCP. Reenvíe resultados de CI, mensajes de chat y eventos de monitoreo para que Claude pueda reaccionar mientras está fuera.
- [Ejecutar prompts en un horario](https://code.claude.com/docs/es/scheduled-tasks.md): Utilice /loop y las herramientas de programación cron para ejecutar prompts repetidamente, sondear el estado o establecer recordatorios únicos dentro de una sesión de Claude Code.
- [Mantener a Claude trabajando hacia un objetivo](https://code.claude.com/docs/es/goal.md): Establezca una condición de finalización con /goal y Claude seguirá trabajando entre turnos hasta que se cumpla la condición.
- [Ejecutar Claude Code mediante programación](https://code.claude.com/docs/es/headless.md): Utilice el Agent SDK para ejecutar Claude Code mediante programación desde la CLI, Python o TypeScript.
- [Iniciar sesiones desde enlaces](https://code.claude.com/docs/es/deep-links.md): Abra una sesión de terminal de Claude Code desde una URL. Incruste enlaces `claude-cli://` en runbooks, alertas y paneles para que un clic abra Claude Code en el repositorio correcto con el mensaje correcto.

#### Guías

- [Configurar Claude Code en un monorepo o codebase grande](https://code.claude.com/docs/es/large-codebases.md): Configure Claude Code para monorepos y codebases de árbol único grande con archivos CLAUDE.md anidados, worktrees dispersos, inteligencia de código y skills por paquete para que Claude se mantenga enfocado en el código en el que está trabajando.

#### Solución de problemas

- [Solucionar problemas de instalación e inicio de sesión](https://code.claude.com/docs/es/troubleshoot-install.md): Corrija errores de comando no encontrado, PATH, permisos, red y autenticación al instalar o iniciar sesión en Claude Code.
- [Solución de problemas](https://code.claude.com/docs/es/troubleshooting.md): Corrige el alto uso de CPU o memoria, cuelgues, thrashing de auto-compact, y problemas de búsqueda en Claude Code, y encuentra la página correcta para otros problemas.
- [Depura tu configuración](https://code.claude.com/docs/es/debug-your-config.md): Diagnostica por qué CLAUDE.md, configuración, hooks, servidores MCP o skills no están surtiendo efecto. Usa /context, /doctor, /hooks y /mcp para ver qué se cargó realmente.
- [Referencia de errores](https://code.claude.com/docs/es/errors.md): Busque mensajes de error en tiempo de ejecución de Claude Code con lo que significa cada uno y cómo solucionarlo.

### Administración

#### Configuración y acceso

- [Configurar Claude Code para su organización](https://code.claude.com/docs/es/admin-setup.md): Un mapa de decisiones para administradores que implementan Claude Code, cubriendo proveedores de API, configuración administrada, aplicación de políticas, monitoreo de uso y manejo de datos.
- [Configuración avanzada](https://code.claude.com/docs/es/setup.md): Requisitos del sistema, instalación específica de plataforma, gestión de versiones y desinstalación para Claude Code.
- [Autenticación](https://code.claude.com/docs/es/authentication.md): Inicie sesión en Claude Code y configure la autenticación para individuos, equipos y organizaciones.
- [Configurar la configuración administrada por servidor](https://code.claude.com/docs/es/server-managed-settings.md): Configure Claude Code centralmente para su organización a través de configuración entregada por servidor, sin requerir infraestructura de administración de dispositivos.
- [Controlar el acceso al servidor MCP para su organización](https://code.claude.com/docs/es/managed-mcp.md): Restrinja qué servidores MCP pueden agregar o conectar los usuarios con archivos de configuración administrados, listas de permitidos y listas de bloqueados.
- [Configurar el modo automático](https://code.claude.com/docs/es/auto-mode-config.md): Indique al clasificador del modo automático qué repositorios, buckets y dominios confía su organización. Establezca el contexto del entorno, anule las reglas de bloqueo y permiso predeterminadas e inspeccione su configuración efectiva con los subcomandos de la CLI del modo automático.

#### Implementación

- [Descripción general de implementación empresarial](https://code.claude.com/docs/es/third-party-integrations.md): Aprenda cómo Claude Code puede integrarse con varios servicios de terceros e infraestructura para cumplir con los requisitos de implementación empresarial.
- [Disponibilidad de características](https://code.claude.com/docs/es/feature-availability.md): Compare qué características de Claude Code están disponibles en los planes de suscripción de Anthropic, la Consola de Anthropic, Amazon Bedrock, Claude Platform en AWS, Google Cloud's Agent Platform y Microsoft Foundry.
- [Claude Code en Amazon Bedrock](https://code.claude.com/docs/es/amazon-bedrock.md): Aprenda a configurar Claude Code a través de Amazon Bedrock, incluyendo configuración, configuración de IAM y solución de problemas.
- [Claude Code en Claude Platform on AWS](https://code.claude.com/docs/es/claude-platform-on-aws.md): Configure Claude Code para usar la API de Claude operada por Anthropic con autenticación de AWS, control de acceso IAM y facturación de AWS Marketplace.
- [Claude Code en la Plataforma de Agentes de Google Cloud](https://code.claude.com/docs/es/google-vertex-ai.md): Aprenda a configurar Claude Code a través de la Plataforma de Agentes de Google Cloud, anteriormente Vertex AI, incluida la configuración, la configuración de IAM y la solución de problemas.
- [Claude Code en Microsoft Foundry](https://code.claude.com/docs/es/microsoft-foundry.md): Aprende a configurar Claude Code a través de Microsoft Foundry, incluyendo configuración, instalación y solución de problemas.
- [Configuración de red empresarial](https://code.claude.com/docs/es/network-config.md): Configure Claude Code para entornos empresariales con servidores proxy, Autoridades de Certificación (CA) personalizadas y autenticación mutua de Seguridad de la Capa de Transporte (mTLS).
- [Ejecutar Claude Code detrás de un lanzador corporativo](https://code.claude.com/docs/es/corporate-launcher.md): Enrute los procesos que Claude Code inicia desde su propio binario, incluido el servicio de fondo y cada sesión de vista de agente, a través de un lanzador requerido con CLAUDE_CODE_PROCESS_WRAPPER.
- [Contenedores de desarrollo](https://code.claude.com/docs/es/devcontainer.md): Ejecuta Claude Code dentro de un contenedor de desarrollo para entornos consistentes e aislados en todo tu equipo.

#### Puertas de enlace

- [Ejecutar Claude Code a través de una puerta de enlace](https://code.claude.com/docs/es/gateways.md): Enrute Claude Code a través de una puerta de enlace autohospedada para credenciales centralizadas, seguimiento de uso y controles de costos. Cubre la arquitectura, la puerta de enlace de aplicaciones Claude de Anthropic y el uso de otros productos de puerta de enlace.

##### Puerta de enlace de aplicaciones Claude

- [Puerta de enlace de aplicaciones Claude para Amazon Bedrock, Claude Platform en AWS, Google Cloud y Microsoft Foundry](https://code.claude.com/docs/es/claude-apps-gateway.md): Ejecute Claude Code a través de Amazon Bedrock, Claude Platform en AWS, Google Cloud o Microsoft Foundry detrás de una puerta de enlace autohospedada con inicio de sesión SSO, acceso a modelos por grupo y telemetría OTLP.
- [Configuración de la puerta de enlace de aplicaciones Claude](https://code.claude.com/docs/es/claude-apps-gateway-config.md): Referencia para cada opción de gateway.yaml: listener y TLS, OIDC, sesión, almacén Postgres, upstream de Bedrock, Claude Platform en AWS, Agent Platform de Google Cloud y Microsoft Foundry, enrutamiento de modelos, políticas administradas y telemetría.
- [Límites de gasto de la puerta de enlace de aplicaciones Claude](https://code.claude.com/docs/es/claude-apps-gateway-spend-limits.md): Limite el gasto de cada desarrollador a través de la puerta de enlace de aplicaciones Claude por día, semana o mes. Establezca límites con una API de administrador y la puerta de enlace los aplica en vivo en cada solicitud.
- [Implementación y operaciones de la puerta de enlace de aplicaciones Claude](https://code.claude.com/docs/es/claude-apps-gateway-deploy.md): Registre la puerta de enlace con su IdP, construya el contenedor, implemente en Kubernetes o Cloud Run, y opérelo: verificaciones de salud, rotación de secretos, actualizaciones y seguridad.
- [Implementar Claude apps gateway en Google Cloud](https://code.claude.com/docs/es/claude-apps-gateway-on-gcp.md): Un ejemplo práctico de ejecutar Claude apps gateway en Google Cloud: Cloud Run o GKE, Cloud SQL para PostgreSQL, Secret Manager y autenticación de cuenta de servicio en Agent Platform de Google Cloud.

##### Otras puertas de enlace

- [Otras puertas de enlace LLM](https://code.claude.com/docs/es/llm-gateway.md): Enrute Claude Code a través de una puerta de enlace LLM que su organización ya ejecuta. Cubre la conexión de Claude Code a una puerta de enlace, el despliegue de una para su organización, y qué envía Claude Code a una puerta de enlace.
- [Conectar Claude Code a una puerta de enlace LLM](https://code.claude.com/docs/es/llm-gateway-connect.md): Apunte Claude Code a la puerta de enlace LLM de su organización. Compruebe si su administrador ya la configuró, o establezca la URL base y las credenciales usted mismo, luego verifique la conexión y corrija los errores de la puerta de enlace.
- [Implementar una puerta de enlace LLM para su organización](https://code.claude.com/docs/es/llm-gateway-rollout.md): Implemente un producto de puerta de enlace para Claude Code: configúrelo para reenviar lo que Claude Code envía, emita credenciales de desarrollador, distribuya la configuración a través de ajustes administrados y verifique la implementación.
- [Referencia del protocolo de puerta de enlace](https://code.claude.com/docs/es/llm-gateway-protocol.md): El contrato de API entre Claude Code y una puerta de enlace LLM: puntos finales, encabezados y campos de cuerpo para reenviar, degradación de características cuando se eliminan campos, encabezados de atribución para seguimiento de costos y descubrimiento de modelos.

#### Uso y costos

- [Monitoreo](https://code.claude.com/docs/es/monitoring-usage.md): Aprende cómo habilitar y configurar OpenTelemetry para Claude Code.
- [Gestionar costos de manera efectiva](https://code.claude.com/docs/es/costs.md): Realice un seguimiento del uso de tokens, establezca límites de gasto del equipo y reduzca los costos de Claude Code con la gestión del contexto, la selección de modelos, la configuración del pensamiento extendido y los hooks de preprocesamiento.
- [Rastrear el uso del equipo con análisis](https://code.claude.com/docs/es/analytics.md): Ver métricas de uso de Claude Code, rastrear la adopción y medir la velocidad de ingeniería en el panel de análisis.

#### Distribución de plugins

- [Crear y distribuir un marketplace de plugins](https://code.claude.com/docs/es/plugin-marketplaces.md): Cree y aloje marketplaces de plugins para distribuir extensiones de Claude Code en equipos y comunidades.
- [Restringir versiones de dependencias de plugins](https://code.claude.com/docs/es/plugin-dependencies.md): Declare restricciones de versión en las dependencias de plugins e incluya un conjunto de plugins curado detrás de una única instalación.
- [Recomienda tu plugin desde tu CLI](https://code.claude.com/docs/es/plugin-hints.md): Emite un marcador de una línea desde tu CLI para que Claude Code solicite a los usuarios instalar tu plugin oficial.
- [Recomendar plugins para su organización](https://code.claude.com/docs/es/plugin-relevance.md): Agregue un bloque de relevancia a las entradas de plugins del marketplace para que Claude Code los sugiera cuando el trabajo de un usuario coincida.

#### Seguridad y datos

- [Seguridad](https://code.claude.com/docs/es/security.md): Aprenda sobre las medidas de seguridad de Claude Code y las mejores prácticas para un uso seguro.
- [Uso de datos](https://code.claude.com/docs/es/data-usage.md): Conozca las políticas de uso de datos de Anthropic para Claude
- [Retención cero de datos](https://code.claude.com/docs/es/zero-data-retention.md): Obtenga información sobre la Retención Cero de Datos (ZDR) para Claude Code, disponible para cuentas calificadas en Claude for Enterprise, incluido el alcance, las características deshabilitadas y cómo solicitar la habilitación.

#### Adopción

- [Kit de comunicaciones](https://code.claude.com/docs/es/communications-kit.md): Anuncios de lanzamiento, mensajes de campaña de goteo y respuestas de preguntas frecuentes para implementar Claude Code en su organización de ingeniería.
- [Kit de campeón](https://code.claude.com/docs/es/champion-kit.md): Un manual para ingenieros que defienden Claude Code internamente: qué compartir, cómo responder preguntas y cómo aumentar la adopción en su equipo.

### Configuración

#### Configuración y permisos

- [Configuración de Claude Code](https://code.claude.com/docs/es/settings.md): Configure Claude Code con configuraciones globales y a nivel de proyecto, y variables de entorno.
- [Configurar permisos](https://code.claude.com/docs/es/permissions.md): Controle lo que Claude Code puede acceder y hacer con reglas de permisos granulares, modos y políticas administradas.
- [Elegir un entorno sandbox](https://code.claude.com/docs/es/sandbox-environments.md): Compare las opciones de sandbox de Claude Code: la herramienta Bash aislada integrada, el tiempo de ejecución sandbox, contenedores de desarrollo, Docker y máquinas virtuales. Elija el aislamiento adecuado para su modelo de amenaza.
- [Configurar la herramienta Bash aislada](https://code.claude.com/docs/es/sandboxing.md): Aprenda cómo la herramienta Bash aislada de Claude Code proporciona aislamiento del sistema de archivos y la red para una ejecución de agentes más segura y autónoma.

#### Modelo y respuestas

- [Configuración del modelo](https://code.claude.com/docs/es/model-config.md): Aprenda sobre la configuración del modelo Claude Code, incluidos los alias de modelo como `opusplan`
- [Acelera las respuestas con el modo rápido](https://code.claude.com/docs/es/fast-mode.md): Obtén respuestas más rápidas de Opus en Claude Code al activar el modo rápido.
- [Escalar decisiones difíciles con la herramienta advisor](https://code.claude.com/docs/es/advisor.md): Empareje su modelo principal con un modelo advisor más fuerte que Claude consulta en momentos clave durante una tarea.
- [Estilos de salida](https://code.claude.com/docs/es/output-styles.md): Adapte Claude Code para usos más allá de la ingeniería de software

#### Interfaz

- [Configura tu terminal para Claude Code](https://code.claude.com/docs/es/terminal-config.md): Corrige Shift+Enter para saltos de línea, obtén una campana de terminal cuando Claude termine, configura tmux, haz coincidir el tema de color y habilita el modo Vim en la CLI de Claude Code.
- [Renderizado a pantalla completa](https://code.claude.com/docs/es/fullscreen.md): Habilite un modo de renderizado más suave y sin parpadeos con soporte de ratón y uso de memoria estable en conversaciones largas.
- [Usar Claude Code con un lector de pantalla](https://code.claude.com/docs/es/accessibility.md): Configure Claude Code para lectores de pantalla como VoiceOver y NVDA, además de configuración para ampliadores de pantalla, movimiento reducido y temas seguros para daltónicos.
- [Dictado de voz](https://code.claude.com/docs/es/voice-dictation.md): Hable sus indicaciones en la CLI de Claude Code con dictado de voz de mantener para grabar o tocar para grabar.
- [Personaliza tu línea de estado](https://code.claude.com/docs/es/statusline.md): Configura una barra de estado personalizada para monitorear el uso de la ventana de contexto, costos y estado de git en Claude Code
- [Personalizar atajos de teclado](https://code.claude.com/docs/es/keybindings.md): Personaliza atajos de teclado en Claude Code con un archivo de configuración de keybindings.

### Referencia

#### Referencia

- [Referencia de CLI](https://code.claude.com/docs/es/cli-reference.md): Referencia completa de la interfaz de línea de comandos de Claude Code, incluyendo comandos y banderas.
- [Comandos](https://code.claude.com/docs/es/commands.md): Referencia completa de los comandos disponibles en Claude Code, incluidos comandos integrados y skills agrupados.
- [Variables de entorno](https://code.claude.com/docs/es/env-vars.md): Referencia para variables de entorno que controlan el comportamiento de Claude Code.
- [Referencia de herramientas](https://code.claude.com/docs/es/tools-reference.md): Referencia completa de las herramientas que Claude Code puede utilizar, incluidos los requisitos de permisos y el comportamiento por herramienta.
- [Modo interactivo](https://code.claude.com/docs/es/interactive-mode.md): Referencia completa de atajos de teclado, modos de entrada y características interactivas en sesiones de Claude Code.
- [Checkpointing](https://code.claude.com/docs/es/checkpointing.md): Realiza un seguimiento, revierte y resume las ediciones y conversaciones de Claude para gestionar el estado de la sesión.
- [Referencia de hooks](https://code.claude.com/docs/es/hooks.md): Referencia para eventos de hooks de Claude Code, esquema de configuración, formatos de entrada/salida JSON, códigos de salida, hooks asincronos, hooks HTTP, hooks de prompt y hooks de herramientas MCP.
- [Referencia de plugins](https://code.claude.com/docs/es/plugins-reference.md): Referencia técnica completa para el sistema de plugins de Claude Code, incluyendo esquemas, comandos CLI y especificaciones de componentes.
- [Referencia de canales](https://code.claude.com/docs/es/channels-reference.md): Construye un servidor MCP que envíe webhooks, alertas y mensajes de chat a una sesión de Claude Code. Referencia para el contrato de canal: declaración de capacidad, eventos de notificación, herramientas de respuesta, compuerta de remitente y retransmisión de permisos.

#### Glosario

- [Glosario](https://code.claude.com/docs/es/glossary.md): Definiciones de terminología de Claude Code. Aprenda qué significan agentic loop, compaction, CLAUDE.md, hooks, subagents, MCP y otros conceptos centrales.

### SDK de Agente

#### SDK de Agent

- [Descripción general del Agent SDK](https://code.claude.com/docs/es/agent-sdk/overview.md): Construya agentes de IA en producción con Claude Code como una biblioteca
- [Inicio rápido](https://code.claude.com/docs/es/agent-sdk/quickstart.md): Comience con el SDK de Agent de Python o TypeScript para crear agentes de IA que funcionen de forma autónoma

#### Conceptos fundamentales

- [Cómo funciona el bucle del agente](https://code.claude.com/docs/es/agent-sdk/agent-loop.md): Comprenda el ciclo de vida de los mensajes, la ejecución de herramientas, la ventana de contexto y la arquitectura que potencia sus agentes SDK.
- [Usar características de Claude Code en el SDK](https://code.claude.com/docs/es/agent-sdk/claude-code-features.md): Cargue instrucciones de proyecto, skills, hooks y otras características de Claude Code en sus agentes SDK.
- [Trabajar con sesiones](https://code.claude.com/docs/es/agent-sdk/sessions.md): Cómo las sesiones persisten el historial de conversación del agente, y cuándo usar continue, resume y fork para volver a una ejecución anterior.
- [Persistir sesiones en almacenamiento externo](https://code.claude.com/docs/es/agent-sdk/session-storage.md): Refleja transcripciones de sesiones en S3, Redis o tu propio backend para que cualquier host pueda reanudarlas.

#### Entrada y salida

- [Entrada de Streaming](https://code.claude.com/docs/es/agent-sdk/streaming-vs-single-mode.md): Comprensión de los dos modos de entrada para Claude Agent SDK y cuándo usar cada uno
- [Gestionar aprobaciones e entrada de usuario](https://code.claude.com/docs/es/agent-sdk/user-input.md): Presente las solicitudes de aprobación y preguntas aclaratorias de Claude a los usuarios, luego devuelva sus decisiones al SDK.
- [Transmitir respuestas en tiempo real](https://code.claude.com/docs/es/agent-sdk/streaming-output.md): Obtener respuestas en tiempo real del Agent SDK mientras el texto y las llamadas de herramientas se transmiten
- [Obtener salida estructurada de agentes](https://code.claude.com/docs/es/agent-sdk/structured-outputs.md): Devuelve JSON validado desde flujos de trabajo de agentes usando JSON Schema, Zod o Pydantic. Obtén datos estructurados seguros en tipos después del uso de herramientas de múltiples turnos.

#### Extender con herramientas

- [Dale a Claude herramientas personalizadas](https://code.claude.com/docs/es/agent-sdk/custom-tools.md): Define herramientas personalizadas con el servidor MCP en proceso del SDK del Agente Claude para que Claude pueda llamar a sus funciones, acceder a sus APIs y realizar operaciones específicas del dominio.
- [Conectar con herramientas externas usando MCP](https://code.claude.com/docs/es/agent-sdk/mcp.md): Configure servidores MCP para extender su agente con herramientas externas. Cubre tipos de transporte, búsqueda de herramientas para conjuntos grandes de herramientas, autenticación y manejo de errores.
- [Escala a muchas herramientas con búsqueda de herramientas](https://code.claude.com/docs/es/agent-sdk/tool-search.md): Escala tu agente a miles de herramientas descubriendo y cargando solo lo que se necesita, bajo demanda.
- [Subagentes en el SDK](https://code.claude.com/docs/es/agent-sdk/subagents.md): Define e invoque subagentes para aislar contexto, ejecutar tareas en paralelo y aplicar instrucciones especializadas en sus aplicaciones Claude Agent SDK.

#### Personalizar comportamiento

- [Modificación de indicaciones del sistema](https://code.claude.com/docs/es/agent-sdk/modifying-system-prompts.md): Elija entre el preset `claude_code` y una indicación del sistema personalizada, y personalice el comportamiento con CLAUDE.md, estilos de salida, append, o una indicación completamente personalizada.
- [Agent Skills en el SDK](https://code.claude.com/docs/es/agent-sdk/skills.md): Extienda Claude con capacidades especializadas utilizando Agent Skills en el Claude Agent SDK
- [Plugins en el SDK](https://code.claude.com/docs/es/agent-sdk/plugins.md): Cargue plugins personalizados para extender Claude Code con skills, agentes, hooks y servidores MCP a través del Agent SDK

#### Control y observabilidad

- [Configurar permisos](https://code.claude.com/docs/es/agent-sdk/permissions.md): Controle cómo su agente utiliza herramientas con modos de permiso, hooks y reglas declarativas de permitir/denegar.
- [Interceptar y controlar el comportamiento del agente con hooks](https://code.claude.com/docs/es/agent-sdk/hooks.md): Interceptar y personalizar el comportamiento del agente en puntos clave de ejecución con hooks
- [Revertir cambios de archivos con checkpointing](https://code.claude.com/docs/es/agent-sdk/file-checkpointing.md): Rastrear cambios de archivos durante sesiones de agente y restaurar archivos a cualquier estado anterior
- [Rastrear costo y uso](https://code.claude.com/docs/es/agent-sdk/cost-tracking.md): Aprenda a rastrear el uso de tokens, estimar costos y configurar el almacenamiento en caché de indicaciones con el SDK del Agente Claude.
- [Observabilidad con OpenTelemetry](https://code.claude.com/docs/es/agent-sdk/observability.md): Exporte trazas, métricas y eventos del Agent SDK a su backend de observabilidad usando OpenTelemetry.
- [Listas de Tareas](https://code.claude.com/docs/es/agent-sdk/todo-tracking.md): Rastrear y mostrar tareas pendientes utilizando el SDK del Agente Claude para la gestión organizada de tareas

#### Implementación

- [Alojamiento del Agent SDK](https://code.claude.com/docs/es/agent-sdk/hosting.md): Implementar el Agent SDK en producción: arquitectura de subprocesos, persistencia de sesiones, escalado, observabilidad y aislamiento multiinquilino para Docker, Kubernetes y proveedores de sandbox.
- [Despliegue seguro de agentes de IA](https://code.claude.com/docs/es/agent-sdk/secure-deployment.md): Una guía para asegurar despliegues de Claude Code y Agent SDK con aislamiento, gestión de credenciales y controles de red

#### Referencias de SDK

- [Referencia del SDK de Agent - TypeScript](https://code.claude.com/docs/es/agent-sdk/typescript.md): Referencia completa de la API del SDK de Agent de TypeScript, incluyendo todas las funciones, tipos e interfaces.
- [API de sesión de TypeScript SDK V2 (eliminada)](https://code.claude.com/docs/es/agent-sdk/typescript-v2-preview.md): Referencia para la API de sesión eliminada V2 del SDK del Agente TypeScript, con patrones de envío/transmisión basados en sesiones para conversaciones de múltiples turnos.
- [Referencia del SDK de Agent - Python](https://code.claude.com/docs/es/agent-sdk/python.md): Referencia completa de la API del SDK de Agent de Python, incluyendo todas las funciones, tipos y clases.
- [Migrar a Claude Agent SDK](https://code.claude.com/docs/es/agent-sdk/migration-guide.md): Guía para migrar los SDK de TypeScript y Python de Claude Code al Claude Agent SDK

### Novedades

#### Novedades

- [Novedades](https://code.claude.com/docs/es/whats-new/index.md): Un resumen semanal de las características notables de Claude Code, con fragmentos de código, demostraciones y contexto sobre por qué importan.
- [Semana 28 · 6–10 de julio de 2026](https://code.claude.com/docs/es/whats-new/2026-w28.md): Navegue por sitios externos desde el navegador integrado de la aplicación de escritorio, ejecute una verificación completa de configuración con /doctor, y obtenga protecciones de transcripción en modo automático y mejoras en la vista de agentes.
- [Semana 27 · 29 de junio – 3 de julio de 2026](https://code.claude.com/docs/es/whats-new/2026-w27.md): Claude Sonnet 5 se convierte en el modelo predeterminado, Claude en Chrome alcanza disponibilidad general, los subagentes se ejecutan en segundo plano de forma predeterminada, Claude Desktop llega a Linux en versión beta, y /radio sintoniza Claude FM.
- [Semana 26 · 22–26 de junio de 2026](https://code.claude.com/docs/es/whats-new/2026-w26.md): Autentique servidores MCP desde su shell con claude mcp login, obtenga una respuesta a la salida del comando del modo shell con el prefijo !, y reanude una conversación anterior a /clear con /rewind.
- [Semana 25 · 15–19 de junio de 2026](https://code.claude.com/docs/es/whats-new/2026-w25.md): Publique una página en vivo y compartible desde su sesión con Artifacts, haga coincidir parámetros de herramientas en reglas de denegación y solicitud, y configure cualquier ajuste desde el prompt con /config.
- [Semana 24 · 8–12 de junio de 2026](https://code.claude.com/docs/es/whats-new/2026-w24.md): Mueva una sesión a un nuevo directorio con /cd, permita que los sub-agentes generen sus propios sub-agentes, y solucione problemas de una configuración rota con modo seguro.
- [Semana 23 · 1–5 de junio de 2026](https://code.claude.com/docs/es/whats-new/2026-w23.md): Ejecutar modo automático en Amazon Bedrock, Google Cloud's Agent Platform y Microsoft Foundry, solicitar confirmación antes de escribir archivos que pueden ejecutar código en modo acceptEdits, listar plugins instalados con /plugin list, y requerir un rango de versión aprobado para implementaciones a…
- [Semana 22 · 25–29 de mayo de 2026](https://code.claude.com/docs/es/whats-new/2026-w22.md): Ejecute Claude Code en Claude Opus 4.8, orqueste tareas grandes con flujos de trabajo dinámicos, detecte problemas de seguridad con el plugin security-guidance y use el modo rápido en Opus 4.8 a un precio más bajo.
- [Semana 21 · 18–22 de mayo de 2026](https://code.claude.com/docs/es/whats-new/2026-w21.md): Utilice el modo automático en el plan Pro y con Sonnet 4.6, vea qué skills, subagentes y servidores MCP impulsan los límites de su plan en /usage, y revise diffs con el nuevo comando /code-review.
- [Semana 20 · 11–15 de mayo de 2026](https://code.claude.com/docs/es/whats-new/2026-w20.md): Gestione todas las sesiones de Claude Code desde una pantalla con la vista de agente, mantenga a Claude trabajando hacia un objetivo hasta que se cumpla una condición, y ejecute el modo rápido en Opus 4.7 de forma predeterminada.
- [Semana 19 · 4–8 de mayo de 2026](https://code.claude.com/docs/es/whats-new/2026-w19.md): Cargue plugins desde archivos .zip y URLs, busque en el historial de comandos en todos los proyectos con Ctrl+R, cree nuevas worktrees desde HEAD local o la rama predeterminada remota, y bloquee acciones incondicionalmente con reglas de negación dura en modo automático.
- [Semana 18 · 27 de abril – 1 de mayo de 2026](https://code.claude.com/docs/es/whats-new/2026-w18.md): Claude Code en Windows se ejecuta sin Git Bash, claude auth login acepta un código OAuth pegado cuando la devolución de llamada del navegador no puede alcanzar localhost, claude project purge limpia el estado local por proyecto, y pegar una URL de PR en /resume encuentra la sesión que la creó.
- [Semana 17 · 20–24 de abril de 2026](https://code.claude.com/docs/es/whats-new/2026-w17.md): /ultrareview abre como vista previa de investigación, recapitulaciones automáticas de sesión cuando regresa a una terminal, temas de color personalizados que puede crear e implementar en plugins, y un Claude Code rediseñado en la web.
- [Semana 16 · 13–17 de abril de 2026](https://code.claude.com/docs/es/whats-new/2026-w16.md): Claude Opus 4.7 con el nuevo nivel de esfuerzo xhigh, Routines en Claude Code en la web, notificaciones push móviles que alertan a su teléfono cuando Claude lo necesita, un desglose de /usage que muestra qué está impulsando sus límites, y binarios nativos reemplazando el JavaScript empaquetado.
- [Semana 15 · 6–10 de abril de 2026](https://code.claude.com/docs/es/whats-new/2026-w15.md): Planificación en la nube Ultraplan, la herramienta Monitor con /loop de ritmo automático, /team-onboarding para empaquetar su configuración, y /autofix-pr desde su terminal.
- [Semana 14 · 30 de marzo – 3 de abril de 2026](https://code.claude.com/docs/es/whats-new/2026-w14.md): Computer use en la CLI, lecciones interactivas en el producto, renderizado sin parpadeos, anulaciones de tamaño de resultado de MCP por herramienta y ejecutables de plugins en PATH.
- [Semana 13 · 23–27 de marzo de 2026](https://code.claude.com/docs/es/whats-new/2026-w13.md): Modo automático para permisos sin intervención, control de computadora integrado, auto-corrección de PR en la nube, búsqueda de transcripciones y una herramienta PowerShell para Windows.

### Recursos

#### Recursos

- [Legal y cumplimiento](https://code.claude.com/docs/es/legal-and-compliance.md): Acuerdos legales, certificaciones de cumplimiento e información de seguridad para Claude Code.
