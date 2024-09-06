const EventEmitter = require("events")
const http = require("http")
const event = new EventEmitter()




const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Home page")
        // event.emit("HomePageAccessed")
    }
    else if(req.url == "/about"){
        res.end("About page")
        // event.emit("AboutPageAccessed")
    }
    else if(req.url == "/contact"){
        res.end("Contact page")
        // event.emit("ContactPageAccessed")
    }
    else{
        res.end("Unknown Route");
        // event.emit("UnknownPageAccessed", req.url);
    }   
});

// server.on("request",(req,res)=>{
//     if(req.url != "/favicon.ico"){
//         console.log("Request event",req.url)
//     }
// });

// server.on("close",()=>{
//     console.log("Server closed")
// });

// setTimeout(()=>{
//     server.close()
// },5000);

server.on("connection",()=>{
    console.log("connected")
});

// event.on("HomePageAccessed",()=>{
//     console.log("Home page accessed")
// });
// event.on("AboutPageAccessed",()=>{
//     console.log("About page accessed")
// });
// event.on("ContactPageAccessed",()=>{
//     console.log("Contact page accessed")
// });
// event.on("UnknownPageAccessed",(url)=>{
//     if(url != "/favicon.ico"){
//     console.log("Unknown page accessed",url)
//     }
// });

server.listen(3000,"127.0.0.1")
