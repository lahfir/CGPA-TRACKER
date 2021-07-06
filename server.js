const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const sample = require("./fetch");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
var Sem = 5;
require("dotenv").config();

async function ConnectDb() {
  const db = await mongoose.connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

ConnectDb();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

async function findOne(DeptName) {
  sample.DeptName = DeptName;
  await sample.find({ Semester: Sem }, function (err, docs) {
    if (err) console.log(err);
    else console.log(docs);
  });
}

app.post("/api/selectDept", async (req, res) => {
  var Val = req.body.Val;
  var Sem = req.body.Sem;
  console.log(Val, Sem);
});
