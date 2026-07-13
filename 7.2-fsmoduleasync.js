const {readFile,writeFile} = require('fs');
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=> {
if(err){
    console.log(err);
    return
}
const first = result;
readFile('./content/second.txt','utf8',(err,result)=> {
if(err){
    console.log(err);
    return
}
const second = result;
writeFile('./content/result-async',`here is the result: ${first},${second}`,(err,result)=>{
if(err){
    console.log(err);
    return;
   
}
 console.log('done the task')
// console.log(result)
})

})})
console.log('start new task')