let path = require('path')
let aylien = require("aylien_textapi");
let bodyParser = require('body-parser');
let projectData = {}


// set aylien API credentias
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else,
//   just make sure to make that change universally!
//https://api.aylien.com/api/v1/sentiment
let textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
// setting express app
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()

// setting up the cors origin and middle ware
app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})


app.get('/test/:word', function (req, res) {
    let word = req.params.word;

    textapi.sentiment({
            'text': word
        }, function (error, response) {
            if (error === null) {
                res.send(response);

            }
        }
    );


})
// designates what port the app will listen to for incoming requests
const port = 8081
app.listen(port, function () {
    console.log(`Example app listening on ${port} !`);


})
/*curl https://api.aylien.com/api/v1/sentiment \
   -H "X-AYLIEN-TextAPI-Application-Key: YOUR_APP_KEY" \
   -H "X-AYLIEN-TextAPI-Application-ID: YOUR_APP_ID" \
   -d mode="tweet" \
   -d text="John+is+a+very+good+football+player"*/
