const moongoose=require('mongoose');
const postschema=new moongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    

    likes:[{
        type:moongoose.Schema.Types.ObjectId,
        ref:"like"


    }],
    comments:[{
        type:moongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]


    

});
module.exports=moongoose.model('Post',postschema);