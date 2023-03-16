// const { create } = require('domain');
const Http = require('http');

const port = 5000;

const server = Http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.end(`
                <html>
                  <title> My first node app</title>
                   <body>
                   <h1>Welcome to my first node app</h1>
                   </body>
                </html>`
            );

            break;
        case '/admin':
            res.end('Welcome to admin page');
        break;

        case '/user':
            res.end('welcome to user page');
        break;

        default:
            res.end('No found');
        break;


    }
});

server.listen(port,()=>{
    console.log("Server is active");
})