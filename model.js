const mongoose = require("mongoose");
class Model{
    constructor(DeptName,Schema){
        try{
            
        return this.model = mongoose.model(DeptName,Schema, DeptName);
        }
        catch(err){
            return this.model = mongoose.model(DeptName);
        }
    }
    

}

module.exports = Model;