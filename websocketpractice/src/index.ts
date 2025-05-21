import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port: 8080});

//event handler 
let count : any  = 1;
wss.on("connection", (ws) => {
    // ws.send("Hello Nitin");
    // setInterval(()=>{
    //     ws.send("Hello Nitin " + count++);
    // }, 2000)
    ws.on("message", (message) => {
        if(message.toString() === "ping"){
            ws.send("pong");
        }
        // console.log(message.toString());
        // ws.send(message);
    });
});