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

app.post("/api/users/login",(req,res)=>{
    console.log(req.body)
    setTimeout(()=>{
        res.send(req.body)
    },[2000])
})
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,'/build',"index.html"))
})
io.on('connection',(socket)=>{
    console.log("a user connected")
    socket.emit("welcome",'歡迎光臨')
})
const port = 5000;
http.listen(port,()=>{
    console.log("backend server is running" + port)
})