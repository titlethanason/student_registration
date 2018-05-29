var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");


router.get("/analysis4",middleware.isLoggedInAdmin,function(req,res){
    var subject = [];
    db.query("SELECT e.subjectID , ceil(DATEDIFF(CURRENT_DATE,s.dateFirstenroll)/365) as stdYear ,count(*) as cnt FROM student s , enrollment e WHERE e.stdID = s.stdID GROUP BY e.subjectID , stdYear ORDER BY cnt DESC",function(err,results,fields){
        for(var i =0; i< results.length ;i++){
            const temp = {id : results[i].subjectID , year : results[i].stdYear ,count : results[i].cnt}
            subject.push(temp);
        }
        console.log(subject);
        res.render("analysis4",{subject:subject})
    });
});

module.exports = router;