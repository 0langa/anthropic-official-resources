# Claude Code Docs: French

> Official documentation for Claude Code, Anthropic's agentic coding tool available in the terminal, IDE, desktop app, and browser. Covers installation, configuration, skills, subagents, hooks, MCP, the Agent SDK, and reference material.

## French

### Démarrer

#### Démarrer

- [Aperçu](https://code.claude.com/docs/fr/overview.md): Claude Code est un outil de codage agentique qui lit votre base de code, modifie les fichiers, exécute des commandes et s'intègre à vos outils de développement. Disponible dans votre terminal, IDE, application de bureau et navigateur.
- [Démarrage rapide](https://code.claude.com/docs/fr/quickstart.md): Bienvenue dans Claude Code !
- [Journal des modifications](https://code.claude.com/docs/fr/changelog.md)

#### Concepts fondamentaux

- [Comment fonctionne Claude Code](https://code.claude.com/docs/fr/how-claude-code-works.md): Comprenez la boucle agentive, les outils intégrés et comment Claude Code interagit avec votre projet.
- [Étendre Claude Code](https://code.claude.com/docs/fr/features-overview.md): Comprenez quand utiliser CLAUDE.md, Skills, subagents, hooks, MCP et plugins.
- [Explorez le répertoire .claude](https://code.claude.com/docs/fr/claude-directory.md): Où Claude Code lit CLAUDE.md, settings.json, hooks, skills, commands, subagents, workflows, rules et auto memory. Explorez le répertoire .claude dans votre projet et ~/.claude dans votre répertoire personnel.
- [Explorez la fenêtre de contexte](https://code.claude.com/docs/fr/context-window.md): Une simulation interactive de la façon dont la fenêtre de contexte de Claude Code se remplit pendant une session. Voyez ce qui se charge automatiquement, ce que coûte chaque lecture de fichier, et quand les règles et les hooks s'exécutent.
- [Comment Claude Code utilise le prompt caching](https://code.claude.com/docs/fr/prompt-caching.md): Claude Code gère le prompt caching automatiquement. Découvrez pourquoi un changement de modèle déclenche un tour lent sans cache, ce que coûte `/compact`, pourquoi les modifications de CLAUDE.md ne s'appliquent pas en cours de session, et comment vérifier votre taux de cache hit.

#### Utiliser Claude Code

- [Comment Claude se souvient de votre projet](https://code.claude.com/docs/fr/memory.md): Donnez à Claude des instructions persistantes avec les fichiers CLAUDE.md, et laissez Claude accumuler automatiquement les apprentissages avec la mémoire automatique.
- [Choisir un mode de permission](https://code.claude.com/docs/fr/permission-modes.md): Contrôlez si Claude demande une approbation avant de modifier des fichiers ou d'exécuter des commandes. Basculez entre les modes avec Maj+Tab dans l'interface de ligne de commande ou utilisez le sélecteur de mode dans VS Code, Desktop et claude.ai.
- [Gérer les sessions](https://code.claude.com/docs/fr/sessions.md): Nommez, reprenez, créez des branches et basculez entre les conversations Claude Code. Couvre `--continue`, `--resume`, `--from-pr`, le sélecteur `/resume`, la dénomination des sessions, l'export des transcriptions et l'emplacement des transcriptions.
- [Flux de travail courants](https://code.claude.com/docs/fr/common-workflows.md): Guides étape par étape pour explorer les bases de code, corriger les bogues, refactoriser, tester et autres tâches quotidiennes avec Claude Code.
- [Bibliothèque de prompts](https://code.claude.com/docs/fr/prompt-library.md): Copiez-collez des prompts pour Claude Code, étiquetés par tâche et rôle.
- [Meilleures pratiques pour Claude Code](https://code.claude.com/docs/fr/best-practices.md): Conseils et modèles pour tirer le meilleur parti de Claude Code, de la configuration de votre environnement à la mise à l'échelle sur plusieurs sessions parallèles.

#### Plateformes et intégrations

- [Plateformes et intégrations](https://code.claude.com/docs/fr/platforms.md): Choisissez où exécuter Claude Code et ce que vous y connecter. Comparez le CLI, Desktop, VS Code, JetBrains, le web et les intégrations comme Chrome, Slack et CI/CD.
- [Continuer les sessions locales depuis n'importe quel appareil avec Remote Control](https://code.claude.com/docs/fr/remote-control.md): Continuez une session Claude Code locale depuis votre téléphone, tablette ou n'importe quel navigateur en utilisant Remote Control. Fonctionne avec claude.ai/code et l'application Claude mobile.
- [Utiliser Claude Code avec Chrome](https://code.claude.com/docs/fr/chrome.md): Connectez Claude Code à votre navigateur Chrome pour tester des applications web, déboguer avec les journaux de console, automatiser le remplissage de formulaires et extraire des données des pages web.
- [Laisser Claude utiliser votre ordinateur depuis la CLI](https://code.claude.com/docs/fr/computer-use.md): Activez l'utilisation de l'ordinateur dans la CLI Claude Code pour que Claude puisse ouvrir des applications, cliquer, taper et voir votre écran sur macOS. Testez les applications natives, déboguez les problèmes visuels et automatisez les outils GUI uniquement sans quitter votre terminal.
- [Utiliser Claude Code dans VS Code](https://code.claude.com/docs/fr/vs-code.md): Installez et configurez l'extension Claude Code pour VS Code. Obtenez une assistance de codage IA avec des diffs en ligne, des mentions @, un examen du plan et des raccourcis clavier.
- [JetBrains IDEs](https://code.claude.com/docs/fr/jetbrains.md): Utilisez Claude Code avec les IDEs JetBrains, notamment IntelliJ, PyCharm, WebStorm et bien d'autres
- [Claude Code dans Slack](https://code.claude.com/docs/fr/slack.md): Déléguez les tâches de codage directement depuis votre espace de travail Slack

##### Claude Code sur le web

- [Démarrer avec Claude Code sur le web](https://code.claude.com/docs/fr/web-quickstart.md): Exécutez Claude Code dans le cloud depuis votre navigateur ou téléphone. Connectez un référentiel GitHub, soumettez une tâche et examinez la PR sans configuration locale.
- [Utiliser Claude Code sur le web](https://code.claude.com/docs/fr/claude-code-on-the-web.md): Configurez les environnements cloud, les scripts de configuration, l'accès réseau et Docker dans le sandbox d'Anthropic. Déplacez les sessions entre le web et le terminal avec `--cloud` et `--teleport`.
- [Automatiser le travail avec les routines](https://code.claude.com/docs/fr/routines.md): Mettez Claude Code en pilotage automatique. Définissez des routines qui s'exécutent selon un calendrier, se déclenchent sur des appels API, ou réagissent aux événements GitHub à partir de l'infrastructure cloud gérée par Anthropic.
- [Trouver des bugs avec ultrareview](https://code.claude.com/docs/fr/ultrareview.md): Exécutez une révision de code approfondie et multi-agents dans le cloud avec /code-review ultra pour trouver et vérifier les bugs avant de fusionner.

##### Claude Code sur ordinateur

- [Démarrer avec l'application de bureau](https://code.claude.com/docs/fr/desktop-quickstart.md): Installez Claude Code sur le bureau et commencez votre première session de codage
- [Application de bureau](https://code.claude.com/docs/fr/desktop.md): Tirez le meilleur parti de Claude Code Desktop : sessions parallèles avec isolation Git, disposition des volets par glisser-déposer, terminal intégré et éditeur de fichiers, chats latéraux, utilisation informatique, sessions Dispatch depuis votre téléphone, examen visuel des différences, aperçus d'a…
- [Claude Desktop sur Linux (bêta)](https://code.claude.com/docs/fr/desktop-linux.md): Installez et mettez à jour l'application de bureau Claude sur Ubuntu et Debian
- [Claude Code Desktop dans WSL](https://code.claude.com/docs/fr/desktop-wsl.md): Exécuter des sessions Code dans une distribution WSL 2 sur Windows
- [Planifier des tâches récurrentes dans Claude Code Desktop](https://code.claude.com/docs/fr/desktop-scheduled-tasks.md): Configurez des tâches planifiées dans Claude Code Desktop pour exécuter Claude automatiquement de manière récurrente pour les révisions de code quotidiennes, les audits de dépendances ou les briefings matinaux.

##### Révision de code et CI/CD

- [Détecter les problèmes de sécurité au fur et à mesure que Claude écrit du code](https://code.claude.com/docs/fr/security-guidance.md): Installez le plugin security-guidance pour que Claude examine ses propres modifications de code à la recherche de vulnérabilités et les corrige dans la même session.
- [Révision de code](https://code.claude.com/docs/fr/code-review.md): Configurez des révisions de PR automatisées qui détectent les erreurs logiques, les vulnérabilités de sécurité et les régressions en utilisant l'analyse multi-agents de votre base de code complète
- [Claude Code GitHub Actions](https://code.claude.com/docs/fr/github-actions.md): Découvrez comment intégrer Claude Code dans votre flux de travail de développement avec Claude Code GitHub Actions
- [Claude Code avec GitHub Enterprise Server](https://code.claude.com/docs/fr/github-enterprise-server.md): Connectez Claude Code à votre instance GitHub Enterprise Server auto-hébergée pour les sessions web, la révision de code et les marketplaces de plugins.
- [Claude Code GitLab CI/CD](https://code.claude.com/docs/fr/gitlab-ci-cd.md): Découvrez comment intégrer Claude Code dans votre flux de travail de développement avec GitLab CI/CD

### Créer avec Claude Code

#### Agents et travail parallèle

- [Exécuter des agents en parallèle](https://code.claude.com/docs/fr/agents.md): Comparez les façons dont Claude Code peut gérer plusieurs tâches à la fois : sous-agents, vue agent, équipes d'agents et workflows dynamiques.
- [Créer des sous-agents personnalisés](https://code.claude.com/docs/fr/sub-agents.md): Créez et utilisez des sous-agents IA spécialisés dans Claude Code pour des workflows spécifiques à des tâches et une meilleure gestion du contexte.
- [Gérer plusieurs agents avec la vue agent](https://code.claude.com/docs/fr/agent-view.md): Lancez et gérez plusieurs sessions Claude Code à partir d'un seul écran. La vue agent affiche ce que chaque session fait et lesquelles ont besoin de votre intervention.
- [Orchestrer des équipes de sessions Claude Code](https://code.claude.com/docs/fr/agent-teams.md): Coordonnez plusieurs instances Claude Code travaillant ensemble en tant qu'équipe, avec des tâches partagées, la messagerie inter-agents et la gestion centralisée.
- [Orchestrer des sous-agents à grande échelle avec des workflows dynamiques](https://code.claude.com/docs/fr/workflows.md): Les workflows dynamiques orchestrent de nombreux sous-agents à partir d'un script que Claude écrit et que vous pouvez relancer. Utilisez-les pour les audits de base de code, les migrations importantes et la recherche avec vérification croisée.
- [Exécuter des sessions parallèles avec worktrees](https://code.claude.com/docs/fr/worktrees.md): Isolez les sessions Claude Code parallèles dans des git worktrees séparés pour que les modifications ne se heurtent pas. Couvre le flag `--worktree`, l'isolation des subagents, `.worktreeinclude`, le nettoyage et les hooks VCS non-git.

#### MCP

- [Se connecter aux serveurs MCP](https://code.claude.com/docs/fr/mcp-quickstart.md): Ajoutez un serveur MCP à Claude Code, vérifiez la connexion et trouvez la configuration sur le disque.
- [Connecter Claude Code aux outils via MCP](https://code.claude.com/docs/fr/mcp.md): Découvrez comment connecter Claude Code à vos outils avec le Model Context Protocol.

#### Skills

- [Étendre Claude avec des skills](https://code.claude.com/docs/fr/skills.md): Créez, gérez et partagez des skills pour étendre les capacités de Claude dans Claude Code. Inclut les commandes personnalisées et les skills groupées.

#### Plugins

- [Découvrir et installer des plugins prédéfinis via les marketplaces](https://code.claude.com/docs/fr/discover-plugins.md): Trouvez et installez des plugins depuis les marketplaces pour étendre Claude Code avec de nouvelles compétences, agents et capacités.
- [Créer des plugins](https://code.claude.com/docs/fr/plugins.md): Créez des plugins personnalisés pour étendre Claude Code avec des skills, des agents, des hooks et des serveurs MCP.

#### Artefacts

- [Partager la sortie de session en tant qu'artefacts](https://code.claude.com/docs/fr/artifacts.md): Les artefacts transforment le travail de Claude Code en pages interactives en direct sur claude.ai que vous pouvez garder privées, partager avec votre organisation ou publier via un lien public.

#### Automatisation

- [Automatiser les actions avec les hooks](https://code.claude.com/docs/fr/hooks-guide.md): Exécutez automatiquement des commandes shell lorsque Claude Code modifie des fichiers, termine des tâches ou a besoin d'une entrée. Formatez le code, envoyez des notifications, validez les commandes et appliquez les règles du projet.
- [Envoyer des événements dans une session active avec les canaux](https://code.claude.com/docs/fr/channels.md): Utilisez les canaux pour envoyer des messages, des alertes et des webhooks dans votre session Claude Code à partir d'un serveur MCP. Transférez les résultats CI, les messages de chat et les événements de surveillance pour que Claude puisse réagir en votre absence.
- [Exécuter des prompts selon un calendrier](https://code.claude.com/docs/fr/scheduled-tasks.md): Utilisez /loop et les outils de planification cron pour exécuter des prompts de manière répétée, interroger l'état ou définir des rappels ponctuels dans une session Claude Code.
- [Garder Claude orienté vers un objectif](https://code.claude.com/docs/fr/goal.md): Définissez une condition d'achèvement avec /goal et Claude continue de travailler sur plusieurs tours jusqu'à ce que la condition soit satisfaite.
- [Exécuter Claude Code par programmation](https://code.claude.com/docs/fr/headless.md): Utilisez l'Agent SDK pour exécuter Claude Code par programmation depuis la CLI, Python ou TypeScript.
- [Lancer des sessions à partir de liens](https://code.claude.com/docs/fr/deep-links.md): Ouvrir une session de terminal Claude Code à partir d'une URL. Intégrez des liens `claude-cli://` dans les runbooks, les alertes et les tableaux de bord pour qu'un clic ouvre Claude Code dans le bon dépôt avec la bonne invite.

#### Guides

- [Configurer Claude Code dans un monorepo ou un grand dépôt de code](https://code.claude.com/docs/fr/large-codebases.md): Configurez Claude Code pour les monorepos et les grands dépôts à arborescence unique avec des fichiers CLAUDE.md imbriqués, des worktrees clairsemés, l'intelligence du code et des skills par package afin que Claude reste concentré sur le code sur lequel vous travaillez.

#### Dépannage

- [Dépanner l'installation et la connexion](https://code.claude.com/docs/fr/troubleshoot-install.md): Corrigez les erreurs de commande introuvable, PATH, permission, réseau et authentification lors de l'installation ou de la connexion à Claude Code.
- [Dépannage](https://code.claude.com/docs/fr/troubleshooting.md): Corrigez l'utilisation élevée du CPU ou de la mémoire, les blocages, le thrashing de l'auto-compaction et les problèmes de recherche dans Claude Code, et trouvez la bonne page pour d'autres problèmes.
- [Déboguer votre configuration](https://code.claude.com/docs/fr/debug-your-config.md): Diagnostiquez pourquoi CLAUDE.md, les paramètres, les hooks, les serveurs MCP ou les skills ne prennent pas effet. Utilisez /context, /doctor, /hooks et /mcp pour voir ce qui a réellement été chargé.
- [Référence des erreurs](https://code.claude.com/docs/fr/errors.md): Consultez les messages d'erreur d'exécution de Claude Code avec leur signification et comment les corriger.

### Administration

#### Configuration et accès

- [Configurer Claude Code pour votre organisation](https://code.claude.com/docs/fr/admin-setup.md): Une carte de décision pour les administrateurs déployant Claude Code, couvrant les fournisseurs d'API, les paramètres gérés, l'application des politiques, la surveillance de l'utilisation et la gestion des données.
- [Configuration avancée](https://code.claude.com/docs/fr/setup.md): Configuration requise, installation spécifique à la plateforme, gestion des versions et désinstallation pour Claude Code.
- [Authentification](https://code.claude.com/docs/fr/authentication.md): Connectez-vous à Claude Code et configurez l'authentification pour les particuliers, les équipes et les organisations.
- [Configurer les paramètres gérés par le serveur](https://code.claude.com/docs/fr/server-managed-settings.md): Configurez centralement Claude Code pour votre organisation via des paramètres livrés par le serveur, sans nécessiter d'infrastructure de gestion des appareils.
- [Contrôler l'accès aux serveurs MCP pour votre organisation](https://code.claude.com/docs/fr/managed-mcp.md): Limitez les serveurs MCP que les utilisateurs peuvent ajouter ou connecter avec des fichiers de configuration gérés, des listes blanches et des listes noires.
- [Configurer le mode auto](https://code.claude.com/docs/fr/auto-mode-config.md): Indiquez au classificateur du mode auto quels dépôts, buckets et domaines votre organisation approuve. Définissez le contexte d'environnement, remplacez les règles de blocage et d'autorisation par défaut, et inspectez votre configuration effective avec les sous-commandes CLI du mode auto.

#### Déploiement

- [Aperçu du déploiement en entreprise](https://code.claude.com/docs/fr/third-party-integrations.md): Découvrez comment Claude Code peut s'intégrer à divers services tiers et infrastructures pour répondre aux exigences de déploiement en entreprise.
- [Disponibilité des fonctionnalités](https://code.claude.com/docs/fr/feature-availability.md): Comparez les fonctionnalités de Claude Code disponibles sur les plans d'abonnement Anthropic, la Console Anthropic, Amazon Bedrock, Claude Platform sur AWS, Google Cloud's Agent Platform et Microsoft Foundry.
- [Claude Code sur Amazon Bedrock](https://code.claude.com/docs/fr/amazon-bedrock.md): Découvrez comment configurer Claude Code via Amazon Bedrock, y compris la configuration, la configuration IAM et le dépannage.
- [Claude Code sur Claude Platform on AWS](https://code.claude.com/docs/fr/claude-platform-on-aws.md): Configurez Claude Code pour utiliser l'API Claude exploitée par Anthropic avec l'authentification AWS, le contrôle d'accès IAM et la facturation AWS Marketplace.
- [Claude Code sur la Plateforme Agent de Google Cloud](https://code.claude.com/docs/fr/google-vertex-ai.md): Découvrez comment configurer Claude Code via la Plateforme Agent de Google Cloud, anciennement Vertex AI, y compris la configuration, la configuration IAM et la résolution des problèmes.
- [Claude Code sur Microsoft Foundry](https://code.claude.com/docs/fr/microsoft-foundry.md): Découvrez comment configurer Claude Code via Microsoft Foundry, y compris la configuration, les paramètres et la résolution des problèmes.
- [Configuration réseau d'entreprise](https://code.claude.com/docs/fr/network-config.md): Configurez Claude Code pour les environnements d'entreprise avec des serveurs proxy, des autorités de certification (CA) personnalisées et l'authentification mutuelle Transport Layer Security (mTLS).
- [Exécuter Claude Code via un lanceur d'entreprise](https://code.claude.com/docs/fr/corporate-launcher.md): Acheminez les processus que Claude Code démarre à partir de son propre binaire, y compris le service d'arrière-plan et chaque session de vue agent, via un lanceur obligatoire avec CLAUDE_CODE_PROCESS_WRAPPER.
- [Conteneurs de développement](https://code.claude.com/docs/fr/devcontainer.md): Exécutez Claude Code dans un conteneur de développement pour des environnements cohérents et isolés dans toute votre équipe.

#### Passerelles

- [Exécuter Claude Code via une passerelle](https://code.claude.com/docs/fr/gateways.md): Acheminez Claude Code via une passerelle auto-hébergée pour les identifiants centralisés, le suivi de l'utilisation et les contrôles de coûts. Couvre l'architecture, la passerelle d'applications Claude d'Anthropic et l'utilisation d'autres produits de passerelle.

##### Passerelle d'applications Claude

- [Passerelle Claude apps pour Amazon Bedrock, Claude Platform sur AWS, Google Cloud et Microsoft Foundry](https://code.claude.com/docs/fr/claude-apps-gateway.md): Exécutez Claude Code via Amazon Bedrock, Claude Platform sur AWS, Google Cloud ou Microsoft Foundry derrière une passerelle auto-hébergée avec authentification SSO, accès aux modèles par groupe et télémétrie OTLP.
- [Configuration de la passerelle Claude apps](https://code.claude.com/docs/fr/claude-apps-gateway-config.md): Référence pour chaque option gateway.yaml : écouteur et TLS, OIDC, session, magasin Postgres, amonts Amazon Bedrock, Claude Platform sur AWS, Agent Platform de Google Cloud et Microsoft Foundry, routage des modèles, politiques gérées et télémétrie.
- [Limites de dépenses de la passerelle Claude apps](https://code.claude.com/docs/fr/claude-apps-gateway-spend-limits.md): Limitez les dépenses de chaque développeur via la passerelle Claude apps par jour, semaine ou mois. Définissez les limites avec une API Admin et la passerelle les applique en direct à chaque requête.
- [Déploiement et exploitation de la passerelle Claude apps](https://code.claude.com/docs/fr/claude-apps-gateway-deploy.md): Enregistrez la passerelle auprès de votre fournisseur d'identité, créez le conteneur, déployez sur Kubernetes ou Cloud Run, et exploitez-la : vérifications de santé, rotation des secrets, mises à jour et sécurité.
- [Déployer la passerelle Claude apps sur Google Cloud](https://code.claude.com/docs/fr/claude-apps-gateway-on-gcp.md): Un exemple concret d'exécution de la passerelle Claude apps sur Google Cloud : Cloud Run ou GKE, Cloud SQL pour PostgreSQL, Secret Manager et authentification par compte de service vers Agent Platform.

##### Autres passerelles

- [Autres passerelles LLM](https://code.claude.com/docs/fr/llm-gateway.md): Acheminez Claude Code via une passerelle LLM que votre organisation exécute déjà. Couvre la connexion de Claude Code à une passerelle, le déploiement d'une passerelle pour votre organisation et ce que Claude Code envoie à une passerelle.
- [Connecter Claude Code à une passerelle LLM](https://code.claude.com/docs/fr/llm-gateway-connect.md): Pointez Claude Code vers la passerelle LLM de votre organisation. Vérifiez si votre administrateur l'a déjà configurée, ou définissez vous-même l'URL de base et les identifiants, puis vérifiez la connexion et corrigez les erreurs de passerelle.
- [Déployer une passerelle LLM pour votre organisation](https://code.claude.com/docs/fr/llm-gateway-rollout.md): Déployez un produit de passerelle pour Claude Code : configurez-le pour transférer ce que Claude Code envoie, émettez des identifiants de développeur, distribuez la configuration via les paramètres gérés, et vérifiez le déploiement.
- [Référence du protocole de passerelle](https://code.claude.com/docs/fr/llm-gateway-protocol.md): Le contrat API entre Claude Code et une passerelle LLM : points de terminaison, en-têtes et champs de corps à transmettre, dégradation des fonctionnalités lorsque les champs sont supprimés, en-têtes d'attribution pour le suivi des coûts et découverte des modèles.

#### Utilisation et coûts

- [Surveillance](https://code.claude.com/docs/fr/monitoring-usage.md): Découvrez comment activer et configurer OpenTelemetry pour Claude Code.
- [Gérer les coûts efficacement](https://code.claude.com/docs/fr/costs.md): Suivez l'utilisation des tokens, définissez des limites de dépenses pour l'équipe, et réduisez les coûts de Claude Code grâce à la gestion du contexte, la sélection du modèle, les paramètres de réflexion étendue et les hooks de prétraitement.
- [Suivre l'utilisation de l'équipe avec l'analytique](https://code.claude.com/docs/fr/analytics.md): Consultez les métriques d'utilisation de Claude Code, suivez l'adoption et mesurez la vélocité d'ingénierie dans le tableau de bord analytique.

#### Distribution de plugins

- [Créer et distribuer une place de marché de plugins](https://code.claude.com/docs/fr/plugin-marketplaces.md): Créez et hébergez des places de marché de plugins pour distribuer les extensions Claude Code dans vos équipes et communautés.
- [Contraindre les versions des dépendances de plugin](https://code.claude.com/docs/fr/plugin-dependencies.md): Déclarez des contraintes de version sur les dépendances de plugin, et regroupez un ensemble de plugins organisé derrière une seule installation.
- [Recommander votre plugin depuis votre CLI](https://code.claude.com/docs/fr/plugin-hints.md): Émettez un marqueur d'une ligne depuis votre CLI pour que Claude Code invite les utilisateurs à installer votre plugin officiel.
- [Recommander des plugins pour votre organisation](https://code.claude.com/docs/fr/plugin-relevance.md): Ajoutez un bloc de pertinence aux entrées de plugins de la marketplace afin que Claude Code les suggère lorsque le travail d'un utilisateur correspond.

#### Sécurité et données

- [Sécurité](https://code.claude.com/docs/fr/security.md): Découvrez les protections de sécurité de Claude Code et les meilleures pratiques pour une utilisation sûre.
- [Utilisation des données](https://code.claude.com/docs/fr/data-usage.md): Découvrez les politiques d'utilisation des données d'Anthropic pour Claude
- [Zéro conservation des données](https://code.claude.com/docs/fr/zero-data-retention.md): Découvrez la conservation zéro des données (ZDR) pour Claude Code, disponible pour les comptes qualifiés sur Claude for Enterprise, y compris la portée, les fonctionnalités désactivées et comment demander l'activation.

#### Adoption

- [Kit de communication](https://code.claude.com/docs/fr/communications-kit.md): Annonces de lancement, messages de campagne progressive et réponses FAQ pour déployer Claude Code dans votre organisation d'ingénierie.
- [Kit du champion](https://code.claude.com/docs/fr/champion-kit.md): Un guide pratique pour les ingénieurs qui défendent Claude Code en interne : quoi partager, comment répondre aux questions et comment augmenter l'adoption dans votre équipe.

### Configuration

#### Paramètres et autorisations

- [Paramètres Claude Code](https://code.claude.com/docs/fr/settings.md): Configurez Claude Code avec des paramètres globaux et au niveau du projet, ainsi que des variables d'environnement.
- [Configurer les autorisations](https://code.claude.com/docs/fr/permissions.md): Contrôlez ce que Claude Code peut accéder et faire avec des règles d'autorisation granulaires, des modes et des politiques gérées.
- [Choisir un environnement sandbox](https://code.claude.com/docs/fr/sandbox-environments.md): Comparez les options de sandbox Claude Code : l'outil Bash sandboxé intégré, le runtime sandbox, les dev containers, Docker et les machines virtuelles. Choisissez l'isolation appropriée pour votre modèle de menace.
- [Configurer l'outil Bash en sandbox](https://code.claude.com/docs/fr/sandboxing.md): Découvrez comment l'outil Bash en sandbox de Claude Code fournit une isolation du système de fichiers et du réseau pour une exécution d'agent plus sûre et plus autonome.

#### Modèle et réponses

- [Configuration du modèle](https://code.claude.com/docs/fr/model-config.md): Découvrez la configuration du modèle Claude Code, y compris les alias de modèle comme `opusplan`
- [Accélérez les réponses avec le mode rapide](https://code.claude.com/docs/fr/fast-mode.md): Obtenez des réponses Opus plus rapides dans Claude Code en activant le mode rapide.
- [Escalader les décisions difficiles avec l'outil advisor](https://code.claude.com/docs/fr/advisor.md): Associez votre modèle principal à un modèle advisor plus puissant que Claude consulte aux moments clés pendant une tâche.
- [Styles de sortie](https://code.claude.com/docs/fr/output-styles.md): Adaptez Claude Code pour des usages au-delà de l'ingénierie logicielle

#### Interface

- [Configurez votre terminal pour Claude Code](https://code.claude.com/docs/fr/terminal-config.md): Corrigez Maj+Entrée pour les sauts de ligne, recevez une notification sonore du terminal lorsque Claude termine, configurez tmux, adaptez le thème de couleur et activez le mode Vim dans l'interface CLI de Claude Code.
- [Rendu en plein écran](https://code.claude.com/docs/fr/fullscreen.md): Activez un mode de rendu plus fluide et sans scintillement avec support de la souris et une utilisation mémoire stable dans les longues conversations.
- [Utiliser Claude Code avec un lecteur d'écran](https://code.claude.com/docs/fr/accessibility.md): Configurez Claude Code pour les lecteurs d'écran tels que VoiceOver et NVDA, ainsi que les paramètres pour les loupes d'écran, le mouvement réduit et les thèmes adaptés aux daltoniens.
- [Dictée vocale](https://code.claude.com/docs/fr/voice-dictation.md): Parlez vos invites dans l'interface de ligne de commande Claude Code avec la dictée vocale en maintenant ou en appuyant.
- [Personnalisez votre barre de statut](https://code.claude.com/docs/fr/statusline.md): Configurez une barre de statut personnalisée pour surveiller l'utilisation de la fenêtre de contexte, les coûts et l'état git dans Claude Code
- [Personnaliser les raccourcis clavier](https://code.claude.com/docs/fr/keybindings.md): Personnalisez les raccourcis clavier dans Claude Code avec un fichier de configuration des liaisons de touches.

### Référence

#### Référence

- [Référence CLI](https://code.claude.com/docs/fr/cli-reference.md): Référence complète pour l'interface de ligne de commande Claude Code, incluant les commandes et les drapeaux.
- [Commandes](https://code.claude.com/docs/fr/commands.md): Référence complète des commandes disponibles dans Claude Code, y compris les commandes intégrées et les skills fournis.
- [Variables d'environnement](https://code.claude.com/docs/fr/env-vars.md): Référence pour les variables d'environnement qui contrôlent le comportement de Claude Code.
- [Référence des outils](https://code.claude.com/docs/fr/tools-reference.md): Référence complète des outils que Claude Code peut utiliser, y compris les exigences de permission et le comportement par outil.
- [Mode interactif](https://code.claude.com/docs/fr/interactive-mode.md): Référence complète des raccourcis clavier, modes d'entrée et fonctionnalités interactives dans les sessions Claude Code.
- [Checkpointing](https://code.claude.com/docs/fr/checkpointing.md): Suivez, rembobinez et résumez les modifications et la conversation de Claude pour gérer l'état de la session.
- [Référence des hooks](https://code.claude.com/docs/fr/hooks.md): Référence pour les événements de hook Claude Code, le schéma de configuration, les formats d'entrée/sortie JSON, les codes de sortie, les hooks asynchrones, les hooks HTTP, les hooks de prompt et les hooks d'outils MCP.
- [Référence des plugins](https://code.claude.com/docs/fr/plugins-reference.md): Référence technique complète du système de plugins Claude Code, incluant les schémas, les commandes CLI et les spécifications des composants.
- [Référence des canaux](https://code.claude.com/docs/fr/channels-reference.md): Créez un serveur MCP qui envoie des webhooks, des alertes et des messages de chat dans une session Claude Code. Référence du contrat de canal : déclaration de capacité, événements de notification, outils de réponse, contrôle de l'expéditeur et relais de permission.

#### Glossaire

- [Glossaire](https://code.claude.com/docs/fr/glossary.md): Définitions de la terminologie Claude Code. Découvrez ce que signifient agentic loop, compaction, CLAUDE.md, hooks, subagents, MCP et autres concepts fondamentaux.

### Agent SDK

#### Agent SDK

- [Présentation du SDK Agent](https://code.claude.com/docs/fr/agent-sdk/overview.md): Créez des agents IA de production avec Claude Code en tant que bibliothèque
- [Démarrage rapide](https://code.claude.com/docs/fr/agent-sdk/quickstart.md): Commencez avec le SDK Agent Python ou TypeScript pour créer des agents IA qui fonctionnent de manière autonome

#### Concepts fondamentaux

- [Fonctionnement de la boucle d'agent](https://code.claude.com/docs/fr/agent-sdk/agent-loop.md): Comprenez le cycle de vie des messages, l'exécution des outils, la fenêtre de contexte et l'architecture qui alimentent vos agents SDK.
- [Utiliser les fonctionnalités de Claude Code dans le SDK](https://code.claude.com/docs/fr/agent-sdk/claude-code-features.md): Chargez les instructions de projet, les compétences, les hooks et autres fonctionnalités de Claude Code dans vos agents SDK.
- [Travailler avec les sessions](https://code.claude.com/docs/fr/agent-sdk/sessions.md): Comment les sessions conservent l'historique des conversations de l'agent, et quand utiliser continue, resume et fork pour revenir à une exécution antérieure.
- [Persister les sessions dans un stockage externe](https://code.claude.com/docs/fr/agent-sdk/session-storage.md): Miroir les transcriptions de session vers S3, Redis ou votre propre backend pour que n'importe quel hôte puisse les reprendre.

#### Entrée et sortie

- [Streaming Input](https://code.claude.com/docs/fr/agent-sdk/streaming-vs-single-mode.md): Comprendre les deux modes d'entrée du Claude Agent SDK et quand utiliser chacun
- [Gérer les approbations et les entrées utilisateur](https://code.claude.com/docs/fr/agent-sdk/user-input.md): Présentez les demandes d'approbation et les questions de clarification de Claude aux utilisateurs, puis renvoyez leurs décisions au SDK.
- [Diffuser les réponses en temps réel](https://code.claude.com/docs/fr/agent-sdk/streaming-output.md): Recevez les réponses en temps réel du SDK Agent à mesure que le texte et les appels d'outils sont diffusés
- [Obtenir une sortie structurée des agents](https://code.claude.com/docs/fr/agent-sdk/structured-outputs.md): Retourner du JSON validé à partir de workflows d'agents en utilisant JSON Schema, Zod ou Pydantic. Obtenir des données structurées et type-safe après une utilisation multi-tour d'outils.

#### Étendre avec des outils

- [Donner à Claude des outils personnalisés](https://code.claude.com/docs/fr/agent-sdk/custom-tools.md): Définissez des outils personnalisés avec le serveur MCP en processus du SDK Agent pour que Claude puisse appeler vos fonctions, accéder à vos API et effectuer des opérations spécifiques au domaine.
- [Connecter à des outils externes avec MCP](https://code.claude.com/docs/fr/agent-sdk/mcp.md): Configurez les serveurs MCP pour étendre votre agent avec des outils externes. Couvre les types de transport, la recherche d'outils pour les grands ensembles d'outils, l'authentification et la gestion des erreurs.
- [Adapter à de nombreux outils avec la recherche d'outils](https://code.claude.com/docs/fr/agent-sdk/tool-search.md): Adaptez votre agent à des milliers d'outils en découvrant et chargeant uniquement ce qui est nécessaire, à la demande.
- [Sous-agents dans le SDK](https://code.claude.com/docs/fr/agent-sdk/subagents.md): Définissez et invoquez des sous-agents pour isoler le contexte, exécuter des tâches en parallèle et appliquer des instructions spécialisées dans vos applications Claude Agent SDK.

#### Personnaliser le comportement

- [Modification des invites système](https://code.claude.com/docs/fr/agent-sdk/modifying-system-prompts.md): Choisissez entre le préréglage `claude_code` et une invite système personnalisée, et personnalisez le comportement avec CLAUDE.md, les styles de sortie, append, ou une invite entièrement personnalisée.
- [Agent Skills dans le SDK](https://code.claude.com/docs/fr/agent-sdk/skills.md): Étendez Claude avec des capacités spécialisées en utilisant Agent Skills dans le Claude Agent SDK
- [Plugins dans le SDK](https://code.claude.com/docs/fr/agent-sdk/plugins.md): Chargez des plugins personnalisés pour étendre Claude Code avec des skills, des agents, des hooks et des serveurs MCP via le SDK Agent

#### Contrôle et observabilité

- [Configurer les permissions](https://code.claude.com/docs/fr/agent-sdk/permissions.md): Contrôlez comment votre agent utilise les outils avec les modes de permission, les hooks et les règles de permission/refus déclaratives.
- [Intercepter et contrôler le comportement des agents avec des hooks](https://code.claude.com/docs/fr/agent-sdk/hooks.md): Interceptez et personnalisez le comportement des agents aux points d'exécution clés avec des hooks
- [Rembobiner les modifications de fichiers avec les points de contrôle](https://code.claude.com/docs/fr/agent-sdk/file-checkpointing.md): Suivre les modifications de fichiers pendant les sessions d'agent et restaurer les fichiers à n'importe quel état antérieur
- [Suivre les coûts et l'utilisation](https://code.claude.com/docs/fr/agent-sdk/cost-tracking.md): Découvrez comment suivre l'utilisation des tokens, estimer les coûts et configurer la mise en cache des invites avec le Claude Agent SDK.
- [Observabilité avec OpenTelemetry](https://code.claude.com/docs/fr/agent-sdk/observability.md): Exportez les traces, les métriques et les événements du SDK Agent vers votre backend d'observabilité en utilisant OpenTelemetry.
- [Listes de tâches](https://code.claude.com/docs/fr/agent-sdk/todo-tracking.md): Suivre et afficher les tâches à l'aide du SDK Claude Agent pour une gestion organisée des tâches

#### Déploiement

- [Héberger l'Agent SDK](https://code.claude.com/docs/fr/agent-sdk/hosting.md): Déployer l'Agent SDK en production : architecture de sous-processus, persistance des sessions, mise à l'échelle, observabilité et isolation multi-locataire pour Docker, Kubernetes et fournisseurs de sandbox.
- [Déployer des agents IA de manière sécurisée](https://code.claude.com/docs/fr/agent-sdk/secure-deployment.md): Un guide pour sécuriser les déploiements de Claude Code et du SDK Agent avec l'isolation, la gestion des identifiants et les contrôles réseau

#### Références SDK

- [Référence du SDK Agent - TypeScript](https://code.claude.com/docs/fr/agent-sdk/typescript.md): Référence API complète du SDK Agent TypeScript, incluant toutes les fonctions, types et interfaces.
- [API de session TypeScript SDK V2 (supprimée)](https://code.claude.com/docs/fr/agent-sdk/typescript-v2-preview.md): Référence pour l'API de session supprimée V2 du SDK Agent TypeScript, avec des modèles send/stream basés sur les sessions pour les conversations multi-tours.
- [Référence du SDK Agent - Python](https://code.claude.com/docs/fr/agent-sdk/python.md): Référence API complète du SDK Agent Python, incluant toutes les fonctions, types et classes.
- [Migrer vers Claude Agent SDK](https://code.claude.com/docs/fr/agent-sdk/migration-guide.md): Guide pour migrer les SDK TypeScript et Python de Claude Code vers Claude Agent SDK

### Nouveautés

#### Nouveautés

- [Quoi de neuf](https://code.claude.com/docs/fr/whats-new/index.md): Un digest hebdomadaire des fonctionnalités notables de Claude Code, avec des extraits de code, des démos et du contexte sur leur importance.
- [Semaine 28 · 6–10 juillet 2026](https://code.claude.com/docs/fr/whats-new/2026-w28.md): Parcourez des sites externes depuis le navigateur intégré de l'application de bureau, exécutez une vérification complète de la configuration avec /doctor, et découvrez les protections de transcription en mode automatique et les améliorations de la vue agent.
- [Semaine 27 · 29 juin – 3 juillet 2026](https://code.claude.com/docs/fr/whats-new/2026-w27.md): Claude Sonnet 5 devient le modèle par défaut, Claude dans Chrome atteint la disponibilité générale, les sous-agents s'exécutent en arrière-plan par défaut, Claude Desktop arrive sur Linux en bêta, et /radio se connecte à Claude FM.
- [Semaine 26 · 22–26 juin 2026](https://code.claude.com/docs/fr/whats-new/2026-w26.md): Authentifiez les serveurs MCP depuis votre shell avec claude mcp login, obtenez une réponse à la sortie des commandes du mode shell avec le préfixe !, et reprenez une conversation antérieure à /clear avec /rewind.
- [Semaine 25 · 15–19 juin 2026](https://code.claude.com/docs/fr/whats-new/2026-w25.md): Publiez une page en direct et partageable à partir de votre session avec Artifacts, faites correspondre les paramètres d'outils dans les règles de refus et de demande, et définissez n'importe quel paramètre à partir de l'invite avec /config.
- [Semaine 24 · 8–12 juin 2026](https://code.claude.com/docs/fr/whats-new/2026-w24.md): Déplacez une session vers un nouveau répertoire avec /cd, laissez les sous-agents créer leurs propres sous-agents, et dépannez une configuration cassée avec le mode sécurisé.
- [Semaine 23 · 1er–5 juin 2026](https://code.claude.com/docs/fr/whats-new/2026-w23.md): Exécutez le mode auto sur Amazon Bedrock, Google Cloud's Agent Platform et Microsoft Foundry, demandez une confirmation avant d'écrire des fichiers pouvant exécuter du code en mode acceptEdits, listez les plugins installés avec /plugin list, et exigez une plage de version approuvée pour les déploiem…
- [Semaine 22 · 25–29 mai 2026](https://code.claude.com/docs/fr/whats-new/2026-w22.md): Exécutez Claude Code sur Claude Opus 4.8, orchestrez des tâches volumineuses avec des workflows dynamiques, détectez les problèmes de sécurité avec le plugin security-guidance, et utilisez le mode rapide sur Opus 4.8 à un prix inférieur.
- [Semaine 21 · 18–22 mai 2026](https://code.claude.com/docs/fr/whats-new/2026-w21.md): Utilisez le mode auto sur le plan Pro et avec Sonnet 4.6, consultez les compétences, sous-agents et serveurs MCP qui limitent votre plan dans /usage, et examinez les différences avec la nouvelle commande /code-review.
- [Semaine 20 · 11–15 mai 2026](https://code.claude.com/docs/fr/whats-new/2026-w20.md): Gérez chaque session Claude Code depuis un seul écran avec la vue agent, maintenez Claude en travail vers un objectif jusqu'à ce qu'une condition soit remplie, et exécutez le mode rapide sur Opus 4.7 par défaut.
- [Semaine 19 · 4–8 mai 2026](https://code.claude.com/docs/fr/whats-new/2026-w19.md): Chargez les plugins à partir d'archives .zip et d'URL, recherchez l'historique des commandes dans tous les projets avec Ctrl+R, créez de nouvelles worktrees à partir de HEAD local ou de la branche par défaut distante, et bloquez les actions sans condition avec les règles de refus inconditionnels en…
- [Semaine 18 · 27 avril – 1er mai 2026](https://code.claude.com/docs/fr/whats-new/2026-w18.md): Claude Code sur Windows s'exécute sans Git Bash, claude auth login accepte un code OAuth collé lorsque le rappel du navigateur ne peut pas atteindre localhost, claude project purge nettoie l'état local par projet, et coller une URL de PR dans /resume trouve la session qui l'a créée.
- [Semaine 17 · 20–24 avril 2026](https://code.claude.com/docs/fr/whats-new/2026-w17.md): /ultrareview s'ouvre en aperçu de recherche, récapitulatifs de session automatiques lorsque vous revenez à un terminal, thèmes de couleurs personnalisés que vous pouvez créer et déployer dans les plugins, et une Claude Code redessinée sur le web.
- [Semaine 16 · 13–17 avril 2026](https://code.claude.com/docs/fr/whats-new/2026-w16.md): Claude Opus 4.7 avec le nouveau niveau d'effort xhigh, Routines sur Claude Code sur le web, notifications push mobiles qui vous signalent sur votre téléphone quand Claude a besoin de vous, une ventilation /usage qui montre ce qui limite votre utilisation, et les binaires natifs remplaçant le JavaScr…
- [Semaine 15 · 6–10 avril 2026](https://code.claude.com/docs/fr/whats-new/2026-w15.md): Ultraplan pour la planification cloud, l'outil Monitor avec /loop auto-cadencé, /team-onboarding pour packager votre configuration, et /autofix-pr depuis votre terminal.
- [Semaine 14 · 30 mars – 3 avril 2026](https://code.claude.com/docs/fr/whats-new/2026-w14.md): Computer use dans la CLI, leçons interactives intégrées au produit, rendu sans scintillement, remplacements de taille de résultat MCP par outil, et exécutables de plugin sur PATH.
- [Semaine 13 · 23–27 mars 2026](https://code.claude.com/docs/fr/whats-new/2026-w13.md): Mode auto pour les permissions sans intervention, utilisation d'ordinateur intégrée, correction automatique des PR dans le cloud, recherche de transcription et un outil PowerShell pour Windows.

### Ressources

#### Ressources

- [Aspects juridiques et conformité](https://code.claude.com/docs/fr/legal-and-compliance.md): Accords juridiques, certifications de conformité et informations de sécurité pour Claude Code.
