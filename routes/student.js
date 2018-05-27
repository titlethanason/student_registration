var express = require("express");
var async = require("async");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");


// addSubject Remaining : GET , POST
router.get("/addSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/addSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// changeSubject Remaining : GET , POST
router.get("/changeSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/changeSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// dropSubject Remaining : GET , POST
router.get("/dropSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});
router.post("/dropSubject",middleware.isLoggedInStudent,function(req,res){
        res.redirect("/");// edit here
});

// studyTable Remaining : GET 
router.get("/studyTable",middleware.isLoggedInStudent,function(req,res){
        var qmon = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Monday' AND stdID = ? ORDER BY sc.timeStart";
        var qfri = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Friday' AND stdID = ? ORDER BY sc.timeStart";
        var qtue = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Tuesday' AND stdID = ? ORDER BY sc.timeStart";
        var qwed = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Wednesday' AND stdID = ? ORDER BY sc.timeStart";
        var qthu = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Thursday' AND stdID = ? ORDER BY sc.timeStart";
        var qsat = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Saturdayday' AND stdID = ? ORDER BY sc.timeStart";
        var qsun = "SELECT * FROM schedule sc,enrollment e,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND  s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Sunday' AND stdID = ? ORDER BY sc.timeStart";

        db.query(qmon,[req.user.username] ,function(err, result) {
                if(err){
                    throw err;
                } else {
                        var obj = {};
                        obj = {mon: result};
                        db.query(qfri,[req.user.username],function(err2,result2){
                                if(err2) throw err2;
                                obj = {fri: result2};
                                db.query(qtue,[req.user.username],function(err3,result3){
                                        if(err3) throw err3;
                                        obj = {tue: result3};
                                        db.query(qwed,[req.user.username],function(err4,result4){
                                                if(err4) throw err4;
                                                obj = {wed: result4};
                                                db.query(qthu,[req.user.username],function(err5,result5){
                                                        if(err5) throw err5;
                                                        obj = {thu: result5};
                                                        db.query(qsat,[req.user.username],function(err6,result6){
                                                                if(err6) throw err6;
                                                                obj = {sat: result6};
                                                                db.query(qsun,[req.user.username],function(err7,result7){
                                                                        if(err7) throw err7;
                                                                        obj = {sun: result7};
                                                                        obj.mon = result;
                                                                        obj.fri = result2;
                                                                        obj.tue = result3;
                                                                        obj.wed = result4;
                                                                        obj.thu = result5;
                                                                        obj.sat = result6;
                                                                        obj.sun = result7;
                                                                        res.render("studyTable", obj);
                                                                }  );
                                                        }  );
                                                }  );
                                        }  );
                                }  );
                        });              
                }
            });
});

// examTable Remaining : GET 
router.get("/examTable",middleware.isLoggedInStudent,function(req,res){
        var qexammid = "SELECT sj.subjectCode,sj.subjectName,sj.dateMid,sj.starttimeMid,sj.endtimeMid,sj.roomMid,e.seatexamMid FROM schedule sc,enrollment e,section s,subject sj WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND sj.dateMid IS NOT NULL AND  s.subject = sj.subjectCode AND stdID = ? ORDER BY sj.dateMid,sj.starttimeMid";
        var qexamfinal = "SELECT sj.subjectCode,sj.subjectName,sj.dateFinal,sj.starttimeFinal,sj.endtimeFinal,sj.roomFinal,e.seatexamFinal FROM schedule sc,enrollment e,section s,subject sj WHERE sc.section = s.section AND sc.subject = s.subject AND s.section = e.subjectSec AND s.subject = e.subjectID  AND sj.dateFinal IS NOT NULL AND  s.subject = sj.subjectCode AND stdID = ? ORDER BY sj.dateFinal,sj.starttimeFinal";
        var obj2 = {};
        db.query(qexammid,[req.user.username],function(err,result){
                if(err) throw err;
                obj2 = {exmid: result};
                db.query(qexamfinal,[req.user.username],function(err2,result2){
                        if(err2) throw err2;
                        obj2 = {exfinal: result2};
                        obj2.exmid = result;
                        obj2.exfinal = result2;
                        res.render("examTable", obj2);
                });
        });
});

module.exports = router;