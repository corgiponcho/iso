const models = require("./models");
const port = process.env.PORT || 3000;
const app = require("../app");
const posts = require('./routes/post');

// const logger = require('logger').createLogger('development.log');
// const isDev = process.env.NODE_ENV !== 'production';

// const posts = require('./routes/post');

app.set('port', port);

models.sequelize.sync({force:true}).then(function() {
  console.log("syncing models complete");
   // models.User.create({
   //   email:      "jon@gmail.com",
   //   firstname:  "jon",
   //   lastname:   "arnaldo",
   //   username:   "jonarnaldo",
   //   rating:     5,
   //   lat:        100.1,
   //   lon:        200.2
   // });

   // models.Post.create({
   //   title:  "a post",
   //   status: "CREATED",
   //   lat:    "100.1",
   //   lon:    "200.2",
   //   creator_id: 1
   // });
  //  models.sequelize.close();

  //  TODO move this into another file
  // see https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server
  app.listen(port, () => {
     console.log(`iso app listening on port ${app.get('port')}`);
    // TODO use logger here
  });
});
