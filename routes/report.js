const express = require("express")
const router = express.Router()
const request = require("request");


const Person = require("../models/user");
const generateReport = require("../controller/index");

// Request variables
let results = "10";
const url =  'https://randomuser.me/api/?results=' + results;

router.get("/",(req,res,next)=>{
    request.get(url,function(request,response,data){

        let body = JSON.parse(data);
    
        let peopleArray = body.results

        peopleArray.forEach(person=>{
            let peopleObj = new Person(person);
            peopleObj.save((err,p)=>{
                if (err){
                    console.log(err);
                }
            });
                 
        })

        generateReport()
        .then(data => {
            let finalObj = data;  
            res.render("report-view",{Users:finalObj})

        })
    })
})

module.exports = router
