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
    console.log(`HeatingAPI: Http GET(:/${areaId}) called`);
    if(1 == areaId){
        const heatingInfo = DBApi.getDownStairsInfo();
        console.log(`heatingInfo: ${heatingInfo}`);
        res.status(200).send({heatingInfo});
    }
    else{
        const heatingInfo = DBApi.getUpStairsInfo();
        console.log(`heatingInfo: ${heatingInfo}`);
        res.status(200).send({heatingInfo});
    }
});

// get state of the switch for the heating for the specified area, On or Off
router.get('/:areaId/switch', (req, res) => {
    const area = req.params.areaId;
    console.log(`HeatingAPI: Http GET(:/${area}/switch) called`);
    //res.status(200).send({ message: `HeatingAPI: Http GET(:/${area}/switch) called` });
    if(1 == area){
        const heatingSwitchState = DBApi.getDownStairsSwitchStatus();
        res.status(200).send({ heatingSwitchState });
    }
    else{
        const heatingSwitchState = DBApi.getUpStairsSwitchStatus();
        res.status(200).send({ heatingSwitchState });
    }
});

// get temperature set point for the heating in the specified area
router.get('/:areaId/setpoint', (req, res) => {
    const area = req.params.areaId;
    console.log(`HeatingAPI: Http GET(:/${area}/setpoint) called`);
    //res.status(200).send({ message: `HeatingAPI: Http GET(:/${area}/setpoint) called` });
    if(1 == area){
        const heatingSetPoint = DBApi.getDownStairsSetPoint();
        res.status(200).send({ heatingSetPoint });
    }
    else{
        const heatingSetPoint = DBApi.getUpStairsSetPoint();
        res.status(200).send({ heatingSetPoint });
    }
});

// Turn on/off the heading for the specified area
router.put('/:areaId/switch', (req, res) => {
    const area = req.params.areaId;
    const command = req.body;
    console.log(`HeatingAPI: Http PUT(:/${area}/switch) called with command: ${command.switchCommand}`);
    //res.status(200).send({ message: `HeatingAPI: Http PUT(:/${area}/switch) called with command: ${command.switchCommand}` });
    if(1 == area){
        DBApi.setDownStairsSwitchStatus(command.switchCommand);
    }
    else{
        DBApi.setUpStairsSwitchStatus(command.switchCommand);
    }
    res.status(200).send();
});

// Set the tempaerature set point for the specified area
router.put('/:areaId/setpoint', (req, res) => {
    const area = req.params.areaId;
    const setpoint = req.body;
    console.log(`HeatingAPI: Http PUT(:/${area}/setpoint) called with a requested temperature: ${setpoint.temperature}`);
    //res.status(200).send({ message: `HeatingAPI: Http PUT(:/${area}/setpoint) called with a requested temperature: ${setpoint.temperature}` });
    if(1 == area){
        DBApi.setDownStairsSetPoint(setpoint.temperature);
    }
    else{
        DBApi.setUpStairsSetPoint(setpoint.temperature);
    }
    res.status(200).send();
    //res.status(200).send({ message: `HeatingAPI: Http PUT(:/${area}/setpoint) called with a requested temperature: ${setpoint.temperature}` });
});


export default router;
