const express = require('express')
let User = require("../models/user");
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors');
const jwt = require('jsonwebtoken')

const app = express()
const saultRounds = 10

app.use(express.json())
app.use(cors({
  origin: ["http://localhost:9999/userlogin"],
  methods: ["GET" , "POST"],
  credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))




app.post("/register" , (req,res) =>{
    const email = req.body.email
    const type = req.body.type
    
    bcrypt.hash(req.body.password ,saultRounds , (err,hash) =>{
      const password = hash
      const newUser = new User({
        
        email,
        password,
        type
    })   
    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err) =>{
        console.log(err)
    })
    })
})


app.get("/post",verifyToken,(req, res) =>{
  if(req.user){
    const user = req.user
    res.json(
      req.user
    )
  }else{
    res.send({message:"Token not valid"})
  }
})


app.post("/login", async(req,res) =>{
  
await User.findOne({ email: req.body.email }).then(
    (user) => {

     bcrypt.compare(req.body.password, user.password , (err , result) =>{
      if(err || !result){
        res.send({message:"Wrong Password"})
      }else{
        jwt.sign({user} , 'secretkey', (err, token) =>{
          res.json({token})
        }) 
      }})
    }).catch(
    (error) => {
      res.send({message: "Wrong  Email"})
    }
  );

})



function verifyToken(req , res , next){
const bearerHeader = req.headers['authorization'];
const token = bearerHeader && bearerHeader.split(' ')[1]
if(token == null){
  return res.sendStatus(401)
}else{
  jwt.verify(token, 'secretkey', (err, authData)=>{
    if(err){
      res.sendStatus(403)
    }else{
      req.user = authData
      next()
    }
  })
}
}

module.exports = app