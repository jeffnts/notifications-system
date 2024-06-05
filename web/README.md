![Notification Icon](/web/public/logo.svg)

A **Notifications System** é uma aplicação de gerenciamento de notificações que permite criar, editar e gerenciar aplicativos que irão enviar notificações. A aplicação suporta notificações do tipo Web Push, E-mail e SMS.

## Descrição

O sistema permite:

- Criar, editar e gerenciar aplicativos que enviam notificações.
- Disparar notificações através dos canais Web Push, E-mail e SMS.

## Rotas da Aplicação

A aplicação é composta pelas seguintes rotas:

- **/login**: Página de login.
- **/home**: Página Inicial.
- **/applications**: Página com as opções de criar ou listar as notificações.
- **/applications/list**: Página de listagem das aplicações.
- **/application/list/:id/web-push**: Página da configuração do web push de uma aplicação específica.
- **/application/list/:id/sms**: Página da configuração do SMS de uma aplicação específica.
- **/application/list/:id/email**: Página da configuração do e-mail de uma aplicação específica.
- **/application/create**: Página de criação das aplicações.
- **/notifications**: Página com as opções de enviar notificação ou ver o histórico das notificações.
- **/notifications/send**: Página com as opções de enviar notificações que podem ser pelos canais: Web Push, E-mail e SMS.
- **/notifications/historic**: Página com o histórico de todas as notificações criadas.

## Variáveis de Ambiente

Para configurar corretamente a aplicação, você precisará definir algumas variáveis de ambiente. Estas variáveis são necessárias para autenticação e para a conexão com a API. Abaixo estão as descrições das variáveis de ambiente utilizadas:

### SECRET

- **Descrição**: Chave secreta utilizada para várias operações criptográficas na aplicação.
- **Valor Exemplo**: `dhsidashfojhda`

Esta chave é usada para assegurar a integridade e segurança de certas operações internas da aplicação.

### NEXTAUTH_SECRET

- **Descrição**: Chave secreta utilizada pelo NextAuth.js para assinar e criptografar tokens.
- **Valor Exemplo**: `dosdjsnfjodhfr`

Esta chave é crucial para a segurança das operações de autenticação realizadas pelo NextAuth.js.

### API_URL

- **Descrição**: URL base para a API.
- **Valor Exemplo**: `http://localhost:5000`

Esta URL é usada para fazer requisições à API interna da aplicação.

### NEXT_PUBLIC_API_URL

- **Descrição**: URL base para a API, exposta para o front-end.
- **Valor Exemplo**: `http://localhost:5000`

Esta URL é usada pelo lado cliente (front-end) da aplicação para fazer requisições à API. Deve ser igual à `API_URL` e é prefixada com `NEXT_PUBLIC_` para ser acessível no lado do cliente.

### Configuração do arquivo `.env`

Abaixo está um exemplo de como o arquivo `.env` deve ser configurado:

```plaintext
SECRET=dhsidashfojhda
NEXTAUTH_SECRET=dosdjsnfjodhfr
API_URL=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000


## Rodando a Aplicação

### Usando npm

1. Instale as dependências:

   ```bash
   npm install


2. Rode a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev

3. Rode a aplicação em modo de desenvolvimento:
   ```bash
   npm run build

4. Para iniciar a aplicação em modo de produção:
   ```bash
   npm start

### Usando Docker

1. Construir e iniciar os containers:

   ```bash
   docker compose up


