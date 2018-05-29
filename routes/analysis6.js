var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis6",middleware.isLoggedInAdmin,function(req,res){
    var subject = [];
    db.query("SELECT subject , sum(numberStd) as cnt FROM section GROUP BY subject ",function(err,results,fields){
        for(var i =0; i< results.length ;i++){
            const temp = {id : results[i].subject , count : results[i].cnt}
            subject.push(temp);
        }
        console.log(subject);
        subjectJSON = JSON.stringify(subject);
        res.render("analysis6",{subject:subject,subjectJSON:subjectJSON});
    });
});
module.exports = router;