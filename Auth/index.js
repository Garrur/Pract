const express = require('express');
const port = 3000;
const jwt = require('jsonwebtoken');
const jwtpassword = '123456';

const app = express();
app.use(express.json())
const All_USERS = [
  {
    username : "utkarsh@gmail.com",
    password : "123",
    name : "utkarsh raj"
  },
  {
    username : "raman@gmail.com",
    password : "123321",
    name :  "raman kumar"
  },
  {
    username : "priya@gmail.com",
    password : "1223321",
    name : "priya"
  }
];
function userExists(username, password){
  //write a logic to return true or false if this where exists
  //in All_USERS array
  //hard todo -try to use the find function in js
  let userExists = false;
  for (let i = 0; i<All_USERS.length; i++){
    if(All_USERS[i].username ==username && All_USERS[i].password == password){
      userExists = true;
    }
  }
    return userExists

}

app.post("/signin", function(req, res){
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

    const decoded = jwt.verify(token, jwtpassword)
    const username = decoded.username;
    //we can use try-catch for error handling here
    /* try{
    const decoded = jwt.verify(token, jwtpassword)
    const username = decoded.username;
  }catch(err){
    return res.status(403).json({
      msg:"Invalid Token"
    })
  } */
  res.json({
    users: All_USERS,
  })
})
//GLobal Catches
app.use(function(err, req, res, next){
  res.json({
    msg: "Invalid Token"
  })
})

app.listen(port,function(){
  console.log(`server is running on port ${port}`)
})
