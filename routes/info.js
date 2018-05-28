var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

// Info Remaining : Student(GET,POST) , Teacher , TA
router.get("/info",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "student"){
        res.render("info");
    }
    else if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else if(req.user.role == "ta"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error userrole in info");
        res.redirect("/");
    }
});
router.post("/info",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "student"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error POST request in info not student");
        res.redirect("/");
    }
});

module.exports = router;