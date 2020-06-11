const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

const getReport    =require("./routes/report")

app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/peopleDB",{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })

app.use("/report",getReport);

app.listen(3000,()=>{
    console.log("Server is running");
})


