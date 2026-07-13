// const fs = require('fs');
//  const first = fs.readFileSync('./content/first.txt','utf8') ;
//  const second = fs.readFileSync('./content/second.txt','utf8');

const {readFileSync,writeFileSync, write} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first);
 writeFileSync('./content/result-sync',`here is the result: ${first},${second}`,{flag:'a'}
    
 )
 console.log('done the task');
 console.log('start new task');
