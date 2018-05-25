var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/orders",function(req,res){
    var temp = [{name : "AJAX"},{id : 111}];
    console.log("send fuck you !!!!!");
    console.log(req.query.ajaxData[0]);
    res.send(temp);
})

// Welcome Remaining : Student , Teacher , TA
router.get("/",middleware.isLoggedInWelcome,function(req,res){
    console.log(req.user);
    console.log(req.isAuthenticated());
    var users = [];
    db.query("SELECT * FROM users WHERE role = ? ",[req.user.role], function (err, results, fields) {
        if (err) throw err;
        for(var i = 0 ;i < results.length;i++){
            const temp = {
                username: results[i].username,
                role : results[i].role
            }
            users.push(temp)
        }
        res.render("index",{u:users});
        });
});

// teachTable Remaining : Teacher , TA
router.get("/teachTable",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else if(req.user.role == "ta"){
        res.redirect("/"); //edit here
    }
    else{
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in teachTable ");
        res.redirect("/");
    }
});

// stdList Remaining : Teacher , TA
router.get("/stdList",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else if(req.user.role == "ta"){
        res.redirect("/"); //edit here
    }
    else{
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in stdList ");
        res.redirect("/");
    }
});

// stdRecord Remaing : Teacher 
router.get("/stdRecord",middleware.isLoggedIn,function(req,res){
    if(req.user.role != "teacher"){
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in stdRecord ");
        res.redirect("/"); //edit here
    }
    else{
        res.redirect("/"); //edit here
    }
});
    
//Login & Logout
router.get("/login",function(req,res){
    if(req.isAuthenticated())
        res.redirect('back');
    else
        res.render("login");
});
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/login' })
);
router.get('/logout',function(req,res){
    req.logout();
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;