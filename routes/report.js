const express = require("express")
const router = express.Router()
const request = require("request");


const Person = require("../models/user");

// Request variables
let results = "10";
const url =  'https://randomuser.me/api/?results=' + results;

router.get("/",(req,res,next)=>{
    request.get(url,function(request,response,data){
        
        // let maleAges = [0,0,0]        // <30, 30-50,>50
        // let femaleAges = [0,0,0]        // <30, 30-50,>50

        let body = JSON.parse(data);
        //console.log(body);
        
        let peopleArray = body.results

        peopleArray.forEach(person=>{
            let peopleObj = new Person(person);
            peopleObj.save((err,p)=>{
                if (err){
                    console.log(err);
                }
                else{
                    console.log("Person registered in dB");  
                }
            });
                 
        })
        
        setTimeout(()=>{
            Person.find({},user=>{
            console.log("User is ->");
            console.log(user);
        })}
        ,3000)



        res.render("report-view")

        
    })
})

module.exports = router





  // let nationality = person.nat;
        // let gender  = person.gender;
        // let age = person.dob.age
