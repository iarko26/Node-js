const moongoose=require('mongoose');
const likeSchema=new moongoose.Schema({
    post:{
        type:moongoose.Schema.Types.ObjectId, //this is the id of the blog post
        ref:"Post",//this is the model name


    },
    user:{
        type:String,
        required:true


    },
    

});
module.exports=moongoose.model('like',likeSchema);