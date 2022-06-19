const express =require("express")
const app =express();
const http = require('http').createServer(app)
const io = require('socket.io')(http,{
    cors:{origin:"http://localhost:3000"}
})
const path = require('path');
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'/build')))
let users=[]
let messages=[]
let room=[]
app.post("/api/login",(req,res)=>{
    const user =req.body.user
    if (users.some((name)=>{return name===user})||user===""){
        res.json(false)

    }else{
        users = [...users, user]
        // io.emit("user",users)
        res.json(true)  
    }
     
})
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,'/build',"index.html"))
})
io.on('connection',(socket)=>{
    console.log("a user connected  "+socket.id)
    
    socket.emit("user", users)
    socket.broadcast.emit("user", users);
    //server on 一個事件
    socket.on("addUser",(msg)=>{
        console.log(msg)  
        socket.emit("user", users)
    })     
         


    socket.on('disconnect', (e) => {
        console.log('user disconnected ',socket.id);
    });
})
const port = 8900;
http.listen(port,()=>{
    console.log("backend server is running" + port)
})