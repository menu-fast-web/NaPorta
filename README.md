# NaPorta App

<img width="1280" height="698" alt="image" src="https://github.com/user-attachments/assets/4b1a54fe-4f47-49f6-94ef-84d742711be3" />

Software para gerenciamento de solicitação de serviço de quarto. O cliente realiza a leitura de um QRCode que identifica o quarto, é direcionado ao sistema e realiza a solicitação de sua refeição, podendo acompanhar o progresso até a entrega.

> 🚧 **Status:** Em desenvolvimento

---

## Estrutura do Repositório

- **`/api`** — Backend Node.js (Fastify)
- **`/web`** — Frontend Angular

## Stack

- **Backend:** Node.js, Fastify, Prisma ORM v7, PostgreSQL, Docker, Zod, bcryptjs
- **Frontend:** Angular 16, Tailwind CSS, Angular Material
- **Tooling:** TypeScript, ESLint, Prettier

---

## Checklist de Integração — MVP

### Infraestrutura
- [ ] Criar service `ApiService` no Angular com `HttpClient` configurado para a URL base da API
- [ ] Adicionar `HttpClientModule` no `app.module.ts`
- [ ] Configurar variável de ambiente com a URL da API (`environment.ts`)

### Autenticação Admin
- [ ] Criar endpoint `POST /auth` na API (email + senha → retorna token JWT)
- [ ] Implementar login no `SignInComponent` consumindo `POST /auth`
- [ ] Salvar token no `localStorage`
- [ ] Criar `AuthGuard` para proteger rotas do admin
- [ ] Implementar logout no header admin limpando o token

### Cardápio (cliente)
- [ ] Criar `MenuService` consumindo `GET /menu`
- [ ] Substituir dados mockados do `MenuComponent` pela listagem real da API
- [ ] Exibir itens por categoria com filtro

### Cardápio (admin)
- [ ] Listar itens consumindo `GET /menu` no `MenuItemsComponent`
- [ ] Ativar/desativar item consumindo `PATCH /menu/:id` com `{ available: boolean }`
- [ ] Deletar item (adicionar endpoint `DELETE /menu/:id` na API)
- [ ] Criar formulário de novo item consumindo `POST /menu`

### Pedidos (cliente)
- [ ] Criar `CartService` para gerenciar itens do carrinho localmente
- [ ] Criar pedido consumindo `POST /orders` com `guest_id` e itens
- [ ] Listar pedidos do hóspede consumindo `GET /orders/:guest_id`
- [ ] Exibir status do pedido em tempo real no `OrderStatusComponent`

### Pedidos (admin)
- [ ] Listar todos os pedidos (adicionar endpoint `GET /orders` na API)
- [ ] Atualizar status consumindo `PATCH /orders/:id/status`

### Hóspede / QRCode
- [ ] Identificar hóspede via token na URL consumindo `GET /guests/:token`
- [ ] Salvar `guest_id` no `localStorage` ao acessar via QRCode
- [ ] Redirecionar para `/menu` após identificação

---

## Regras de Negócio

- [ ] Hóspede não pode ter mais de um pedido ativo (pending/preparing) simultaneamente
- [ ] Senha do usuário armazenada em hash (bcryptjs)
- [ ] Usuário não pode se cadastrar com e-mail duplicado

---

## Comandos Úteis

### API
```bash
npm run dev       # inicia em modo desenvolvimento
npx prisma migrate dev  # roda migrations
npx prisma studio       # interface visual do banco
```

### Web
```bash
pnpm run start    # inicia o servidor de desenvolvimento
ng g c pages/nome # gera novo componente
ng generate environments # gera a pasta "environments" com dois arquivos: environment.ts e environment.development.ts
ng generate service services/api # criar arquivo service para lidar com as requisições da API, podendo ser reutilizado entre os componentes
npm install @fastify/jwt
```
