# GraphQL-API

API with GraphQL, [NodeJS](https://nodejs.org/), [Express.js](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) in a Modularising approach.

## Install and Run

> Before you start create variables.env following variables.env.example and change the environment variables.

```shell
$ git clone https://github.com/osmangoninahid/graphql-api.git
$ cd graphql-api && npm install
$ npm start or npm run dev
```

## Project Structure

```bash
├── bin
│   ├── www
├── libs
│   ├── logger.js  
├── modules
│   ├── products
│   │   ├── resolvers/index.js
│   │   ├── models/index.js
│   │   ├── schemas/index.js
├── routes
│   ├── index.js
├── node_modules
├── app.js
├── resolvers.js
├── schema.js
├── variable.env
├── package.json
├── variable.env.example
└── .gitignore
```

`variables.env.example` is the file that serves as example for other people contributing to your project, it contains all the needed _env_ variables with dummy values to be replaced after your project gets cloned (`variables.env` does not get tracked by git).

## Before running this project (after cloned from _github_)

* change the name of `variables.env.example` to `variables.env`
* inside `variables.env` replace the value of the variables with your values
* run `npm install` to make sure dependencies intallation

### TODO

* [ ] JWT integration for authentication and authorization
* [ ] Relational/Referencing example
* [ ] Logger
* [ ] and Based on feedback

## License

### The MIT License

Copyright (c) 2018 [Osman Goni Nahid](https://osmangoni.info/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
