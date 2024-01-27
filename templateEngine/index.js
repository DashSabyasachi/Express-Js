const express = require("express")
const PORT = 4000
const hostName = "127.0.0.8"
const {join} = require("path")

const app = express()

app.set("view engine","ejs")

app.use(express.static(join(__dirname,"public")))
app.use(express.json())




app.get("/",(req,res)=>{
    res.render("home",{name:"Sabyasachi",address:"Gopalpur"})

})

app.get("/about",(req,res)=>{
    res.render("about",{data:["apple","banana","coffee"]})
})





app.listen(PORT,hostName,()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})