// GLOBALS - no window!!

//__dirname - path to current directory
//__filename - file name
//require - function to use modules(commonjs)
//module - info about current module(file)
//process -info about env where the program will executed

console.log(__dirname);
setInterval(() =>{
console.log('hello world');
},1000);
setTimeout(() =>{
    console.log('hi sameer');
},2500)
