<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
   <a href="https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD.git
$ yarn # or npm i
```

## project structure
```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
express: ^4.18.2 | mongoose: ^4.7.4
body-parser: ^1.20.2 | cors: ^2.8.5
jsonwebtoken: ^9.0.1 | bcryptjs: ^2.4.3
dotenv: ^16.3.1 | nodemon: ^3.0.1
react: ^^18.2.0 | react-dom: ^18.2.0
react-redux: ^8.1.1 | axios: ^1.4.0
redux: ^4.2.1 | react-router-dom: ^6.14.2
redux-thunk: ^2.4.2 | react-icons: ^4.10.1
react-toastify: ^9.1.3 | tailwindcss: ^3.3.3

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/blob/master/Home.PNG)

User can sign in or sign up
![User can sign in or sign up](https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/blob/master/Auth.PNG)

After logging in, the user can edit and delete posts.
![After logging in, the user can edit and delete posts.](https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/blob/master/Modal.PNG)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/issues) (preferred)

Email Me: enes9103@gmail.com (welcome, say hi)

## Author
[enes9103](https://enes-unlu-portfolio.netlify.app/)

## Join the growing community


### License
[MIT](https://github.com/enes9103/MERN_Tutorial_Post_Share_CRUD/blob/master/LICENSE)