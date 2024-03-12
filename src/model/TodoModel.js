const mongoose = require("mongoose");

const dataScema = mongoose.Schema({
  email:{type: String, require: true},
  title: { type: String, require: true },
  description: { type: String, require: true },
  status: { type: String, require: true },
  
},{timestamps:true ,versionKey: false}
);


const TodoModel = mongoose.model("todo" ,dataScema);

module.exports = TodoModel;
