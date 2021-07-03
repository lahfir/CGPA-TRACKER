const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
var sample = require("./fetch");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
var Sem = 1;
require("dotenv").config();

const db = mongoose.connect(process.env.CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// mongoose.connection.on("open", function (ref) {
//   mongoose.connection.db.listCollections().toArray(function (err, names) {
//     for (var i = 0; i < names.length; i++) {
//       console.log(names[i]);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

async function findOne() {
  sample.find({ Semester: Sem }, function (err, docs) {
    if (err) console.log(err);
    else console.log(docs);
  });
}
findOne();

app.post("/api/selectDept", async (req, res) => {
  var Val = req.body.Val;
});
