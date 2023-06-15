<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Introduction

This RESTFUL API is using [Nest](https://github.com/nestjs/nest) framework and [MySQL](https://www.mysql.com) database to display F1 racing results.

### Features
- List of Races
- List of Drivers
- Race Results
- Driver Standings

## Prerequisites

- Node v18.10.0
- Git bash
- MySQL

## Installation & Configuration

To get a local copy up and running, follow these simple steps.

### Get files

Go to the directory where you want to copy the project files and clone it by copying this text into your command prompt/terminal:

```
  git clone git@github.com:hungibninc/formula1-api.git
```

Switch to dev branch

```
  git checkout dev
```

### Install Dependencies

```bash
$ yarn
```

### Config database

- Create a MySQL database for this api
- Open ormconfig.js file in the root directory and update the following information that corresponds to your database

```bash
database: 'change_to_your_database_name',
username: 'change_to_your_database_username',
password: 'change_to_your_database_password',
```

- Open command prompt/terminal and go to the root directory then run this command for migration database:

```bash
yarn typeorm migration:run -- -d ./data-source.ts
```

- Import sample data from sample-data.sql file in the root directory, it contains Race Results and Driver Standings for 2 years 2022 and 2023

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Eexecution

### Tools for implementing the specification

While the application is running, open your browser and navigate to 

```
http://localhost:3000/api
```

You should see OpenAPI specification and tools for implementing the specification

### Or get the content from the following APIs

```
- List of Races: http://localhost:3000/?year=2022
- List of Drivers: http://localhost:3000/driver?year=2022
- Race Results: http://localhost:3000/standings?year=2022
- Driver Standings: http://localhost:3000/standings/ranking?year=2022
```