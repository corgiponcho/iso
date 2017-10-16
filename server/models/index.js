const env = process.env.NODE_ENV || 'development';
const path = require('path');
const Sequelize = require('sequelize');
const { Pool, Client } = require('pg');
const post = require('./posts.js');
const user = require('./users.js');
const config = require(__dirname + '/../config/sql_config.json')[env];

// establish connection using sequelize
const { database, username, password, host, port } = config;
const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(connectionString);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // create user table
    // see more methods here: http://docs.sequelizejs.com/class/lib/model.js~Model.html
    const User = user(sequelize, Sequelize);

    User.sync({force: false}).then(() => {
      console.log("User table successfully created")
    });

    // create post table
    const Post = post(sequelize);

    // create Post table
    Post.sync({force: false}).then(() => {
      console.log("Post table successfully created")
    });


  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
