var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");

// Info Remaining : Student(GET,POST) , Teacher , TA
router.get("/info",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "student"){
        var qinfo = "SELECT * FROM student WHERE stdID = ?";
        db.query(qinfo,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {tinfo: result};
            obj.tinfo = result;
            
            db.query("SELECT picPhoto FROM student WHERE stdID = ?",[req.user.username],function(err,results,fields){
                console.log(results[0].picPhoto);
                obj.tinfo[0].picPhoto = results[0].picPhoto;
                db.query("SELECT a.allergy as allergy , c.disease as disease , d.disability as disability FROM allergy a , congenitaldisease c , disability d WHERE a.stdID = c.stdID AND c.stdID = d.stdID AND d.stdID = ?",
                [req.user.username],function(err,results,fields){
                    console.log(obj.tinfo[0]);
                    obj.tinfo[0].allergy = results[0].allergy;
                    obj.tinfo[0].disease = results[0].disease;
                    obj.tinfo[0].disability = results[0].disability;
                    db.query("SELECT a.* FROM address a, student s WHERE a.addressID = s.addressRegis AND s.stdID = ?",[req.user.username],function(err,results){
                        obj.tinfo[0].homeNORegis = results[0].homeNO;
                        obj.tinfo[0].alleyRegis = results[0].alley;
                        obj.tinfo[0].streetRegis = results[0].street;
                        obj.tinfo[0].subdistrictRegis = results[0].subdistrict;
                        obj.tinfo[0].districtRegis = results[0].district;
                        obj.tinfo[0].provienceRegis = results[0].provience;
                        obj.tinfo[0].postcodeRegis = results[0].postcode;
                        obj.tinfo[0].homeNORegis = results[0].homeNO;
                        res.render("info",obj);
                    });

                });
            })
        });
    }
    else if(req.user.role == "teacher"){
        var qinfo = "SELECT * FROM teacher WHERE teacherID = ? ";
        db.query(qinfo,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {tinfo: result};
            obj.tinfo = result;
            res.render("infoTeacher",obj);
        });
    }
    else if(req.user.role == "ta"){
        var qinfo = "SELECT * FROM teacherassistant WHERE ID = ? ";
        db.query(qinfo,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {tinfo: result};
            obj.tinfo = result;
            res.render("infoTeacher",obj);
        });
    }
    else{
        console.log("Error userrole in info");
        res.redirect("/");
    }
});
router.post("/info",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "student"){
        res.redirect("/"); //edit here
    }
    else{
        console.log("Error POST request in info not student");
        res.redirect("/");
    }
});

module.exports = router;