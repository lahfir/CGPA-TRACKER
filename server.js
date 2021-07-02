const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
var sample = require("./fetch");

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

sample.find({ Semester: "2" }, function (err, docs) {
  if (err) console.log("error");
  else console.log(docs);
});
