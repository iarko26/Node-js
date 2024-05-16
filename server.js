//create a server
const express = require('express')
const app = express(); //create an instance of express

app.get('/', function (req, res) {
  res.send('Hello thsi is node js');
})
app.get('/about',function(req,res){
    res.send('This is about page');
})
app.get('/tech',function(req,res){
    var techstack={
        frontend:'React',
        backend:'NodeJS',
        database:'MongoDB',
        isdatabase:'Yes',
        isfrontend:'Yes',

    }
    res.send(techstack);
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

//to shut down the server press ctrl+c
//to restart the server press up arrow and enter
//port number 3000

