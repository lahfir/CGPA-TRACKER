const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
var sample = require("./fetch");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
var Sem = 1;
require("dotenv").config();

var db = mongoose.connect(process.env.CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.static("Public"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

async function findOne() {
  await mongoose.connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  sample.find({ Semester: Sem }, function (err, docs) {
    if (err) console.log(err);
    else console.log("it works");
  });
}
findOne();

app.post("/api/selectDept", async (req, res) => {
  var Val = req.body;
  console.log(Val);
});
