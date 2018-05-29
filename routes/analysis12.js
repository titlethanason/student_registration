var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");


router.get("/analysis12",middleware.isLoggedInAdmin,function(req,res){
    db.query("SELECT subjectID , avg(grade) as average_grade FROM enrollment GROUP BY subjectID HAVING avg(grade) IS NOT NULL ",function(err,results){
        if(err) throw err;
        var an = [];
        for(var i=0;i<results.length;i++){
            const temp = {
                id: results[i].subjectID,
                avgg: results[i].average_grade
            }
            an.push(temp);
        }
        var plotJSON = JSON.stringify(an);
        res.render("analysis12",{plot:an,plotJSON:plotJSON});
    });
});

module.exports = router;