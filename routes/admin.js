var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

// editTeacher Remaining : GET , POST
router.get("/editTeacher",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});
router.post("/editTeacher",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});

// editTA Remaining : GET , POST
router.get("/editTA",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});
router.post("/editTA",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});

// editSubjectAdmin Remaining : GET , POST
router.get("/editSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});
router.post("/editSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
        res.redirect("/");// edit here
});

// addTeacher Remaining : GET , POST
router.get("/addTeacher",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/addTeacher",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

// addTA Remaining : GET , POST
router.get("/addTA",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/addTA",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

// addSubjectAdmin Remaining : GET , POST
router.get("/addSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/addSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

// dropTeacher Remaining : GET , POST
router.get("/dropTeacher",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropTeacher",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

// dropTA Remaining : GET , POST
router.get("/dropTA",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropTA",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

// dropSubject Remaining : GET , POST
router.get("/dropSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});
router.post("/dropSubjectAdmin",middleware.isLoggedInAdmin,function(req,res){
    res.redirect("/");// edit here
});

module.exports = router;