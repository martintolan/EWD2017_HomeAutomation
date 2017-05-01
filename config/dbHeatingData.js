import mongoose from 'mongoose';
import assert from 'assert';
import heatingModelDS from './../api/heating/heatingModelDS';
import heatingModelUS from './../api/heating/heatingModelUS';
import config from './config';

const temperatureDataDownStairs = {
	title: "Downstairs",
    areaId: 1,
	currentTemp: 23,
	temperature_rows: [["11:29", 23.1], ["11:28", 20.2], ["11:27", 19.3], ["11:26", 18.5], ["11:25", 21.1], 
                ["11:24", 17.2], ["11:23", 21.9], ["11:22", 24.3], ["11:21", 18.5], ["11:20", 22.5]
  ],
  thermostatTempValue: 18.3,
  heatingOn: false
};

const temperatureDataUpStairs = {
	title: "Upstairs",
    areaId: 2,
	currentTemp: 21,	
	temperature_rows: [["11:29", 21.1], ["11:28", 22.2], ["11:27", 20.3], ["11:26", 22.5], ["11:25", 23.1], 
		 	 				["11:24", 21.2], ["11:23", 20.9], ["11:22", 20.3], ["11:21", 19.5], ["11:20", 20.5]
  ],
  thermostatTempValue: 20.5,
  heatingOn: true
};

export const loadHeatingDataDownstairs = () =>{heatingModelDS.find({}).
  remove(function() {
    heatingModelDS.collection.insert(temperatureDataDownStairs, (err,docs)=>{
      if (err){
        console.log(`Failed to Load the Seed Downstairs Heating Data`);
      }
      else{
        console.info(`The Downstairs Heating records were successfully stored.`);
      }
    })
  });
}

export const loadHeatingDataUpstairs = () =>{heatingModelUS.find({}).
  remove(function() {
    heatingModelUS.collection.insert(temperatureDataUpStairs, (err,docs)=>{
      if (err){
        console.log(`Failed to Load the Seed Upstairs Heating Data`);
      }
      else{
        console.info(`The Upstairs Heating records were successfully stored.`);
      }
    })
  });
}
