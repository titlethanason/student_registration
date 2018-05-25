var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");


// addSubject Remaining : GET , POST
router.get("/addSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/addSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// changeSubject Remaining : GET , POST
router.get("/changeSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/changeSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// dropSubject Remaining : GET , POST
router.get("/dropSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/dropSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// studyTable Remaining : GET 
router.get("/studyTable",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// examTable Remaining : GET 
router.get("/examTable",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

module.exports = router;