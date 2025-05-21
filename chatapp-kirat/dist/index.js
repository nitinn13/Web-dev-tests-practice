"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let users = 0;
let allws = [];
wss.on("connection", (ws) => {
    users++;
    console.log("User connected #" + users);
    ws.on("message", (message) => {
        const parsed = JSON.parse(message.toString());
        if (parsed.type === "join") {
            allws.push({
                ws,
                room: parsed.payload.roomId
            });
        }
        else if (parsed.type === "chat") {
            const currUser = allws.find((x) => x.ws === ws);
            if (!currUser)
                return;
            const currRoom = currUser.room;
            for (let i = 0; i < allws.length; i++) {
                if (allws[i].room === currRoom) {
                    allws[i].ws.send(parsed.payload.message);
                }
            }
        }
    });
    ws.on("close", () => {
        allws = allws.filter(x => x.ws !== ws);
        console.log("User disconnected");
    });
    ws.on("error", (err) => {
        console.error("WebSocket error:", err);
    });
});
