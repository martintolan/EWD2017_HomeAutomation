import React from 'react';
import request from 'superagent' ; 

class APIHeating extends React.Component {
  getHeatingDataDownStairs() {
    console.log("apiHeating->getHeatingDataDownStairs() function called...");
    var promise = new Promise ((resolve,reject) => {
      request.get('http://localhost:3001/temperatureDataDownStairs').end(function(error, response) {
        if (response) {
          console.log("apiHeating->getHeatingDataDownStairs() ---Resolved OK...");
          console.log("apiHeating->response: " + response.text);
          resolve(response.text);
        }
        else {
          console.log('-----------> API Error: ' + error);
          reject();
        }
      }.bind(this)); 
    }) ;
   return promise ;
  }// getHeatingDataDownStairs()

  getHeatingDataUpStairs() {
    console.log("apiHeating->getHeatingDataUpStairs() function called...");
    var promise = new Promise ((resolve,reject) => {
      request.get('http://localhost:3001/temperatureDataUpStairs').end(function(error, response) {
        if (response) {
          console.log("apiHeating->getHeatingDataUpStairs() ---Resolved OK...");
          console.log("apiHeating->response: " + response.text);
          resolve(response.text);
        }
        else {
          console.log('-----------> API Error: ' + error);
          reject();
        }
      }.bind(this)); 
    }) ;
   return promise ;
  }// getHeatingDataUpStairs()

  switchHeating(areaId, heatingCommand) {
    console.log("apiHeating->switchHeating() function called for area: " + areaId + " with heatingCommand: " + heatingCommand);
    var promise = new Promise ((resolve,reject) => {
      // Populate with the real API calls once backend is ready...
      setTimeout(() => {
        resolve(true);
      }, 1000) ; 
    });
    return promise ;
  }// switchHeating()

  updateHeatingSetPoint(areaId, value) {
    console.log("apiHeating->updateHeatingSetPoint() function called for area: " + areaId + " with value: " + value);
    var promise = new Promise ((resolve,reject) => {
      // Populate with the real API calls once backend is ready...
      setTimeout(() => {
        resolve(true);
      }, 1000) ; 
    });
    return promise ;
  }// updateHeatingSetPoint()

} // var apiHeating

export default APIHeating;