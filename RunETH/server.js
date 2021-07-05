const express = require('express');
const pinataSDK = require('@pinata/sdk');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.use(morgan('tiny'));

const {port, apiKey, apiSecret} = require('./config');
const testAuthenticationRoutes = require('./routes/testAuthentication.js');
const proofRoutes = require('./routes/proofs.js');

const pinata = pinataSDK(apiKey, apiSecret);

// Testing whether I can call the Pinata API or not?

// pinata.testAuthentication().then((result) => {
//     console.log("Yayy!! Good first step!!");
// }).catch((err) => {
//     console.log(err);
// });

// const filters = {
//     status: 'pinned',
//     pageLimit: 10
// }

// pinata.pinList(filters).then((result) => {
//     //handle results here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });

// Testing whether I can upload files to pinata.cloud or not

// const sourcePath = "C:\\Users\\Rahul\\Desktop\\Articles_musings\\idea_diagram.PNG";
// const options = {
//     pinataMetadata: {
//         name: "On-Chain Drona Working - Explained - Duplicate"
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// }

// pinata.pinFromFS(sourcePath, options).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

app.use('/api/testAuthentication', testAuthenticationRoutes);
app.use('/api', proofRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(port, () => {
    console.log("Express is running on port: " + port);
});