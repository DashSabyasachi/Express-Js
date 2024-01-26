const express = require("express")

const app = express()

const PORT = 4000
const hostName= "127.0.0.7"

app.use(express.json())  //json middleware
app.use(express.urlencoded({extended:true}))

app.get("/get",(req,res)=>{
    res.status(203).send({name:"SABYASACHI", age:23})
})



app.post("/post",(req,res)=>{
    console.log(req.body);
    res.status(201).send("Data Received")
})


app.post("/app",(req,res)=>{
    console.log(req.body);
    res.status(200).send("Data founded")
})

app.get("/data",(req,res)=>{
    res.status(203).send([1,"sabya",{age:23,gender:"male"}])
})

app.post("/json",(req,res)=>{
    console.log(req.body);
    console.log(req.headers);
    res.status(200).send("Succesfully done")
})


app.post("/post/:id",(req,res)=>{
    console.log(req.params);
    // res.send(req.params)
    res.status(201).send('<h1>Data received</h1>')
})
app.post("/query",(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})



app.listen(PORT,hostName,()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})