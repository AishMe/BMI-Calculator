const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/', function(req, res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var bmi = w/(h*h);

    res.send("Your BMI is: "+bmi);
});

app.listen(port, function(){
    console.log(`Server started on the port ${port}`);
});