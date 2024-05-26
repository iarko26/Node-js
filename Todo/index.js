//create a server
const express = require('express'); //import express
const app = express(); //create an instance of express

require('dotenv').config(); //to load the env file
const PORT= process.env.PORT || 4000; //set the port


//middleware json parse to req.body
app.use(express.json());
//import routes from routes folder
const  todos=require('./Routes/todos');
app.use('/api/v1',todos);

//start the server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);

});
//connect to the database
const dbconnect=require('./config/database');
dbconnect();
//defaultroute
app.get('/',(req,res)=>{
    res.send('Welcome to the todo app');
});