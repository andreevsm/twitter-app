const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./src/server/index');
const searchTweets = require('./src/server/tweets');
const favouriteTweets = require('./src/server/db');
const port = 3000;
const app = express();

app.set('views', path.join(__dirname, './src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', searchTweets);
app.use('/api', favouriteTweets)

app.listen(port, () => {
    console.log('Server started on port ' + port)
})