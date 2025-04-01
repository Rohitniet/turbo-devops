import  express from "express"
import {client} from "@repo/db/client"

const app= express()

app.use(express.json())
app.get("/",(req,res)=>{
res.json({
    message:"hy there it is working "
})
})

app.post("/signup",async (req,res)=>{
    console.log("hy thereeeee")
    console.log(req.body)
    const username= req.body.username
    const password= req.body.password
  
   console.log(username)
   console.log(password)
   console.log("passed")

    const user =await client.user.create({
        data:{
            username,
            password
        }
    })

    res.json({
        "message":"youhave signed up",
        "id":user.id
    })

    
})




app.listen(3001)