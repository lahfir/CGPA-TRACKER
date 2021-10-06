const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const sample = require("./fetch");
const model = require("./model");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
require("dotenv").config();
var Semester;
const PORT = process.env.PORT || 3000;
async function ConnectDb() {
  const db = await mongoose.connect(process.env.CONNECT, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

ConnectDb();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

async function findOne(DeptName, Sem, res) {
  // sample.DeptName = DeptName;
  // console.log(sample)
  let obj = new sample(DeptName);
  // console.log(obj)
  await obj.model.find({ Semester: Sem }, function (err, docs) {
    if (err) console.log(err);
    else {
      res.send({ subjects: docs });
    }
  });
}

app.post("/api/selectDept", async (req, res) => {
  var Val = req.body.Val;
  var Sem = req.body.Sem;
  findOne(Val, Sem, res);
});
