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

// Welcome Remaining : Student , Teacher , TA
router.get("/",authenMiddleware(),function(req,res){
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

// Info Remaining : Student(GET,POST) , Teacher , TA
router.get("/info",authenMiddleware(),function(req,res){
    if(req.user.role == "student"){
        res.redirect("/"); //edit here
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
router.post("/info",authenMiddleware(),function(req,res){
    if(req.user.role == "student"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error POST request in info not student");
        res.redirect("/");
    }
});

// teachTable Remaining : Teacher , TA
router.get("/teachTable",authenMiddleware(),function(req,res){
    if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else if(req.user.role == "ta"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error userrole in teachTable ");
        res.redirect("/");
    }
})

// stdList Remaining : Teacher , TA
router.get("/stdList",authenMiddleware(),function(req,res){
    if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else if(req.user.role == "ta"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error userrole in stdList ");
        res.redirect("/");
    }
})

// stdRecord Remaing : Teacher 
router.get("/stdRecord",authenMiddleware(),function(req,res){
    if(req.user.role == "teacher"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error userrole in stdRecord ");
        res.redirect("/");
    }
})
    
//Login & Logout
router.get("/login",function(req,res){
    if(req.isAuthenticated())
        res.redirect('/');
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
    res.redirect('/');
});

function authenMiddleware () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.redirect('/login')
	}
}

module.exports = router;