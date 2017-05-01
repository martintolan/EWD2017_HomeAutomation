import express from 'express';
import DBApi from './DBApi';

const router = express.Router();


//get all water usage information
router.get('/', (req, res) => {
    console.log(`WaterAPI: Http GET(/) called; Getting all lights information.`);
    const waterInfo = DBApi.getWaterInfo();
    res.status(200).send({waterInfo});
});

export default router;
