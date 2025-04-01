import { WebSocket, WebSocketServer } from "ws";
import {client } from "@repo/db/client"



const server= new WebSocketServer({port:8080})


server.on("connection",async (ws)=>{

    const res =await client.user.create({
        data:{
            username:Math.random().toString(),
            password:"12345"
        }
    })
  

    ws.send("hy three you are conected")

})