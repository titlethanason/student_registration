var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysisMostDropSub",middleware.isLoggedInAdmin,function(req,res){
    db.query("SELECT subjectID , count(*) as cnt FROM enrollment WHERE dropStatus = 1 GROUP BY subjectID ORDER BY cnt DESC",function(err,results){
        if(err) throw err;
        var an = [];
        for(var i=0;i<results.length;i++){
            const temp = {
                x: results[i].subjectID,
                y: results[i].cnt
            }
            an.push(temp);
        }
        var plotJSON = JSON.stringify(an);
        res.render("analysisMostDropSub",{plot:an,plotJSON:plotJSON});
    });
});

module.exports = router;