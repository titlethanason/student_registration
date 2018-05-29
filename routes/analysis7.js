var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

router.get("/analysis7",middleware.isLoggedInAdmin,function(req,res){
    db.query("SELECT a.provience , count(*) as cnt FROM student s, address a WHERE a.addressID = s.addressRegis GROUP BY a.provience ORDER BY cnt DESC",function(err,results){
        if(err) throw err;
        var an = [];
        for(var i=0;i<results.length;i++){
            const temp = {
                prov: results[i].provience,
                count: results[i].cnt
            }
            an.push(temp);
        }
        var plotJSON = JSON.stringify(an);
        res.render("analysis7",{plot:an,plotJSON:plotJSON});
    });
});

module.exports = router;