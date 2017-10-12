const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./src/server/index');
const tweets = require('./src/server/tweets');
const port = 3000;
const app = express();

//View Engine
app.set('views', path.join(__dirname, './src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tweets);

app.listen(port, () => {
    console.log('Server started on port ' + port)
})