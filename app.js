const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',require('./routes/User/index'));

mongoose.connect('mongodb://'+process.env.mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/',function(req,res){
    res.send("Welcome To Main Board");
});

app.listen(3000, function(){
    console.log("App listening on port 3000");
});
