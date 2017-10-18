const env = process.env.NODE_ENV || 'development';
const path = require('path');
const Sequelize = require('sequelize');
const Post = require('./posts.js');
const User = require('./users.js');
const config = require(__dirname + '/../config/sql_config.json')[env];
const { Pool, Client } = require('pg');

// establish connection using sequelize
const { database, username, password, host, port } = config;
const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(connectionString);

// add tables here
const db = {
  User: User(sequelize, Sequelize.DataTypes),
  Post: Post(sequelize, Sequelize.DataTypes)
};

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
    console.log("associate created")
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
