//HTTP

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url ==='/'){
        res.end('welcome to my first web');
    }
    else if(req.url ==='/about'){
        res.end('here is our short history');
    }
   else{ res.end(`<h1>oops!</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href='/'>back home</a>`);}
// res.write('welcome to my first web');
// res.end('hello sameer')
});
server.listen(3000);