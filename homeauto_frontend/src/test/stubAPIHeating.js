import React from 'react';
import _ from 'lodash';


var temperatureDataDownStairs = {
	"title": "Downstairs",
	"currentTemp": 23,
	"temperature_rows": [["11:29", 23.1], ["11:28", 20.2], ["11:27", 19.3], ["11:26", 18.5], ["11:25", 21.1], 
                ["11:24", 17.2], ["11:23", 21.9], ["11:22", 24.3], ["11:21", 18.5], ["11:20", 22.5]
  ],
  "thermostatTempValue": 18.3,
  "HeatingOn": false
};

var temperatureDataUpStairs = {
	"title": "Upstairs",
	"currentTemp": 21,	
	"temperature_rows": [["11:29", 21.1], ["11:28", 22.2], ["11:27", 20.3], ["11:26", 22.5], ["11:25", 23.1], 
		 	 				["11:24", 21.2], ["11:23", 20.9], ["11:22", 20.3], ["11:21", 19.5], ["11:20", 20.5]
  ],
  "thermostatTempValue": 20.5,
  "HeatingOn": true
};


class APIHeatingStub extends React.Component {
  getHeatingDataDownStairs() {
    console.log("apiHeatingStub->getHeatingDataDownStairs() function called...");
    var promise = new Promise ((resolve,reject) => {
    	var json = JSON.stringify(temperatureDataDownStairs);
      setTimeout(() => resolve(json), 1000 );
    }) ;
   return promise ;
   //return temperatureDataDownStairs;
  }// getHeatingDataDownStairs()

  getHeatingDataUpStairs() {
    console.log("apiHeatingStub->getHeatingDataUpStairs() function called...");
    var promise = new Promise ((resolve,reject) => {
    	var json = JSON.stringify(temperatureDataUpStairs);
      setTimeout(() => resolve(json), 1000 );
    }) ;
   return promise ;
   //return temperatureDataUpStairs;
  }// getHeatingDataUpStairs()

  switchHeating(areaId, heatingCommand) {
    console.log("apiHeatingStub->switchHeating() function called for area: " + areaId + " with heatingCommand: " + heatingCommand);
    var promise = new Promise ((resolve,reject) => {
      // Populate with the real API calls once backend is ready...
      setTimeout(() => {
        resolve(true);
      }, 1000) ; 
    });
    return promise ;
  }// switchHeating()

  updateHeatingSetPoint(areaId, value) {
    console.log("apiHeatingStub->updateHeatingSetPoint() function called for area: " + areaId + " with value: " + value);
    var promise = new Promise ((resolve,reject) => {
      // Populate with the real API calls once backend is ready...
      setTimeout(() => {
        resolve(true);
      }, 1000) ; 
    });
    return promise ;
  }// updateHeatingSetPoint()

} //class - APIHeatingStub

export default APIHeatingStub;
