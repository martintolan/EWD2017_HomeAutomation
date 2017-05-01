import mongoose from 'mongoose';
import assert from 'assert';
import lightingModel from './../api/lighting/lightingModel';
import config from './config';

const lightsStatus = [
    {
        title: "Sitting Room",
        areaId: 1,
        lightOn: true
    },
    {
        title: "Kitchen",
        areaId: 1,
        lightOn: false
    },
    {
        title: "Dining Room",
        areaId: 1,
        lightOn: true
    },
    {
        title: "Utility Room",
        areaId: 1,
        lightOn: false
    },
    {
        title: "Bathroom",
        areaId: 1,
        lightOn: true
    },
    {
        title: "Front Door",
        areaId: 1,
        lightOn: false
    },
    {
        title: "Backdoor",
        areaId: 1,
        lightOn: true
    },
    {
        title: "Bedroom 1",
        areaId: 2,
        lightOn: false
    },
    {
        title: "Bedroom 2",
        areaId: 2,
        lightOn: true
    },
    {
        title: "Bedroom 3",
        areaId: 2,
        lightOn: false
    },
    {
        title: "Bathroom",
        areaId: 2,
        lightOn: true
    },
    {
        title: "Ensuite",
        areaId: 2,
        lightOn: false
    }
];

export const loadLightingData = () =>{lightingModel.find({}).
  remove(function() {
    lightingModel.collection.insert(lightsStatus, (err,docs)=>{
      if (err){
        console.log(`failed to Load the Seed Lighting Data`);
      }
      else{
        console.info(`${lightsStatus.length} lighting records were successfully stored.`);
      }
    })
  });
}