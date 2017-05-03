import supertest from "supertest";
import {server} from  "./../server.js";
import should from "should";
import {loadHeatingDataDownstairs} from './../config/dbHeatingData';
import {loadHeatingDataUpstairs} from './../config/dbHeatingData';

// UNIT test begin
describe("Heating API unit tests", function() {

  before("Seed the Database with the heating data", function(done) {
    loadHeatingDataDownstairs(done);
    loadHeatingDataUpstairs(done);
    done();
  });

  //increase timeout of tests to 2 mins. Starting Mockgoose can take time.
  

  // #1 Should return the heating json document for the specified areaId
  it("Should return the heating downstairs document: Happy Path", function(done) {
    this.timeout(120000);
    supertest(server).get(`/api/heating/1`)
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });// #1 - GET /:areaId

  // #2 downstairs heating on/off value
  it("Should return the downstairs heating On/Off status: Happy Path", function(done) {
    this.timeout(120000);
    supertest(server).get(`/api/heating/1/switch`)
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.have.property('heatingOn');
        done();
      });
  });// #2 - GET /:areaId/switch


  // #3  downstairs heating thermostat value
  it("Should return the downstairs heating thermostat value: Happy Path", function(done) {
    this.timeout(120000);
    supertest(server).get(`/api/heating/1/setpoint`)
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.have.property('setPoint');
        done();
      });
  });// #3 - GET /:areaId/setpoint


  // #4  downstairs heating on/off value
  it("Should return the upstairs heating On/Off status: Happy Path", function(done) {
    this.timeout(120000);
    supertest(server).get(`/api/heating/2/switch`)
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.have.property('heatingOn');
        done();
      });
  });// #4 - GET /:areaId/switch


  // #5  downstairs heating thermostat value
  it("Should return the upstairs heating thermostat value: Happy Path", function(done) {
    this.timeout(120000);
    supertest(server).get(`/api/heating/2/setpoint`)
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function(err, res) {
        res.status.should.equal(200);
        res.body.should.have.property('setPoint');
        done();
      });
  });// #5 - GET /:areaId/setpoint

});