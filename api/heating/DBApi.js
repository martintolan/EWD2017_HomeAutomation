var temperatureDataDownStairs = {
	title: "Downstairs",
    areaId: 1,
	currentTemp: 23,
	temperature_rows: [["11:29", 23.1], ["11:28", 20.2], ["11:27", 19.3], ["11:26", 18.5], ["11:25", 21.1], 
                ["11:24", 17.2], ["11:23", 21.9], ["11:22", 24.3], ["11:21", 18.5], ["11:20", 22.5]
  ],
  thermostatTempValue: 18.3,
  heatingOn: false
};

var temperatureDataUpStairs = {
	title: "Upstairs",
    areaId: 2,
	currentTemp: 21,	
	temperature_rows: [["11:29", 21.1], ["11:28", 22.2], ["11:27", 20.3], ["11:26", 22.5], ["11:25", 23.1], 
		 	 				["11:24", 21.2], ["11:23", 20.9], ["11:22", 20.3], ["11:21", 19.5], ["11:20", 20.5]
  ],
  thermostatTempValue: 20.5,
  heatingOn: true
};


const dbStubAPI = {
    // get all temperature info for downstairs
    getDownStairsInfo : () => {
        return temperatureDataDownStairs;
    },    
    // get all temperature info for upstairs
    getUpStairsInfo : () => {
        return temperatureDataUpStairs;
    },

    // get the status of the heating switch for downstairs, return bool
    getDownStairsSwitchStatus : () => {
        return temperatureDataDownStairs.HeatingOn;
    },
    // get the status of the heating switch for upstairs, return bool
    getUpStairsSwitchStatus : () => {
        return temperatureDataUpStairs.HeatingOn;
    },

    // get the value of the thermostat for downstairs, returns number
    getDownStairsSetPoint : () => {
        return temperatureDataDownStairs.thermostatTempValue;
    },
    // get the value of the thermostat for upstairs, returns number
    getUpStairsSetPoint : () => {
        return temperatureDataUpStairs.thermostatTempValue;
    },


    // set the status of the heating switch for downstairs, expects a bool
    setDownStairsSwitchStatus : (onOffCommand) => {
        temperatureDataDownStairs.HeatingOn = onOffCommand;
    },
    // set the status of the heating switch for upstairs, expects a bool
    setUpStairsSwitchStatus : (onOffCommand) => {
        temperatureDataUpStairs.HeatingOn = onOffCommand;
    },

    // set the value of the thermostat for downstairs, expects a number
    setDownStairsSetPoint : (newSetPoint) => {
        temperatureDataDownStairs.thermostatTempValue = newSetPoint;
    },
    // set the value of the thermostat for upstairs, expects a number
    setUpStairsSetPoint : (newSetPoint) => {
        temperatureDataUpStairs.thermostatTempValue = newSetPoint;
    }
}
export default dbStubAPI;
