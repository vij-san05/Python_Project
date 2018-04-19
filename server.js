var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var port = 3000;

var app = express();



//view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);


//Set static folder
app.use(express.static(path.join(__dirname,'client')));


//body parese middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('./',index);
app.use('./api',tasks);
app.listen(port, function(){
    console.log('server start on '+ port);
});
