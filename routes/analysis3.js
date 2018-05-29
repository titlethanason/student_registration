var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis3",middleware.isLoggedInAdmin,function(req,res){
  var subject = [];
  db.query("SELECT s.department as department , count(s.department) as cnt FROM student s , enrollment e WHERE e.dropStatus = 1 AND e.stdID = s.stdID GROUP BY s.department",function(err,results,fields){
    for(var i =0; i< results.length ;i++){
      const temp = {depart : results[i].department , count : results[i].cnt}
      subject.push(temp)
    }
      console.log(subject);
      subjectJSON = JSON.stringify(subject);
      res.render("analysis3",{subject : subject,subjectJSON:subjectJSON});
  });
});
module.exports = router;
