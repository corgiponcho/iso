// const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email:      { type: Sequelize.STRING },
    firstname:  { type: Sequelize.STRING },
    lastname:   { type: Sequelize.STRING },
    username:   { type: Sequelize.STRING },
    rating:     { type: Sequelize.DECIMAL },
    lat:        { type: Sequelize.DECIMAL },
    lon:        { type: Sequelize.DECIMAL }
  });

  // create associates here

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  User.someClassMethods = () => {
  }

  // instance methods
  User.prototype.getName = () => {
    console.log(this.getName);
  }

  return User;
}
