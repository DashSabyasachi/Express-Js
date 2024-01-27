// const bcrypt =require("bcrypt")

// const password ="JSPIDER@1234"

// const salt = 10

//hash method
// // bcrypt.hash(password,salt,(err,hash)=>{
// //     if(err){
// //         console.log(err);
// //     }else{
// //         console.log(hash);
// //     }
// // })

// const hassedPassword = bcrypt.hashSync(password,salt)
// console.log(hassedPassword);

//compared method
// //check password true or false
// // bcrypt.compare("JSPIDER@1234",hassedPassword,(err,res)=>{
// //     if(err) console.log(err);
// //     else console.log(res);
// // })


// const isMatched = bcrypt.compareSync("JSPIDR@1234",hassedPassword)
// console.log(isMatched);



////////////////////////////////////////////////////////////////////////////////////////////////
//JSON web TOKEN

const jwt = require("jsonwebtoken")

const secretKey ="Rider"

const userData = { name:"Sabyasachi" ,age:22, address:"KGF" }
const token = jwt.sign(userData,secretKey)
console.log(token)

const result = jwt.verify(token,secretKey)
console.log(result);