const models = require('./models');

console.log("models sunc", models)
models.sequelize.sync({force:true}).then(function() {
   models.User.create({
     email:      "jon@gmail.com",
     firstname:  "jon",
     lastname:   "arnaldo",
     username:   "jonarnaldo",
     rating:     5,
     lat:        100.1,
     lon:        200.2
   })

   models.Post.create({
     title:  "a post",
     status: "CREATED",
     lat:    "100.1",
     lon:    "200.2",
     creator_id: 1
   })
});