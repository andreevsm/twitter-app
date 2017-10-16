const express = require('express');
const router = express.Router();
const Twit = require('twit');
const config = require('./config')
const T = new Twit(config);
const params = {
    q: 'eCommerce video‏',
    count: 10,
    include_entities: true
};

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

router.get('/searchTweets', (req, res) => {
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