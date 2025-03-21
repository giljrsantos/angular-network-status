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
│── src/
│   ├── app/
│   │   ├── components/
|   |   |   |   |─── home/
│   │   │   │   |   |  |─ home.component.ts
│   │   │   │   |   |  |─ home.component.ts.spec.ts
|   |   |   |   |─── search-cars/
│   │   │   │   |   |   | |───── search-cars.component.ts
│   │   │   │   |   |   | |───── search-cars.component.spec.ts
|   |   |   |   |─── add-car/
│   │   │   │   |   |   | |───── add-car.component.ts
│   │   │   │   |   |   | |───── add-car.component.spec.ts
|   |   |   |   |─── update-car/
│   │   │   │   |   |   | |───── update-car.component.ts
│   │   │   │   |   |   | |───── update-car.component.spec.ts
|   |   |   |   |─── delete-car/
│   │   │   │   |   |   | |───── delete-car.component.ts
│   │   │   │   |   |   | |───── delete-car.component.spec.ts
│   │   ├── corre/
│   │   │   ├── services/
|   |   |   |   |────── add-car/
│   │   │   │   |   |   | |──── add-car.service.ts
│   │   │   │   |   |   | |──── add-car.service.spec.ts
|   |   |   |   |────── search-cars/
│   │   │   │   |   |   | |──────── search-cars.service.ts
│   │   │   │   |   |   | |──────── search-cars.service.spec.ts
|   |   |   |   |────── update-car/
│   │   │   │   |   |   | |─────── update-car.service.ts
│   │   │   │   |   |   | |─────── update-car.service.spec.ts
│   │   ├── shared/
│   │   │   ├── interface/
│   │   │   |   | |────── i-add-car-request.ts
│   │   │   |   | |────── i-search-car-request.ts
│   │   │   |   | |────── i-search-car-response.ts
│   │   │   |   | |────── i-update-car-response.ts
│   │   │   ├── util/
|   |   |   |   |──function/
│   │   │   │   |  | | |─── gerarDataAtual.ts
│   │   │   │   |  | | |─── gerarDataAtual.spec.ts
|   |   |   |   |──pipe/
│   │   │   │   |  |─── formata-placa.pipe.ts
│   │   │   │   |  |─── formata-placa.pipe.spec.ts
│   ├── assets/
│   │   ├── img/
│   │   ├── mock/
│   │   │   │ ├─ m-add-car.mock.ts
│   │   │   │ ├─ m-cars-request.mock.ts
│   │   │   │ ├─ m-cars-response.mock.ts
│   │   │   │ ├─ m-update-car.mock.ts
│   ├── environments/
│── jest.config.js
│── package.json
│── README.md

```

## 📌 Contribuições

Fique à vontade para abrir issues e pull requests caso tenha sugestões ou melhorias para o projeto!



<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>

