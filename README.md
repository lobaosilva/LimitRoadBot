# Projeto Limit Road Bot (JS)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/)
[![Node JS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://github.com/) 
[![Github](http://img.shields.io/badge/github-%231877F2.svg?&style=for-the-badge&logo=github&logoColor=white&color=black)](https://github.com/)
[![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://github.com/)
## 1. Configuração Inicial
  - ### 1. Configuração do Ambiente de Desenvolvimento:
    - - [X] ~~Iniciar um novo projeto Node.js~~
    - - [X] ~~Instalar as dependências necessárias (Discord.js, Node Fetch, SQLite3)~~
  - ### 2. Criação do Bot no Discord Developer Por
    - - [X] ~~Criar uma nova aplicação e um bot para ela no Discord Developer Portal~~
    - - [X] ~~Obter o token do bot para autenticação~~
## 2. Estrutura do Bot
  - ### 1. Configuração Inicial do Bot
    - - [X] ~~Incializar o cliente do Discord~~
    - - [X] ~~Autenticar o bot com o token obtido~~
    - - [X] ~~Configurar eventos de login e mensagem~~
## 3. Funcionalidades Principais
  - ### 1. Atualização Automática de Eventos da LFM:
    - - [ ] Criar função para buscar eventos da LFM a partir de sua API
    - - [ ] Configurar intervalo para atualização automática dos eventos em um canal específico do Discord
  - ### 2. Atualização Automática do Ranking de Pilotos:
    - - [ ] Criar função para obter o ranking de pilotos da LFM via API
    - - [ ] Configurar intervalo para atualização automática do ranking em um canal dedicado do Discord
  - ### 3. Comando para Consultar Ranking Pessoal:
    - - [ ] Implementar comando `!meu_ranking` para os pilotos consutarem seu próprio ranking no servidor
## 4. Segurança e Boas Práticas
  - ### 1. Gerenciamento de Informações Sensíveis:
    - - [ ] Utilizar variáveis de ambiente ou arquivo `.env` para gerenciar o token do bot e outras informações sensíveis
    - - [ ] Adicionar arquivo `.env` ao `.gitignore` para não ser versionado no GitHub
  - ### 2. Proteção do Banco de Dados:
    - - [ ] Utilizar parâmetros nas consultas SQL para evitar injeções de SQL
    - - [ ] Limitar as permissões do usuário do banco de dados utilizado pelo bot
  - ### 3. Validações de Dados de Entrada:
    - - [ ] Validar e sanitizar dados de entrada para prevenir ataques de scripting e outras vulnerabilidades
## 5. Revisão de Código e Colaboração
  - ### 1. Revisão de Código:
    - - [ ] Realizar revisões de código para identificar vulnerabilidades e melhorias
    - - [ ] Seguir boas práticas de programção e documentação
  - ### 2. Colaboração Segura:
    - - [ ] Utilizar mecanismos seguros para compartilhar informações sensíveis entre a equipe
    - - [ ] Evitar compartilhar chaves de acesso diretamente, preferindo métodos seguros de compartilhamento
