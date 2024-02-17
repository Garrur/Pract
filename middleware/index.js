                  /* Dumb Way Of Doing Input Validation */

const express = require('express');
const app = express();
app.get("/health-checkup", function(req, res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidenyId = req.query.kidenyId;
  if(username 
     != "harkirat" || password != "pass"){
    res.status(400).json({
      msg:"Somethings up with you Input"
    })
    return
  }
  if(kidenyId != 1 && kidenyId != 2){
    res.status(400).json({
      msg:"Somethings up with you Input"
    })
    return
  }
    //do something with kideny here
    res.json({
      msg:"Your Kideny is fine"
    })
  
  
})
app.listen(3000)
