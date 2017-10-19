// process.env.NODE_ENV = 'test';

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

  describe('/POST post', () => {
    it('it should POST a post', (done) => {
      let post = {
      	title: "awesome shop vacc",
			  status: "open",
			  lat: 134.0,
			  lon: 50.3,
			  UserId: 0,
			  creator_id: 0
      }
      chai.request(server)
        .post('/post/create')
        .send(post)
        .end((err, res) => {
          console.log('hello', err)
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.data = post;
          done();
        });
    });
  });

});
