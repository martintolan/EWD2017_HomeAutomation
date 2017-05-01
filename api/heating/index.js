import express from 'express';
//import DBApi from './DBApi';
import mongoose from 'mongoose';
import HeatingDS from './heatingModelDS';
import HeatingUS from './heatingModelUS';
import config from './../../config';

const router = express.Router();


// get heating info for the area specified
router.get('/:areaId', (req, res) => {
    const areaId = req.params.areaId;
    console.log(`HeatingAPI: Http GET(:/${areaId}) called; Getting the heating information.`);
    if(1 == areaId){
        HeatingDS.find((err, heatingInfo) => {
        if(err) { return handleError(res, err); }
        return res.status(200).send(heatingInfo);
        });
    }
    else{
        HeatingUS.find((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            return res.status(200).send(heatingInfo);
        });
    }
});

// get state of the switch for the heating for the specified area, On or Off
router.get('/:areaId/switch', (req, res) => {
    const areaId = req.params.areaId;
    console.log(`HeatingAPI: Http GET(:/${areaId}/switch) called; Getting the Heating On/Off status for the area.`);
    if(1 == areaId){
        HeatingDS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            var heatingStatus = heatingInfo.toJSON();
            var heatingOn = heatingStatus.heatingOn;
            res.status(200).send({heatingOn});
        });
    }
    else{
        HeatingUS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            var heatingStatus = heatingInfo.toJSON();
            var heatingOn = heatingStatus.heatingOn;
            res.status(200).send({heatingOn});
        });
    }
});

// get temperature set point for the heating in the specified area
router.get('/:areaId/setpoint', (req, res) => {
    const areaId = req.params.areaId;
    console.log(`HeatingAPI: Http GET(:/${areaId}/setpoint) called; Getting the Heating SetPoint value for the area.`);
    if(1 == areaId){
        HeatingDS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            var heatingStatus = heatingInfo.toJSON();
            var setPoint = heatingStatus.thermostatTempValue;
            res.status(200).send({setPoint});
        });
    }
    else{
        HeatingUS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            var heatingStatus = heatingInfo.toJSON();
            var setPoint = heatingStatus.thermostatTempValue;
            res.status(200).send({setPoint});
        });
    }
});

// Turn on/off the heading for the specified area
router.put('/:areaId/switch', (req, res) => {
    const areaId = req.params.areaId;
    const heatingCommand = req.body;
    console.log(`HeatingAPI: Http PUT(:/${areaId}/switch) called with command: ${heatingCommand.heatingOn}; Switching the heating On/Off in that area.`);
    if(1 == areaId){
        HeatingDS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            if(!heatingInfo) { return res.sendStatus(404); }
            heatingInfo.heatingOn = heatingCommand.heatingOn;
            const updated = heatingInfo;
            updated.save((err) => {
            if (err) { return handleError(res, err); }
            res.status(200).send({updated});
            });
        });
    }
    else{
        HeatingUS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            if(!heatingInfo) { return res.sendStatus(404); }
            heatingInfo.heatingOn = heatingCommand.heatingOn;
            const updated = heatingInfo;
            updated.save((err) => {
            if (err) { return handleError(res, err); }
            res.status(200).send({updated});
            });
        });
    }
});


// Set the tempaerature set point for the specified area
router.put('/:areaId/setpoint', (req, res) => {
    const areaId = req.params.areaId;
    const heatingCommand = req.body;
    console.log(`HeatingAPI: Http PUT(:/${areaId}/setpoint) called with a requested temperature: ${heatingCommand.thermostatTempValue}; Setting the Thermostat SetPoint for that area.`);
    if(1 == areaId){
        HeatingDS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            if(!heatingInfo) { return res.sendStatus(404); }
            heatingInfo.thermostatTempValue = heatingCommand.thermostatTempValue;
            const updated = heatingInfo;
            updated.save((err) => {
            if (err) { return handleError(res, err); }
            res.status(200).send({updated});
            });
        });
    }
    else{
        HeatingUS.findOne((err, heatingInfo) => {
            if(err) { return handleError(res, err); }
            if(!heatingInfo) { return res.sendStatus(404); }
            heatingInfo.thermostatTempValue = heatingCommand.thermostatTempValue;
            const updated = heatingInfo;
            updated.save((err) => {
            if (err) { return handleError(res, err); }
            res.status(200).send({updated});
            });
        });
    }
});


function handleError(res, err) {
  console.log(`HeatingAPI: Error in Http call, returning HttpResult(500)`);
  return res.status(500).send(err);
};


export default router;
