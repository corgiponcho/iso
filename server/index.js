const express = require('express');
const app = express();
const models = require("./models");
const bodyParser = require('body-parser');
const posts = require('./routes/post');

const isProduction = process.env.NODE_ENV === "production";
const port = isProduction ? 3000 : 8080;
const router = express.Router(); // TODO: not being used?

app.set("port", port);

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use("/api/v0/post", posts);

models.sequelize.sync({force:true}).then(function() {
  console.log("syncing models complete");
   models.User.create({
     email:      "jon@gmail.com",
     firstname:  "jon",
     lastname:   "arnaldo",
     username:   "jonarnaldo",
     rating:     5,
     lat:        100.1,
     lon:        200.2
   });

   models.Post.create({
     title:  "gas lawnmower",
     body: "time to mow the lawn! rent this gas lawnmower for a day",
     status: "CREATED",
     lat:    "100.1",
     lon:    "200.2",
     userId: 1
   });

  //  models.sequelize.close();

  //  TODO move this into another file
  // see https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server
  app.listen(port, () => {
     console.log(`iso app listening on port ${app.get('port')}`);
    // TODO use logger here
  });
});
