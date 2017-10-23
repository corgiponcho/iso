const env = process.env.NODE_ENV || 'development';
const path = require('path');
const Sequelize = require('sequelize');
const Post = require('./posts.js');
const User = require('./users.js');
const Item = require('./items.js');
const Media = require('./media.js');
const Fee = require('./fees.js');
const Booking = require('./bookings.js');
const Time = require('./time.js');
const Reviews = require('./reviews.js');
const config = require(__dirname + '/../config/sql_config.json')[env];
const { Pool, Client } = require('pg');

// establish connection using sequelize
const { database, username, password, host, port } = config;
const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(connectionString, { logging: false });

// add tables here
const db = {
  User: User(sequelize, Sequelize.DataTypes),
  Post: Post(sequelize, Sequelize.DataTypes),
  Item: Item(sequelize, Sequelize.DataTypes),
  Media: Media(sequelize, Sequelize.DataTypes),
  Fee: Fee(sequelize, Sequelize.DataTypes),
  Booking: Booking(sequelize, Sequelize.DataTypes),
  Time: Time(sequelize, Sequelize.DataTypes),
  Reviews: Reviews(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
    console.log(`${modelName} associate created`)
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
