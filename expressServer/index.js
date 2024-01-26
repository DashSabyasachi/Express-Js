//importing framework
const express = require("express")
const fs = require("fs")
const path = require("path")

//app creation
const app = express()

//PORT,hostName
const PORT = 4000
const hostName = "127.0.0.8"

//static middleware
app.use(express.static(path.join(__dirname,"public")))

//JSON middleware
app.use(express.json())


//API
//get
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","home.html"))  
})

app.post("/newLogger",(req,res)=>{
    console.log(req.body); 
  res.status(201).send({msg:"DATA RECEIVED"})
})


//app listening
app.listen(PORT,hostName,()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})