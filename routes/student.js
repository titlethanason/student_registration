var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;

router.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

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
router.get("/addSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/addSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});

// changeSubject Remaining : GET , POST
router.get("/changeSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/changeSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});

// dropSubject Remaining : GET , POST
router.get("/dropSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/dropSubject",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});

// studyTable Remaining : GET 
router.get("/studyTable",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});

// examTable Remaining : GET 
router.get("/examTable",authenMiddlewareStd(),function(req,res){
        res.redirect("/");// edit here
});

function authenMiddlewareStd () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated() && req.user.role == "student"){
            return next();
        } 
        console.log("Error userrole, try to request student path");
	    res.redirect('/login')
	}
}

module.exports = router;