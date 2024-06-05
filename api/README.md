![Notification Icon](/web/public/logo.svg)

A **Notifications System** é uma aplicação de gerenciamento de notificações que permite criar, editar e gerenciar aplicativos que irão enviar notificações. A aplicação suporta notificações do tipo Web Push, E-mail e SMS.

## Descrição

O sistema permite:

- Criar, editar e gerenciar aplicativos que enviam notificações.
- Disparar notificações através dos canais Web Push, E-mail e SMS.

## Variáveis de Ambiente

Para configurar corretamente a aplicação, você precisará definir algumas variáveis de ambiente. Estas variáveis são necessárias para a conexão com o banco de dados e para a integração com o Firebase. Abaixo estão as descrições das variáveis de ambiente utilizadas:

### DATABASE_URL

- **Descrição**: URL de conexão para o banco de dados MongoDB.
- **Valor Exemplo**: `mongodb+srv://admin:AavZ6drgNy0HVeEi@personal.sl0gv.mongodb.net/notifications_system`

Esta variável é usada pelo Prisma para conectar-se ao banco de dados MongoDB onde os dados da aplicação são armazenados.

### FIREBASE_API_KEY

- **Descrição**: Chave de API fornecida pelo Firebase.
- **Valor Exemplo**: `AIzaSyCdlaU8wgGa8I25RVpL-IeglWPh-CSl050`

Esta chave é usada para autenticar solicitações ao Firebase.

### FIREBASE_AUTH_DOMAIN

- **Descrição**: Domínio de autenticação do Firebase.
- **Valor Exemplo**: `notifications-system-418ae.firebaseapp.com`

Este domínio é usado para autenticação de usuários através do Firebase.

### FIREBASE_PROJECT_ID

- **Descrição**: ID do projeto no Firebase.
- **Valor Exemplo**: `notifications-system-418ae`

Este é o identificador do seu projeto no Firebase.

### FIREBASE_STORAGE_BUCKET

- **Descrição**: Bucket de armazenamento do Firebase.
- **Valor Exemplo**: `notifications-system-418ae.appspot.com`

Este bucket é usado para armazenar arquivos no Firebase Storage.

### FIREBASE_MESSAGING_SENDER_ID

- **Descrição**: ID do remetente do Firebase Cloud Messaging (FCM).
- **Valor Exemplo**: `73349998969`

Este ID é usado para enviar mensagens através do FCM.

### FIREBASE_APP_ID

- **Descrição**: ID da aplicação no Firebase.
- **Valor Exemplo**: `1:73349998969:web:e12afdbdd2cdbad931a7a8`

Este ID é usado para identificar sua aplicação no Firebase.

### Configuração do arquivo `.env`

Abaixo está um exemplo de como o arquivo `.env` deve ser configurado:

```plaintext
DATABASE_URL="mongodb+srv://admin:AavZ6drgNy0HVeEi@personal.sl0gv.mongodb.net/notifications_system"
FIREBASE_API_KEY=AIzaSyCdlaU8wgGa8I25RVpL-IeglWPh-CSl050
FIREBASE_AUTH_DOMAIN=notifications-system-418ae.firebaseapp.com
FIREBASE_PROJECT_ID=notifications-system-418ae
FIREBASE_STORAGE_BUCKET=notifications-system-418ae.appspot.com
FIREBASE_MESSAGING_SENDER_ID=73349998969
FIREBASE_APP_ID=1:73349998969:web:e12afdbdd2cdbad931a7a8


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


