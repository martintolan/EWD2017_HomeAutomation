import config from './config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {loadLightingData} from './dbLightingData';
import {loadHeatingDataDownstairs} from './dbHeatingData';
import {loadHeatingDataUpstairs} from './dbHeatingData';
import heatingRouter from './api/heating';
import lightingRouter from './api/lighting';
import waterRouter from './api/water';

//create an express app
const server = express();

//configure body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


// Configure the app to serve up content from public directory
server.use('/api/heating', heatingRouter);
server.use('/api/lighting', lightingRouter);
server.use('/api/water', waterRouter);
//server.use(express.static('public'));
server.use(express.static('homeauto_frontend\\public'));


// Connect to database
mongoose.connect(config.mongoDb);
// Populate DB with sample data
if(config.seedDb) {
    loadLightingData();
    loadHeatingDataDownstairs();
    loadHeatingDataUpstairs();
    console.info(`Seeded the DB with the default data...`);
}

server.listen(config.port, config.host, () => {
  console.info("Express server listening on port: ", config.port);
});
