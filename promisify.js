const {readFile} = require('fs');
const {promisfy} = require('util');

readFile('./callback.js','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(data);
})