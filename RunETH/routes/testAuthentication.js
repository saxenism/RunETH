const {Router} = require('express');
const {apiKey, apiSecret} = require('../config.js');

const router = Router();

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(apiKey, apiSecret);

router.get('/', async(req, res) => {

    console.log('working');

    try {
        let isAuthenticated = await pinata.testAuthentication();
        if(!isAuthenticated) {
            throw new Error('Not Authenticated');
        }
        res.status(200).json(isAuthenticated);
        if(isAuthenticated) {
            console.log(isAuthenticated);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;