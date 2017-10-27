var models  = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(">>>>>>>>>>>>>>> Seeding users table")
    return queryInterface.bulkInsert(models.User.tableName, [{
      email:      "jon@gmail.com",
      firstname:  "jon",
      lastname:   "arnaldo",
      username:   "jonarnaldo",
      rating:     5,
      lat:        100.1,
      lon:        200.2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(models.User.tableName, null, {});
  }
};
