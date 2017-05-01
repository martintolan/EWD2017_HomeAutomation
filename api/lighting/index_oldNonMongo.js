import express from 'express';
import DBApi from './DBApi';

const router = express.Router();


//get all lighting information
router.get('/', (req, res) => {
    console.log(`LightingAPI: Http GET(/) called; Getting all lights information.`);
    const lightingInfo = DBApi.getAllLights();
    res.status(200).send({lightingInfo});
});

// add a new light point to the list to be monitored
router.post('/', (req, res) => {
    console.log(`LightingAPI: Http POST(/) called; Adding new light.`);
    const newLight = req.body;
    const result = DBApi.addLight(newLight.title, newLight.areaId, newLight.lightOn);
    if (result > 0) {
        return res.status(200).send({message: `New Light: ${newLight.title} in area: ${newLight.areaId} added with ID: ${result}`});
    }
    return res.status(404).send({message: `Failed to add the New Light: ${newLight.title}`});
});

// Set the state for ALL of the lights, on/off
router.put('/', (req, res) => {
    const command = req.body;
    console.log(`LightingAPI: Http PUT(/) called with command: ${command.lightOn}; Switching all lights On/Off`);
    DBApi.setOnOffForAllLights(command.lightOn);
    res.status(200).send();
});


// get light info for the specified light
router.get('/:lightId', (req, res) => {
    const light = req.params.lightId;
    console.log(`LightingAPI: Http GET(/:${light}) called`);
    const lightInfo = DBApi.getLightInfo(light);
    res.status(200).send({lightInfo});
});

// Set the state of the light, on/off
router.put('/:lightId', (req, res) => {
    const light = req.params.lightId;
    const command = req.body;
    console.log(`LightingAPI: Http PUT(/:${light}) called with command: ${command.lightOn}`);
    DBApi.setOnOffForLight(light, command.lightOn);
    res.status(200).send();
});

export default router;
