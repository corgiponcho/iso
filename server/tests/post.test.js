process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();

const models  = require('../models');

chai.use(chaiHttp);

describe('Post', () => {
  beforeEach((done) => {
    models.Post.destroy({
    	where: {}
    }).then(() => {
      done();
    });     
  });

  describe('/GET all posts', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
        .get('/post')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST a post', () => {
    before((done) => {
      models.User.destroy({
          where: {}
        }).then(() => {
          models.User.create({
            id: 1,
            email:      "jon@gmail.com",
            firstname:  "jon",
            lastname:   "arnaldo",
            username:   "jonarnaldo",
            rating:     5,
            lat:        100.1,
            lon:        200.2
          }).then(() => {
            done();
          });
        });
    });

    it('it should POST a post', (done) => {
      let post = {
      	title: "awesome shop vacc",
			  status: "open",
			  lat: 134.0,
			  lon: 50.3,
			  userId: 1,
			  creator_id: 0
      }

      chai.request(server)
        .post('/post')
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.data.should.be.eql(post);
          models.Post.all().then((posts) => {
            posts[0].dataValues.title.should.be.eql(post.title);
            posts[0].dataValues.status.should.be.eql(post.status);
            posts[0].dataValues.lat.should.be.eql(post.lat.toString());
            posts[0].dataValues.lon.should.be.eql(post.lon.toString());
            posts[0].dataValues.userId.should.be.eql(post.userId);
            done();
          });
        });
    });
  });

  describe('/UPDATE a post', () => {
    it('it should update a post', (done) => {
      let post_old = {
        title: "awesome old shop vacc",
        status: "open",
        lat: 134.0,
        lon: 50.3,
        UserId: 0,
        creator_id: 0
      }

      models.Post.create(post_old).then(function(post_old) {
        let post_new = {
          title: "awesome new shop vacc",
        }
        chai.request(server)
        .put('/post/' + post_old.id)
        .send(post_new)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });
  });
});
