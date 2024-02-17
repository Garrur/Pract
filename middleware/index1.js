    /* slightly better solution - create a wraapper function */

function usernameValidator(username, password){
    if(username != "utkarsh" &&  password !="pass"){
      return false;
    }
    return true;
  }
  function kidneyValidator(kidenyId){
    if(kidenyId !=1 && kidenyId !=2){
      return false;
    }
    return true;
  
  }
  app.get("/health-checker", function(req,res){
    const kidneyId = req.query.kidenyId
    if(!usernameValidator(req.query.username,req.query.password)){
      res.status(403).json({
        msg : "User doesNot Exist"
      })
      return
    }
  if(!kidneyValidator(kidneyId)){
    res.status(411).json({
      ms:"Wrong Inputs"
    })
    return
  }
  
    res.send("Your Heart is healthy")
    
  })