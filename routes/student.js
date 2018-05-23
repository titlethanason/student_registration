var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

//Temporary register Remaining : GET , POST
router.get("/regis",function(req,res){
    if(req.isAuthenticated())
        res.redirect('/');
    else
        res.render("regis");
});
router.post("/regis",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query("INSERT INTO users VALUES(?,?,?)",[username,hash,role],function(err,results){
            if(err) throw err;
            req.login(username,function(err){
                if(err) throw err;
                res.redirect("/");
            });
        })
    })
});

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