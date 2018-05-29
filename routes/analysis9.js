var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis9",middleware.isLoggedInAdmin,function(req,res){
    var subject = [];
    db.query("SELECT s.stdID , s.department , t.grade FROM student s ,  (SELECT stdID , avg(grade) as grade FROM enrollment GROUP BY stdID) t WHERE s.stdID = t.stdID AND t.grade > 3.6",function(err,results,fields){
        for(var i =0; i< results.length ;i++){
            const temp = {id : results[i].stdID , depart : results[i].department ,grade : results[i].grade}
            subject.push(temp);
        }
        console.log(subject);
        var subjectJSON = JSON.stringify(subject);
        res.render("analysis9",{subject:subject,subjectJSON:subjectJSON});
    });
});

module.exports = router;