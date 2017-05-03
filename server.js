import config from './config/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {loadLightingData} from './config/dbLightingData';
import {loadHeatingDataDownstairs} from './config/dbHeatingData';
import {loadHeatingDataUpstairs} from './config/dbHeatingData';
import heatingRouter from './api/heating';
import lightingRouter from './api/lighting';
import waterRouter from './api/water';
import {Mockgoose} from 'mockgoose';
import {nodeEnv}  from './config/config';

//create the express server app
export const server = express();

//configure body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


// Configure the app to serve up content from public directory
server.use('/api/heating', heatingRouter);
server.use('/api/lighting', lightingRouter);
server.use('/api/water', waterRouter);
server.use(express.static('homeauto_frontend/build'));
//server.use(express.static('build'));


// Connect to the database
if (nodeEnv == 'test'){
  //use mockgoose for testing
  var mockgoose = new Mockgoose(mongoose); 
  mockgoose.prepareStorage().then(()=>{
    mongoose.connect(config.mongoDb);
  });
}
else
{
  //use real deal for everything else
  mongoose.connect(config.mongoDb);
  // Populate DB with sample data
  if(config.seedDb) {
    loadHeatingDataDownstairs();
    loadHeatingDataUpstairs();
    loadLightingData();
    console.info(`Seeded the DB with the default data...`);
  }  
}

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: '+ err);
  process.exit(-1);
});



server.listen(config.port, config.host, () => {
  console.info("Express server listening on port: ", config.port);
});
