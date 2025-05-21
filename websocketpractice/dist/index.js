"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler 
let count = 1;
wss.on("connection", (ws) => {
    // ws.send("Hello Nitin");
    // setInterval(()=>{
    //     ws.send("Hello Nitin " + count++);
    // }, 2000)
    ws.on("message", (message) => {
        if (message.toString() === "ping") {
            ws.send("pong");
        }
        // console.log(message.toString());
        // ws.send(message);
    });
});
