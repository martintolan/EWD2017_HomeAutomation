import express from 'express';
//import DBApi from './DBApi';
import mongoose from 'mongoose';
import Lighting from './lightingModel';
import config from './../../config/config';

const router = express.Router();


//get all lighting information
router.get('/', (req, res) => {
    console.log(`LightingAPI: Http GET(/) called; Getting all lights information.`);
    Lighting.find((err, lightingInfo) => {
    if(err) { return handleError(res, err); }
    return res.send(lightingInfo);
  });
});

// add a new light point to the list to be monitored
router.post('/', (req, res) => {
    console.log(`LightingAPI: Http POST(/) called; Adding new light.`);
    let newLight = req.body;
    if (newLight){
      Lighting.create(newLight, (err, light) => {
        if(err) { return handleError(res, err); }
        return res.status(200).send({light});
      });
    }else{
      return handleError(res, err);
    }
});

// Set the state for ALL of the lights, on/off
router.put('/', (req, res) => {
  let command = req.body;
  console.log(`LightingAPI: Http PUT(/) called with command: ${command.lightOn}; Switching all lights On/Off.`);
  Lighting.update({lightOn: !command.lightOn}, {lightOn: command.lightOn}, {multi: true}, 
    function(err, num) {
      if(err) { return handleError(res, err); }
      return res.status(200).send({num});
    }
  );
});


// get light info for the specified light
router.get('/:lightId', (req, res) => {
  const lightId = req.params.lightId;
  console.log(`LightingAPI: Http GET(/:${lightId}) called; Getting Light Information.`);
  Lighting.findById(lightId, (err, light) => {
    if (err) { return handleError(res, err); }
    if(!light) { return res.sendStatus(404); }
    res.status(200).send({light});
  });
  });

// Set the state of the light, on/off
router.put('/:lightId', (req, res) => {
    const lightId = req.params.lightId;
    const lightCommand = req.body;
    console.log(`LightingAPI: Http PUT(/:${lightId}) called with command: ${lightCommand.lightOn}. Setting light On/Off.`);
    if(lightCommand._id) { delete lightCommand._id; }
    Lighting.findById(lightId, (err, light) => {
      if (err) { return handleError(res, err); }
      if(!light) { return res.sendStatus(404); }
      //const updated = _.merge(light, updateLight);
      light.lightOn = lightCommand.lightOn;
      const updated = light;
      updated.save((err) => {
        if (err) { return handleError(res, err); }
        res.status(200).send({updated});
    });
  });
});

// Delete the specified light
router.delete('/:lightId', (req, res) => {
  const lightId = req.params.lightId;
  console.log(`LightingAPI: Http DELETE(/:${lightId}) called; Deleting the light.`);
  Lighting.findById(lightId, (err, light)=> {
    if(err) { return res.status(400).send(err);}
    if(!light) { return res.sendStatus(404); }
    light.remove(err => {
      if(err) { return handleError(res, err); }
      res.status(200).send({light});
    });
  });      
});

function handleError(res, err) {
  console.log(`LightingAPI: Error in Http call, returning HttpResult(500)`);
  return res.status(500).send(err);
};

export default router;
