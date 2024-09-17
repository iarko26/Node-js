const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    voterCard:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','voter']
    },
    hasvoted:{
        type:Boolean,
        default:false
    }
    




    
})
module.exports=mongoose.model('User',userSchema);