const mongoose = require("mongoose");
const Model = require("./model");
// var DeptName = "EEE";
// console.log(DeptName);
class FetchModel {
  constructor(Dept_Name='EEE') {

    this.DeptName = Dept_Name;

    this.Schema = new mongoose.Schema(
      {
        Subject: { type: String },
        Credit: { type: Number },
        Semester: { type: Number },
      },
      { collection: this.DeptName }
    );
     this.model= new Model(this.DeptName,this.Schema)
    // this.model = mongoose.model(this.DeptName, this.Schema, this.DeptName);
  }
  

}
module.exports = FetchModel;
