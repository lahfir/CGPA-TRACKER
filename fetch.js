const mongoose = require("mongoose");
var DeptName = "EEE";
const Schema = new mongoose.Schema(
  {
    Subject: { type: String },
    Credit: { type: Number },
    Semester: { type: Number },
  },
  { collection: DeptName }
);

var model = mongoose.model(DeptName, Schema, DeptName);
module.exports = model;