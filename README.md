# Nodevader

[![CodeFactor](https://www.codefactor.io/repository/github/stanleygomes/nodevader/badge)](https://www.codefactor.io/repository/github/stanleygomes/nodevader)
![Lint and test](https://github.com/stanleygomes/nodevader/workflows/Lint%20and%20test/badge.svg)

An awesome Node.js boilerplate. Come to the node side 🌑

The main goal of **Nodevader** is to set patterns to be easily implemented on Nodejs projects. We want to make easy to quick start a Nodejs ambient with the basic resources every project could have. Check out the patterns we defined this document bellow.

<p  align="center" style="padding:15px 0;">
	<img src="https://i.imgur.com/z9qKPnW.png" width="400px" />
  <br />
  Icon by <a href="https://dribbble.com/creativeflip" target="_blank">Filipe Carvalho</a>
</p>

*******
Table of contents

 0. [Requirements](#requirements)
 1. [How to get Started](#startup)
 2. [Gitflow recommendations](#gitflow)
 3. [Patterns and libs](#patterns)
 4. [Samples and tutorials of use](#tutorials)
 5. [Project structure](#projetcstructure)
 6. [Licence](#license)
*******

<div id='requirements'/>

## :pencil: Requirements

This boilerplate supports Node.js from version v12.x

<div id='startup'/>

## :rocket: Startup

Step by step to get this up and running

### Clone repo and go to project folder

```
git clone https://github.com/stanleygomes/nodevader.git && cd nodevader
```

### Install dependencies

```sh
npm install
```

### Start server

Via express server

```sh
npm run dev
```

### Start enviroment

Copy enviroment variables template

```sh
cp .env.template .env
```

Via docker-compose (start database, run migrations and start server)

```sh
docker-compose up
```

To test it on the browser, simply go to: `http://localhost:3000/welcome`

<div id='gitflow'/>

## :trident: Git flow

To file a new a feature

- create a branch from `master` branch. Use the pattern: `feature/description`
- file a pull request on `master` branch
- since your PR is aproved, it will be merged to `master` branch
- in a moment in time we'll create a release, using the pattern: `release/vX.X.X`

<div id='patterns'/>

## :heavy_check_mark: Patterns

These are some of patterns definitions to help us to keep a default arquitecture.

- Package manager: [npm](https://medium.com/@vincentnewkirk/npm-vs-yarn-2019-e88757b17038), sure
- Node version: [v12.x](https://nodejs.org/ca/blog/release/v12.14.1)
- Node Framework: [Express](https://expressjs.com) framework
- Node server: [Nodemon](https://www.npmjs.com/package/nodemon) and [PM2](https://pm2.keymetrics.io/)
- Linter: eslint [standard](https://standardjs.com) pattern
- Database: Use [knex](http://knexjs.org) query builder and some utils methods on utils/database.js (mysql and postgres support)
- Migrations: Run on a container described in docker-compose file: [boxfuse/flyway](https://hub.docker.com/r/boxfuse/flyway/dockerfile) image
- Template transpiler: [Mustache](https://mustache.github.io) templates
- i18n: take a look [here](https://www.npmjs.com/package/i18n)
- Date and time: [date-fns](https://date-fns.org)
- Test: [Mocha](https://mochajs.org) & [Chai](https://www.chaijs.com)
- Logs: use [Winston](https://www.npmjs.com/package/winston)
- Http Request: use [Axios](https://github.com/axios/axios)
- Authentication: [JWT](https://www.npmjs.com/package/jwt)
- SMTP email: Send emails using [Nodemailer](https://www.npmjs.com/package/nodemailer) and html templates with mustache
- Express: [Cors](https://www.npmjs.com/package/cors) enabled, [cookie](https://www.npmjs.com/package/cookie-parser) and [body](https://www.npmjs.com/package/body-parser) parser, [helmet](https://www.npmjs.com/package/helmet) headers
- Migrations: use [postgrator](https://www.npmjs.com/package/postgrator), running `npm run migrate`. Place your migrations on `src/migrations`
- Docker compose and dockerfile attached running migrations e starting database and nodejs

<div id='tutorials'/>

## :books: Tutorials

Some useful tutorials to improve nodevader's features:

- Main features: [check here](https://from-tatooine.web.app/nodevader-first-release/)
- Deploy to firebase functions: [check here](https://from-tatooine.web.app/deploy-nodejs-firebase)

<div id='projetcstructure'/>

## :open_file_folder: Project structure

Basic folder structure

- **src/config**: App config (some of these are inherited from .env file), constants, configuration and i18n
- **src/api**: Endpoints and business logic
- **src/static**: Images, styles, fonts and other files that can be served
- **src/middlewares**: Middlewares for routes
- **src/routes**: Routes, :]
- **src/templates**: mustache interpreted files
- **src/test**: Mocha and chai unity tests
- **src/utils**: Utilities and modules superior layer implementations

<div id='license'/>

## :scroll: License 

```
MIT license. Copyright (c) 2020 Stanley.
For more information, see the LICENSE file.
```
