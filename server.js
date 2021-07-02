const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
var sample = require("./fetch");
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
var Sem=1;

var db = mongoose.connect(
  "mongodb+srv://cgpatrack:cgpa24jun@cgpa.oc0rt.mongodb.net/CGPA_TRACKER",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.static("Public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function findOne(){
    await mongoose.connect('mongodb+srv://cgpatrack:cgpa24jun@cgpa.oc0rt.mongodb.net/CGPA_TRACKER', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    })
    sample.find({"Semester": Sem},function(err,docs){
        if(err)
            console.log(err);
        else
            console.log("it works");
    })
}
findOne();


app.post('/api/selectDept',async(req,res)=>{
    var Val = req.body
    console.log(Val)
})


