# Angular Network Status

## 📌 Sobre o Projeto

Este projeto tem como objetivo verificar se o dispositivo está conectado à internet. Caso não haja conexão, uma mensagem será exibida informando que o usuário está offline. Se a internet estiver funcionando corretamente, uma mensagem indicará que o usuário está online.

## 🚀 Tecnologias Utilizadas
- Angular 17 - Framework principal para o desenvolvimento da aplicação.
- Node.js 18 - Ambiente de execução para o Angular CLI.
- TypeScript - Linguagem utilizada para desenvolvimento.



## 🛠️ Configuração e Instalação
### 1. Clone este repositório:
```sh
git clone https://github.com/giljrsantos/angular-network-status.git
cd angular-network-status
```

### 2. Instale as dependências:
```sh
npm install
```

### 2. Execute os testes:
```sh
npm run start
```

## 🧪 Implementação

Foi criada uma service utilizando BehaviorSubject, recebendo o valor inicial de navigator.onLine.

Dentro do constructor, foram adicionados os event listeners:

    window.addEventListener('online', ...)
    window.addEventListener('offline', ...)

Esses eventos detectam automaticamente quando o usuário fica online ou offline, atualizando o status da conexão em tempo real.

### Conectado à Internet  
![Online](./src/assets/img/online.png)  

### Desconectado da Internet  
![Offline](./src/assets/img/offline.png)  


## 🏗️ Estrutura do Projeto

```graphql
angular-network-status/
├── .angulardoc.json
├── .editorconfig
├── .gitignore
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── src
    ├── app
    │   ├── app.component.html
    │   ├── app.component.scss
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   ├── app.config.ts
    │   ├── app.routes.ts
    │   ├── components
    │   │   └── network-status
    │   │   │   ├── network-status.component.html
    │   │   │   ├── network-status.component.scss
    │   │   │   ├── network-status.component.spec.ts
    │   │   │   └── network-status.component.ts
    │   └── core
    │   │   └── service
    │   │       ├── network-status.service.spec.ts
    │   │       └── network-status.service.ts
    ├── assets
    │   ├── .gitkeep
    │   └── img
    │   │   ├── offline.jpg
    │   │   ├── offline.png
    │   │   ├── offline2.jpg
    │   │   ├── online.jpg
    │   │   └── online.png
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```

## 📌 Contribuições

Fique à vontade para abrir issues e pull requests caso tenha sugestões ou melhorias para o projeto!



<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>

