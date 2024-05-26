//import the model
const Todo=require('../model/Todo');

//get a single todo
exports.deleteTodo=async(req,res)=>{
    try{
const {id}=req.params;


const response=await Todo.findByIdAndDelete({
    '_id':id,
    
}
);

res.status(200).json({success:true,data:response,Message:'Todo deleted successfully' });


}





    
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}