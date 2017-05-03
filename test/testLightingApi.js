import supertest from "supertest";
import {server} from  "./../server.js";
import should from "should";
import {loadLightingData} from './../config/dbLightingData';

// UNIT test begin
describe("Lighting API unit tests", function() {

  before("Seed the Database with the lighting data", function(done) {
    loadLightingData(done);
    done();
  });


  //increase timeout of tests to 2 mins. Starting Mockgoose can take time.
  this.timeout(120000);
  
  // #1 return a collection of light json documents
  it("Should return collection of JSON documents: Happy Path", function(done) {
    supertest(server).get("/api/lighting")
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });// #1 - GET /

  // #2 add a light
  it("Should add a new light: Happy Path", function(done) {
    supertest(server).post('/api/lighting')
      .send({title: "Dog House", areaId: 1, lightOn: false })
      .expect("Content-type", /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.light.should.have.property('_id');
        res.body.light.title.should.equal('Dog House');
        done();
      });
  });// #2 - POST /

  // #3 update a light
  it("Should update all appropriate lights documents and return the number of updated documents: Happy Path", function(done) {
    supertest(server).put('/api/lighting')
      .send({lightOn: true })
      .expect("Content-type", /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.have.property('num');
        done();
      });
  });// #3 - PUT /

  // #4 delete a light
  it("Should delete the specified light document: Happy Path", function(done) {
    supertest(server).get("/api/lighting")
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        const id = res.body[0]._id;
        supertest(server).delete(`/api/lighting/${id}`)
          .expect("Content-type", /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.light.should.have.property('_id');
            res.body.light.should.have.property('title');
            res.body.light.should.have.property('areaId');
            res.body.light.should.have.property('lightOn');
            done();
          });
      });
  });// #4 - DELETE /:lightId

  // #5 get the specified light
  it("Should delete the specified light document: Happy Path", function(done) {
    supertest(server).get("/api/lighting")
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        const id = res.body[0]._id;
        supertest(server).get(`/api/lighting/${id}`)
          .expect("Content-type", /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.light.should.have.property('_id');
            res.body.light.should.have.property('title');
            res.body.light.should.have.property('areaId');
            res.body.light.should.have.property('lightOn');
            res.body.light._id.should.equal(id);
            done();
          });
      });
  });// #5 - GET /:lightId


  // #6 update the specified light
  it("Should update the specified light document: Happy Path", function(done) {
    supertest(server).get("/api/lighting")
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        const id = res.body[0]._id;
        supertest(server).put(`/api/lighting/${id}`)
          .send({lightOn: false})
          .expect("Content-type", /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.updated.should.have.property('_id');
            res.body.updated.should.have.property('title');
            res.body.updated.should.have.property('areaId');
            res.body.updated.should.have.property('lightOn');
            res.body.updated._id.should.equal(id);
            res.body.updated.lightOn.should.equal(false);
            done();
          });
      });
  });// #6 - PUT /:lightId

  // #7 fail to add a light
  it("Should fail to add a new light: Non-Happy Path", function(done) {
    supertest(server).post('/api/lighting')
      .send({title: 7, areaId: 'abcd' })
      .expect("Content-type", /json/)
      .expect(500)
      .end(function(err, res) {
        res.status.should.equal(500);
        done();
      });
  });// #7 - POST /

  // #8 fail eo get the specified light
  it("Should fail to get the specified light document: Non-Happy Path", function(done) {
    supertest(server).get(`/api/lighting/deadbeefdeadbeef`)
      .expect("Content-type", /json/)
      .expect(404)
      .end(function(err, res) {
        res.status.should.equal(404);
        done();
      });
  });// #8 - GET /:lightId

});