//fs
var fs=require('fs');
var os=require('os');
var user=os.userInfo();
var platform=os.platform();

console.log(user);
console.log(user.username);
console.log(platform);
fs.appendFile('greetings.txt','Hello '+user.username+'!\n',function(err){
    if(err){
        console.log('Unable to write to file');
    }
    else{
        console.log('Data written to file');
    }
});
console.log(fs);