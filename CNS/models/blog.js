const mongoose = require("mongoose");
var {ObjectId}=mongoose.Schema.Types

const { Schema } = mongoose;
const postSchema = new Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    photo:{type:String,required:true},
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
}, {timestamps : true})

const Post = mongoose.model("Blog", postSchema);

module.exports = Post;
