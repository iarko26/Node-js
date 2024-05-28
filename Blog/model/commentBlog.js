const moongoose=require('mongoose');
const commentschema=new moongoose.Schema({
    post:{
        type:moongoose.Schema.Types.ObjectId, //this is the id of the blog post
        ref:"Post",//this is the model name


    },
    user:{
        type:String,
        required:true


    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }

    


});
module.exports=moongoose.model('Comment',commentschema);