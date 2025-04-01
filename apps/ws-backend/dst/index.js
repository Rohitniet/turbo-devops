"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const client_1 = require("@repo/db/client");
const server = new ws_1.WebSocketServer({ port: 8080 });
server.on("connection", async (ws) => {
    const res = await client_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: "12345"
        }
    });
    ws.send("hy three you are conected");
});
