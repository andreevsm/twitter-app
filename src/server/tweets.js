// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'favouriteTweets'
// });

// connection.connect((error) => {
//     if (!!error) {
//         console.log('Error');
//     } else {
//         console.log('Connected')
//     }
// });

// app.get('/', (req, res) => {
//     connection.query("SELECT * FROM myFavouriteTweets", (error, rows, fields) => {
//         if (!!error) {
//             console.log('Error in  the query');
//         } else {
//             console.log('Success');
//             console.log(rows)
//         }
//     });
// });

// app.listen(1337);

const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


const Twit = require('twit');
const config = require('./config')
const T = new Twit(config);

const params = {
    q: 'Для этого мы готовы‏',
    count: 100,
    include_entities: false
};



// function searchedData(err, data, response) {
//     // console.log(data);
//     // tweets = data;
//     console.log(data)
// }

// favorites/list

router.get('/tweets', (req, res) => {

    T.get('search/tweets', params, (err, data, response) => {
        if (err) {
            res.send(data);
        }
        var tweets = data.statuses;
        var a = [];
        for (let i = 0; i < tweets.length; i++) {
            a.push(tweets[i]);
        }
        res.json(a)
    });
});

module.exports = router;