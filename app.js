const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;

    console.log(firstname,lastname,email);
});

app.listen(3000,function(){
    console.log("server is running at : 3000");
});