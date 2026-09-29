# WebAgenda

Aplicação web para **gerenciamento de agendamentos**, desenvolvida com **Angular 20** e **TypeScript**, como parte de uma aplicação Full Stack baseada em microsserviços.

O projeto integra o ecossistema **WebAgenda**, juntamente com os microsserviços `ApiAgenda` e `ApiAutenticacao`.

## Tecnologias

* Angular 20
* TypeScript 5.8
* RxJS
* Bootstrap 5.3
* Bootstrap Icons
* Highcharts 12
* Angular Highcharts
* Angular Router
* Angular Forms
* HTML5
* CSS
* Node.js
* NPM
* Jasmine
* Karma

## Arquitetura

O `WebAgenda` atua como frontend da aplicação, realizando a comunicação com os microsserviços responsáveis pela autenticação e pelo gerenciamento dos agendamentos.

```text
                         WebAgenda
                   Angular 20 + TypeScript
                           |
              +------------+------------+
              |                         |
        ApiAutenticacao             ApiAgenda
             :8088                    :8081
              |                         |
         PostgreSQL                PostgreSQL
```

## Funcionalidades

A aplicação frontend foi desenvolvida para consumir as APIs REST do sistema e disponibilizar uma interface web para os usuários.

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
* Componentes e formulários utilizando Angular
* Visualização de informações através de gráficos

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

O frontend utiliza essas APIs para realizar operações relacionadas à autenticação, usuários e agendamentos.

## Interface

A interface utiliza **Bootstrap 5.3** para estrutura e componentes visuais, juntamente com **Bootstrap Icons**.

O projeto também utiliza **Highcharts** através do `angular-highcharts` para criação e apresentação de gráficos.

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

A aplicação utiliza componentes, formulários, rotas e recursos do Angular para organizar a interface e a comunicação com as APIs.

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
npm start
```

Ou:

```bash
ng serve
```

Após iniciar a aplicação, acesse:

```text
http://localhost:4200
```

## Build

Para gerar uma versão de produção:

```bash
npm run build
```

Ou:

```bash
ng build
```

## Testes

O projeto possui configuração para testes utilizando **Jasmine** e **Karma**.

Para executar os testes:

```bash
npm test
```

Ou:

```bash
ng test
```

## Projeto completo

O `WebAgenda` faz parte de um projeto Full Stack baseado em microsserviços:

| Projeto             | Tecnologia           | Responsabilidade              |
| ------------------- | -------------------- | ----------------------------- |
| **WebAgenda**       | Angular + TypeScript | Interface web                 |
| **ApiAgenda**       | Java + Spring Boot   | Gerenciamento de agendamentos |
| **ApiAutenticacao** | Java + Spring Boot   | Autenticação e usuários       |

### Repositórios

* **WebAgenda** — frontend da aplicação
* **ApiAgenda** — microsserviço de agendamentos
* **ApiAutenticacao** — microsserviço de autenticação

## Objetivo do projeto

O projeto foi desenvolvido durante a formação Full Stack com o objetivo de praticar o desenvolvimento de aplicações web e a integração entre frontend e backend utilizando:

* Angular
* TypeScript
* APIs REST
* Java
* Spring Boot
* PostgreSQL
* JWT
* Microsserviços
* Bootstrap
* Highcharts
* Testes automatizados

## Autor

**Michel Gomes**
Desenvolvedor Java
