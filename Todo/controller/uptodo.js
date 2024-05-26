//import the model
const Todo=require('../model/Todo');

//get a single todo
exports.updateTodo=async(req,res)=>{
    try{
const {id}=req.params;
const {title,description}=req.body;
const response=await Todo.findByIdAndUpdate({
    '_id':id,
},{
    title,
    description,
    
uptadeddAt:Date.now()

}






);
res.status(200).json({success:true,data:response,Message:'Todo updated successfully' });






    }


    
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}