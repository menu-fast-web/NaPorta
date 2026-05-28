# NaPorta App

<img width="1280" height="698" alt="image" src="https://github.com/user-attachments/assets/4b1a54fe-4f47-49f6-94ef-84d742711be3" />

- Software para gerenciamento de solicitação de serviço de quarto, seleção de refeição através de um cardápio online. O cliente realizar a leitura de um QRCode que identifica o quarto, é direcionado ao sistema e realiza a solicitação de sua refeição, podendo acompanhar o progresso até a entrega no quarto.

> 🚧 **Status:** Em desenvolvimento

## Estrutura do Repositório

- **API**: Armazena o código backend da aplicação;
- **WEB**: Armazena a interface mobile do cliente.

## Stack Ferramental

- **Backend:** Node.js (Fastify), PrismaORM v7, PostgreSQL, Docker, Zod, tsup, tsx.
- **Frontend:** Angular.
- **Tooling:** TypeScript, ESLint, Prettier.

## Documentação de Negócio

### Requisitos Funcionais (RF)

- [] O administrador deve poder cadastrar usuários
- [] O administrador deve poder vincular usuário ao quarto

### Requisitos Não-Funcionais (RNF)

- [] A senha do usuário precisa estar em formato hash;

### Regras de Negócio (RN)

- [] O usuário não deve poder se cadastrar com e-mail duplicado;

## Fluxograma de Desenvolvimento

## Estrutura do Banco de Dados

## Comandos para Iniciar o Projeto

### NodeJS

### AngularJS
- ng generate component pages/admin-login
  [serve para criar páginas no projeto, já realiza o registro automaticamente no app.module.ts]

- ng g c pages/admin-login
  [serve para criar a página, mas é um comando mais curto em compensação com o anterior]
