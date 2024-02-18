const express = require('express');
const port = 3000;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtpassword = '123456as';

mongoose.connect(
  
);

const User = mongoose.model("User",{
  name: String,
  username: String,
  password: String
})

const app = express();
app.use(express.json())

function userExists(username, password){
 

}

app.post("/signin", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username, password)){
    return res.status(403).json({
      msg: "user doesnot exists in our memory db"
    })
  }
 var token = jwt.sign({username: username}, jwtpassword);
  return res.json({
    token,
  })
})

app.get("/users", function(req,res){
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token, jwtpassword);
    const username = decoded.username;
  }catch(err){
    return res.status(403).json({
      msg:"Invalid Token"
    })
  }
})

app.listen(port,function(){
  console.log(`server is running on port ${port}`)
})
