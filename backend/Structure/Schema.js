import mongoose from 'mongoose';
const Schema=new mongoose.Schema({

     title:{
        type:String,
        required:true,
        maxlength:100,
        trim:true,
     },
     description:{
        type:String,
        required:true
     },
     duedate:{
        type:Date,
        required:true
     },
     priority:{
        type:String,
        enum:["low","medium","high","urgent"],
        default:"medium"
     },
     status:{
        type:String,
        enum:["To Do", "In Progress", "Review", "Completed"],
        default:"To Do"
     },
      creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedToId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },


},{timestamps:true})
export default mongoose.model("Schema1",Schema);