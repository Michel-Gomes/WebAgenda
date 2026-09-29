# WebAgenda

## Sistema Full Stack de Agendamento baseado em Microsserviços

O **WebAgenda** é uma aplicação Full Stack desenvolvida durante a formação Full Stack, utilizando **Angular, TypeScript, Java, Spring Boot, PostgreSQL, JWT e Docker**.

O projeto foi estruturado utilizando uma arquitetura baseada em microsserviços, separando o frontend, a autenticação e o gerenciamento de agendamentos em aplicações independentes.

## Arquitetura

```text
                         ┌─────────────────────┐
                         │      WebAgenda       │
                         │  Angular + TypeScript│
                         │       :4200          │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
        ┌─────────────────────┐       ┌─────────────────────┐
        │  ApiAutenticacao    │       │      ApiAgenda      │
        │ Java + Spring Boot   │       │ Java + Spring Boot  │
        │       :8088          │       │       :8081         │
        └──────────┬──────────┘       └──────────┬──────────┘
                   │                             │
                   ▼                             ▼
          ┌────────────────┐            ┌────────────────┐
          │  PostgreSQL    │            │  PostgreSQL    │
          │      :5432     │            │      :5432     │
          └────────────────┘            └────────────────┘
```

## Componentes do projeto

| Projeto             | Tecnologia           | Responsabilidade                         |
| ------------------- | -------------------- | ---------------------------------------- |
| **WebAgenda**       | Angular + TypeScript | Interface web                            |
| **ApiAutenticacao** | Java + Spring Boot   | Autenticação e gerenciamento de usuários |
| **ApiAgenda**       | Java + Spring Boot   | Gerenciamento de agendamentos            |

## Tecnologias utilizadas

### Frontend

* Angular 20
* TypeScript 5.8
* RxJS
* Bootstrap 5.3
* Bootstrap Icons
* Highcharts
* Angular Router
* Angular Forms
* Jasmine
* Karma

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* PostgreSQL 16
* JWT
* Bean Validation
* Lombok
* OpenAPI / Swagger
* Maven
* JUnit

### Infraestrutura

* Docker
* Docker Compose
* Containers independentes
* Redes Docker
* Volumes Docker

## Funcionalidades

O projeto foi desenvolvido para trabalhar com autenticação e gerenciamento de agendamentos.

Entre os recursos implementados estão:

* Cadastro de usuários
* Login
* Autenticação utilizando JWT
* Recuperação de senha
* Gerenciamento de agendamentos
* Comunicação entre frontend e APIs REST
* Persistência de dados em PostgreSQL
* Documentação das APIs com Swagger/OpenAPI
* Interface com modo claro e escuro
* Visualização de informações através de gráficos

## Fluxo da aplicação

O fluxo principal da aplicação funciona da seguinte maneira:

```text
Usuário
   │
   ▼
WebAgenda
Angular + TypeScript
   │
   ├──────────────► ApiAutenticacao
   │                    │
   │                    ▼
   │                PostgreSQL
   │
   └──────────────► ApiAgenda
                        │
                        ▼
                    PostgreSQL
```

O frontend concentra a interação com o usuário e realiza as requisições HTTP para os microsserviços responsáveis pelas funcionalidades do sistema.

## Autenticação

A autenticação utiliza **JWT (JSON Web Token)**.

O processo permite que o usuário realize o login através do frontend e utilize o token de autenticação para acessar recursos protegidos da aplicação.

A implementação do JWT está presente no microsserviço `ApiAutenticacao`.

## Banco de dados

Os microsserviços utilizam **PostgreSQL 16** para persistência dos dados.

No ambiente Docker, os bancos são executados em containers independentes, utilizando volumes para persistência.

## Docker

Os projetos backend possuem configuração para execução utilizando Docker.

### ApiAutenticacao

```text
API:        8088
PostgreSQL: 5435 → 5432
```

Container da API:

```text
springboot-autenticacaoapi
```

Container do PostgreSQL:

```text
postgres-autenticacaoapi
```

### ApiAgenda

```text
API:        8081
PostgreSQL: 5432
```

Container da API:

```text
springboot-agendaapi
```

Container do PostgreSQL:

```text
agenda_postgres
```

## Repositórios

### Frontend

**WebAgenda**

Aplicação frontend desenvolvida com Angular e TypeScript.

[Ver repositório](https://github.com/Michel-Gomes/WebAgenda)

### Autenticação

**ApiAutenticacao**

Microsserviço responsável pela autenticação e gerenciamento de usuários.

[Ver repositório](https://github.com/Michel-Gomes/ApiAutenticacao)

### Agendamentos

**ApiAgenda**

Microsserviço responsável pelo gerenciamento de agendamentos.

[Ver repositório](https://github.com/Michel-Gomes/ApiAgenda)

## Como executar

Para executar o projeto completo localmente, é necessário iniciar os três componentes:

### 1. ApiAutenticacao

```bash
git clone https://github.com/Michel-Gomes/ApiAutenticacao.git

cd ApiAutenticacao

docker compose up --build
```

API:

```text
http://localhost:8088
```

### 2. ApiAgenda

```bash
git clone https://github.com/Michel-Gomes/ApiAgenda.git

cd ApiAgenda

docker compose up --build
```

API:

```text
http://localhost:8081
```

### 3. WebAgenda

```bash
git clone https://github.com/Michel-Gomes/WebAgenda.git

cd WebAgenda

npm install

npm start
```

Frontend:

```text
http://localhost:4200
```

## Documentação das APIs

As APIs backend possuem documentação utilizando **OpenAPI / Swagger**.

### ApiAutenticacao

```text
http://localhost:8088/swagger-ui/index.html
```

### ApiAgenda

```text
http://localhost:8081/swagger-ui/index.html
```

## Objetivos técnicos

O projeto foi desenvolvido com foco no aprendizado e aplicação prática de conceitos como:

* Desenvolvimento Full Stack
* APIs REST
* Arquitetura baseada em microsserviços
* Desenvolvimento backend com Java e Spring Boot
* Desenvolvimento frontend com Angular
* Autenticação utilizando JWT
* Persistência de dados com PostgreSQL
* JPA e Hibernate
* Validação de dados
* Documentação de APIs
* Docker e Docker Compose
* Integração entre frontend e backend
* Organização e separação de responsabilidades
* Testes automatizados

## Autor

**Michel Gomes**

Analista de Sistemas | Desenvolvedor Java

[GitHub](https://github.com/Michel-Gomes)
