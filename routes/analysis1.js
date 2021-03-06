var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis1",middleware.isLoggedInAdmin,function(req,res){
    var subject = [];
    db.query("SELECT s.subjectID as subjectID,max(s.cnt) as cnt FROM (SELECT subjectID , count(subjectID) as cnt FROM enrollment WHERE datetime BETWEEN '2018-01-01' AND '2018-12-31' GROUP BY subjectID ORDER BY cnt DESC) s",function(err,results,fields){
        var temp = {id : results[0].subjectID , count : results[0].cnt}
        subject.push(temp);
        console.log(temp);
        console.log(subject);
        db.query("SELECT subjectName FROM subject WHERE subjectCode = ?",[results[0].subjectID],function(err,results,fields){
            var temp2 = {name : results[0].subjectName}
            subject.push(temp2);
            res.render("analysis1",{subject : subject});
        });
    });
});

module.exports = router;
