//importing modules
const notes=require('./notes.js');
var age=notes.age;

var sum=notes.addnum(age,10);
console.log(sum);
//lodash
var _ = require('lodash');
var array=["person","person",1,2,3,"name","profession","age"];
var filter=_.uniq(array);
console.log(filter);
var type=_.isString('person');
console.log(type);


