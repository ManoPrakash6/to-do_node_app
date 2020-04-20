// JavaScript source code
var express = require('express');
require('./config');
//Add a new reference to a new Express instance
var app = express();

/*app.get('/', function (req, res) {
    res.send('Hello world!');
});*/

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});

app.set('view engine', 'ejs');

//For accessing config.json values
var  nconf = require('nconf');
/*app.get('/', function (req, res) {
    res.render('index');
})*/

/*app.post('/addItem', function (req, res) {
    res.render('index')
});*/

//use body-parser to retrieve key-value pairs stored on the req-body object
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var task = [];

//To perform on '/' route
app.get("/", function (req, res) {
    res.render("index", { task: task , completed: complete }); 
    var link = nconf.get('link');
    console.log("link is " + link);
});

//To perform on '/addTask' route
app.post('/addTask', function (req, res) {
    var newTask = req.body.newTask;
    task.push(newTask);
    console.log("Added task " + newTask);
    res.redirect("/");
});

//To perform on '/removeTask' route

var complete = [];
app.post('/removeTask', function (req, res) {
    console.log('**');
    
    var completeTask = req.body.check;
    console.log(typeof completeTask);
    if (typeof completeTask === "string")
    {
        console.log('string');
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    }
    else if (typeof completeTask === "object")
    {
        console.log('object');
        for (var i = 0; i < completeTask.length; i++)
        {
            //Add each task to the set of completed tasks
            complete.push(completeTask[i]);
            
            //remove the task from the set of tasks
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    console.log(complete);
    res.redirect("/");
});

app.get('/poc', function (req, res) {
    //var html = require('html');
    res.render("poc.ejs");
});

app.get('/redirect/xfr', function (req, res) {
   console.log("In redirect/xfr link");
   var setup_link = nconf.get('xfrRedirectURL');
   console.log("setup url is " + setup_link);
   res.redirect(setup_link);
});