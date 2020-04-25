let path = require('path')
let aylien = require("aylien_textapi");
// set aylien API credentias
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else,
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
// setting express app
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('dist'))
// setting up the cors origin


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8081
app.listen(port, function () {
    console.log(`Example app listening on ${port} !`)
    console.log(`Your API key is ${process.env.API_KEY}`);

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
