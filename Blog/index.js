const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 4001;
app.use(express.json());
const blogroute=require('./Routes/blogs');
app.use('/api/v1',blogroute);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);

});
const dbconnect=require('./Config/database');
dbconnect();
app.get('/',(req,res)=>{
    res.send('Welcome to the Blog app');
});