//file system, os, http, path, url, event

const fs = require('fs');

fs.writeFileSync('read.txt','Welcome to Techno NJR ');

fs.appendFileSync('read.txt','Hello Tr4 ');
fs.appendFileSync('read.txt','Welcome Back');
// let data= fs.readFileSync('read.txt');
// console.log(data.toString());
fs.renameSync('read.txt','readwrite.txt');