const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 4000;
app.use(express.json());
require('./config/database')()
const user=require('./Routes/user');
app.use('/api/v1',user);
app.listen(PORT,()=>{
    console.log(`Server Running On Port at ${PORT}`)
})
