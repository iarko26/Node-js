//create a server
const express = require('express'); //import express
const app = express(); //create an instance of express
//routes
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
});
//use parse request body data in express  especially for post or put request
const bodyParser=require('body-parser');
//parse json data and add to req.body
app.use(bodyParser.json());
//post request
app.post('/api/cars',function(req,res){
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send('Car is created');

});

//put request
app.put('/api/cars',function(req,res)
{
    const{model,brand}=req.body;
    console.log(model);
    console.log(brand);
    res.send('Car is updated');


});


//delete request
app.delete('/api/cars',function(req,res){
    const{id}=req.body;
    console.log(id);
    res.send('Car is deleted');

});

















// get request with query parameters
app.get('/api/cars',(req,res)=>{
    const cars=[
        {id:1,name:'Audi',brand:'Audi'},
        {id:2,name:'BMW',brand:'BMW'},
        {id:3,name:'Mercedes',brand:'Mercedes'},
        {id:4,name:'Jaguar',brand:'Jaguar'},
    ];
    res.send(cars);
});



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

//to shut down the server press ctrl+c
//to restart the server press up arrow and enter
//port number 3000

