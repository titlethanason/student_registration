var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis11",middleware.isLoggedInAdmin,function(req,res){
    var subject = [];
    db.query("SELECT e.subjectID,s.department , count(s.department) as cnt FROM student s , enrollment e WHERE e.stdID = s.stdID GROUP BY s.department,e.subjectID ORDER BY e.subjectID",function(err,results,fields){
        for(var i =0; i< results.length ;i++){
            const temp = {
                subjectid : results[i].subjectID , 
                dept : results[i].department,
                count: results[i].cnt
            }
            subject.push(temp);
        }
        console.log(subject);
        subjectJSON = JSON.stringify(subject);
        res.render("analysis11",{subject:subject,subjectJSON:subjectJSON});
    });
});
module.exports = router;
