//import the model
const Todo=require('../model/Todo');


//define the route handlers
exports.getTodo=async(req,res)=>{
    try{
       //fetch all the todos from the database
        const response=await Todo.find({});
        res.status(200).json({success:true,data:response,Message:'Todo fetched successfully' });




    }


    
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}
//get a single todo
exports.getSTodo=async(req,res)=>{
    try{
   //fetch a single todo from the database
const id=req.params.id;
const response=await Todo.findById({_id:id});

if(!response){
    res.status(404).json({success:false,data:'No todo found',Message:'Todo not found' });

}
res.status(200).json({success:true,data:response,Message:'Todo Single fetched successfully' });





    }


    
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}