// //file system, os, http, path, url, event

// // const fs = require('fs');
// const os = require('os');
// const path = require('path');
const http = require('http');
// // fs.writeFileSync('read.txt','Welcome to Techno NJR ');

// // fs.appendFileSync('read.txt','Hello Tr4 ');
// // fs.appendFileSync('read.txt','Welcome Back');
// // // let data= fs.readFileSync('read.txt');
// // // console.log(data.toString());
// // // fs.renameSync('read.txt','readwrite.txt');
// // fs.writeFile('read1.txt','Welcome to No-Sync' ,(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log('File written successfully');
// //     }
// // });

// // fs.readFile('read1.txt','utf-8',(err,data)=>{
// //     console.log(data);
// // });


// // fs.unlink('read1.txt',(err)=>{
// //     console.log('File Deleted');
// // });

// // fs.writeFile('./NodeJs/read1.txt','Welcome to No-Sync' ,(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log('File written successfully');
// //     }
// // });

// // console.log(os.arch());
// // console.log(os.userInfo());
// // console.log(os.platform());
// // console.log(os.hostname());
// // console.log(os.homedir());
// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.release());
// // console.log(os.totalmem()/1024/1024/1024);
// // console.log(os.uptime()/60/60);
// // // console.log(os.cpus());
// // console.log(os.freemem()/1024/1024/1024);
// // console.log(os.networkInterfaces());
// // console.log(os.tmpdir());
// // console.log(os.loadavg());
// // console.log(os.endianness());

// console.log(path.dirname("C:\Users\ASUS ROG\OneDrive\Desktop\MERN\NodeJs\index.js"));
// console.log(path.extname("C:\Users\ASUS ROG\OneDrive\Desktop\MERN\NodeJs\index.js"));
// console.log(path.basename("C:\Users\ASUS ROG\OneDrive\Desktop\MERN\NodeJs\index.js"));
// console.log(path.parse("C:\Users\ASUS ROG\OneDrive\Desktop\MERN\NodeJs\index.js"));

// console.log(path.join("user","ref","folder","bin"));
// console.log(path.resolve("user","ref","folder","bin"));

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home Page');
    }
    else if(req.url==='/about'){
        res.end('Welcome to About Page');
    }
    else if(req.url==='/contact'){
        res.end('Welcome to Contact Page');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>404 Page Not Found</h1>');
    }
});

server.listen(3000, '127.0.0.1')