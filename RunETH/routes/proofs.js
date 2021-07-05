const {Router} = require('express');
const {apiKey, apiSecret} = require('../config.js');

const router = Router();

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(apiKey, apiSecret);

const filters = {
    status: 'pinned',
    pageLimit: 10
}

router.get('/proofs', async(req, res) => {
    try {
        const list = await pinata.pinList(filters);
        // if(!list) {
        //     throw new Error("Cannot retrieve uploads");
        // }

        if(!list) {
            return res.status(404).json({
                message: "No list found!"
            });
        }
        res.status(200).json(list);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.post('/proofs', async(req, res) => {
    const {filePathClient, nameClient} = req.body;
    const sourcePath = filePathClient;
    const options = {
        pinataMetadata: {
            name: nameClient
        },
        pinataOptions: {
            cidVersion: 0
        }
    }
    try {
        let uploaded = await pinata.pinFromFS(sourcePath, options);
        // if(!uploaded) {
        //     throw new Error("Cannot upload your file");
        // } 
        res.status(200).json(uploaded);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;