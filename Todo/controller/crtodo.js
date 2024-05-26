//import the model
const Todo=require('../model/Todo');


//define the route handlers
exports.createTodo=async(req,res)=>{
    try{
        //extract the title and description from the request body
        //data fetched from the client
        const {title,description}=req.body; 
        //create a todo object to insert into the database
        //data to be inserted into the database
   const response=await Todo.create({title,description});
   //send the response back to the client
   res.status(200).json({success:true,data:response,Message:'Todo inserted successfully' });



    }


    
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}