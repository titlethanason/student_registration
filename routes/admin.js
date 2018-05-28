var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

// checkPay Remaining : GET , POST
router.get("/checkPay",middleware.isLoggedInAdmin,function(req,res){
    res.render("checkPay");
});
router.post("/ajaxCheckPay",middleware.isLoggedInAdmin,function(req,res){
    var stdID = req.body.chkpay;
    console.log("chkpay : "+req.body.chkpay);
    db.query("SELECT stdID,subjectID,subjectSec,paymentDate FROM enrollment WHERE paymentDate IS NULL AND stdID = ?",[stdID],function(err,results,fields){
        console.log(results);
        if(results[0] == undefined){
            res.send("YO!!!");
        }
        else{
            var obj = [];
            for(var i =0;i<results.length;i++){
                const temp = {
                    stdID : results[i].stdID,
                    subjectID : results[i].subjectID,
                    subjectSec : results[i].subjectSec,
                    paymentDate : results[i].paymentDate  
                }
                obj.push(temp);
            }
            res.send(obj);
        }});
});
router.post("/checkPay",middleware.isLoggedInAdmin,function(req,res){
    var stdID = req.body.stdID;
    db.query("UPDATE enrollment SET paymentDate = CURRENT_TIMESTAMP WHERE stdID = ?",[stdID],function(err,results,fields){
        if(err) throw err;
        else{
            req.flash("success","Done!!");
            res.redirect("checkPay");
        }
    });
});

router.get("/analysis1",middleware.isLoggedInAdmin,function(req,res){
    res.render("analysis1");
});

router.get("/mostDropSub",middleware.isLoggedInAdmin,function(req,res){
    db.query("SELECT subjectID , count(*) as cnt FROM enrollment WHERE dropStatus = 1 GROUP BY subjectID",function(err,results){

    });
});

module.exports = router;