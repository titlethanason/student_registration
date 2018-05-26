var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");


//Temporary register Remaining : GET , POST
router.get("/register",function(req,res){
    res.redirect("/");// edit here
});
router.post("/register",function(req,res){
    res.redirect("/");// edit here
});

//Temporary register 
router.get("/regis",function(req,res){
    if(req.isAuthenticated())
        res.redirect('/');
    else
        res.render("regis");
});
router.post("/regis",function(req,res){
    console.log(jsonByIndex(req.body,1));
    console.log(jsonValue(req.body,username));
    console.log(jsonLength(req.body));
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query("INSERT INTO users VALUES(?,?,?)",[username,hash,role],function(err,results){
            if(err) res.redirect('back');
            req.login(username,function(err){
                if(err) throw err;
                res.redirect("/");
            });
        })
    })
});

function jsonValue(obj,key){
    return obj[key];
}
function jsonLength(obj){
    return Object.keys(obj).length;
}
function jsonByIndex(obj, index) {
    return obj[Object.keys(obj)[index]];
}

module.exports = router;