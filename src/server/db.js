const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const Tweet = require('./tweet.model');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tweets'
});

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

connection.connect((error) => {
    if (!!error) { console.log('Error in connection to db') } else { console.log('Connected to db') }
});

router.get('/favouriteTweets', (req, res) => {
    connection.query("SELECT * FROM favouriteTweets", (error, rows, fields) => {
        if (!!error) {
            console.log('Error in  GET');
        } else {
            console.log('Success in GET');
            res.json(rows);
        }
    });
});

router.post('/favouriteTweet', function(req, res, next) {
    const favorite = new Tweet(
        req.body.text,
        req.body.created_at,
        req.body.favorite_count,
        req.body.user.name
    );

    connection.query('INSERT INTO favouriteTweets SET ?', favorite, function(err, result) {
        if (err) throw err;
        console.log("Success in POST");
    });
})

module.exports = router;