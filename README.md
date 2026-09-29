# WebAgenda

Aplicação web para **gerenciamento de agendamentos**, desenvolvida com **Angular** e **TypeScript**, como parte de uma aplicação baseada em microsserviços.

O projeto faz parte do ecossistema **WebAgenda**, desenvolvido durante a formação Full Stack, juntamente com os microsserviços `ApiAgenda` e `ApiAutenticacao`.

## Tecnologias

* Angular 20
* TypeScript
* HTML5
* CSS
* Angular CLI
* Node.js
* NPM
* Consumo de APIs REST
* Integração com microsserviços

## Arquitetura

O `WebAgenda` atua como frontend da aplicação, realizando a comunicação com os microsserviços responsáveis pela autenticação e pelo gerenciamento dos agendamentos.

```text
                         WebAgenda
                   Angular + TypeScript
                           |
              +------------+------------+
              |                         |
        ApiAutenticacao             ApiAgenda
             :8088                    :8081
              |                         |
         PostgreSQL                PostgreSQL
```

## Funcionalidades

A aplicação frontend foi desenvolvida para consumir as APIs do sistema e disponibilizar uma interface web para o usuário.

Entre os recursos trabalhados no projeto estão:

* Autenticação de usuários
* Login
* Criação de usuário
* Recuperação de senha
* Gerenciamento de agendamentos
* Integração com APIs REST
* Autenticação utilizando JWT
* Interface com modo claro e escuro
* Comunicação com microsserviços

## Integração com as APIs

O frontend realiza requisições HTTP para os microsserviços do projeto.

### ApiAutenticacao

Responsável pelos recursos relacionados à autenticação e gerenciamento de usuários.

```text
http://localhost:8088
```

### ApiAgenda

Responsável pelo gerenciamento dos agendamentos.

```text
http://localhost:8081
```

O frontend utiliza essas APIs para realizar operações de autenticação, usuários e agendamentos.

## Estrutura do projeto

O projeto segue a estrutura padrão de uma aplicação Angular.

```text
WebAgenda
├── public
├── src
│   ├── app
│   ├── assets
│   └── ...
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

A aplicação utiliza a organização de componentes e recursos do Angular para separar as responsabilidades da interface e da comunicação com as APIs.

## Executando o projeto

### Pré-requisitos

* Node.js
* NPM
* Angular CLI
* Git

### Clonar o repositório

```bash
git clone https://github.com/Michel-Gomes/WebAgenda.git
```

Acesse o diretório:

```bash
cd WebAgenda
```

### Instalar as dependências

```bash
npm install
```

### Executar a aplicação

```bash
ng serve
```

Ou:

```bash
npm start
```

Após iniciar a aplicação, acesse:

```text
http://localhost:4200
```

## Build

Para gerar uma versão de produção:

```bash
ng build
```

Os arquivos gerados estarão no diretório de distribuição configurado pelo Angular.

## Projeto completo

O `WebAgenda` faz parte de um projeto Full Stack baseado em microsserviços:

| Projeto             | Tecnologia           | Responsabilidade              |
| ------------------- | -------------------- | ----------------------------- |
| **WebAgenda**       | Angular + TypeScript | Interface web                 |
| **ApiAgenda**       | Java + Spring Boot   | Gerenciamento de agendamentos |
| **ApiAutenticacao** | Java + Spring Boot   | Autenticação e usuários       |

### Repositórios

* **WebAgenda** — frontend
* **ApiAgenda** — microsserviço de agendamentos
* **ApiAutenticacao** — microsserviço de autenticação

## Objetivo do projeto

O projeto foi desenvolvido com o objetivo de praticar o desenvolvimento de aplicações Full Stack e a integração entre frontend e backend utilizando:

* Angular
* TypeScript
* APIs REST
* Java
* Spring Boot
* PostgreSQL
* JWT
* Microsserviços
* Docker
* Integração entre aplicações

## Autor

**Michel Gomes**
