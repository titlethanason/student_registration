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

// editTeacher Remaining : GET , POST
router.get("/editTeacher",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/editTeacher",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});

// editTA Remaining : GET , POST
router.get("/editTA",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/editTA",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});

// editSubject Remaining : GET , POST
router.get("/editSubject",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});
router.post("/editSubject",authenMiddlewareAdmin(),function(req,res){
        res.redirect("/");// edit here
});

// addTeacher Remaining : GET , POST
router.get("/addTeacher",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/addTeacher",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

// addTA Remaining : GET , POST
router.get("/addTA",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/addTA",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

// addSubject Remaining : GET , POST
router.get("/addSubject",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/addSubject",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

// dropTeacher Remaining : GET , POST
router.get("/dropTeacher",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropTeacher",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

// dropTA Remaining : GET , POST
router.get("/dropTA",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropTA",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

// dropSubject Remaining : GET , POST
router.get("/dropSubject",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropSubject",authenMiddlewareAdmin(),function(req,res){
    res.redirect("/");// edit here
});

function authenMiddlewareAdmin () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated() && req.user.role == "admin"){
            return next();
        } 
        console.log("Error userrole, try to request admin path");
	    res.redirect('/login')
	}
}

module.exports = router;