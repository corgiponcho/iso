var models  = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
  	console.log('>>>>>>>>>>>>> Creating User table.');
    return queryInterface.createTable(models.User.tableName, models.User.attributes)
    .then(() => { 
    	console.log('>>>>>>>>>>>>> Creating Post table.');
      queryInterface.createTable(models.Post.tableName, models.Post.attributes)
    })

  },
  down: (queryInterface, Sequelize) => {
  	console.log('>>>>>>>>>>>>> Dropping Post table.');
    return queryInterface.dropTable(models.Post.tableName)
    .then(() => {
      console.log('>>>>>>>>>>>>> Dropping User table.');
      queryInterface.dropTable(models.User.tableName)
    })
  }
};