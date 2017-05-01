import express from 'express';
import DBApi from './DBApi';

const router = express.Router();


//get all posts
router.get('/', (req, res) => {
    //const posts = stubAPI.getAll();
    res.status(200).send({ message: "WaterAPI: Http GET() called" });
});

export default router;
