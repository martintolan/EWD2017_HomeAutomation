
import _ from 'lodash';

var  lightsStatus = [
    {  
        id: 1,
        title: "Sitting Room",
        areaId: 1,
        lightOn: true
    },
    {
        id: 2,
        title: "Kitchen",
        areaId: 1,
        lightOn: false
    },
    {
        id: 3,
        title: "Dining Room",
        areaId: 1,
        lightOn: true
    },
    {
        id: 4,
        title: "Utility Room",
        areaId: 1,
        lightOn: false
    },
    {
        id: 5,
        title: "Bathroom",
        areaId: 1,
        lightOn: true
    },
    {
        id: 6,
        title: "Front Door",
        areaId: 1,
        lightOn: false
    },
    {
        id: 7,
        title: "Backdoor",
        areaId: 1,
        lightOn: true
    },
    {
        id: 8,
        title: "Bedroom 1",
        areaId: 2,
        lightOn: false
    },
    {
        id: 9,
        title: "Bedroom 2",
        areaId: 2,
        lightOn: true
    },
    {
        id: 10,
        title: "Bedroom 3",
        areaId: 2,
        lightOn: false
    },
    {
        id: 11,
        title: "Bathroom",
        areaId: 2,
        lightOn: true
    },
    {
        id: 12,
        title: "Ensuite",
        areaId: 2,
        lightOn: false
    },
] ;


const dbStubAPI = {
    // get all lights info: get('/',
    getAllLights : () => {
        return lightsStatus;
    },// getAllLights()

    // post('/',
    addLight :(name, area, state) => {
        let id = 1;
        const last = _.last(lightsStatus);
        if (last) {
            id = last.id + 1;
        }
        let len = lightsStatus.length;
        let newL_len = lightsStatus.push({id: id, title: name, areaId: area, lightOn: state });
        return newL_len > len ? id : -1;

    },// addLight()

    // put('/',
    setOnOffForAllLights : (command) => {
        const index = _.map(lightsStatus, function(light) {
            light.lightOn = command;
        });

    },// toggleAllLights()

    // get the info for the specified light; get('/:lightId',
    getLightInfo : (lightId) => {
        let result = null ;
        const index = _.findIndex(lightsStatus, function(light) {
            return light.id == lightId;
        });
        if (index !== -1) {                
            result = lightsStatus[index];
        }
        return result; 
    },// getLightInfo()

    // set the light On/Off; put('/:lightId',
    setOnOffForLight : (lightId, command) => {
        let result = null ;
        const index = _.findIndex(lightsStatus, function(light) {
            return light.id == lightId;
        });
        if (index !== -1) {                
            lightsStatus[index].lightOn = command;
        }
        return result; 
    }// setOnOffForLight()
}
export default dbStubAPI;
