  /* Find the average time your server is taking to handle request */

const express = require("express");
const app  = express()
const port = 3000

let totalTime = 0;
let requestCount = 0;
app.use(function(req,res,next) {
  const start = Date.now();
  res.on("finish",function(){
    const end = Date.now();
    const duration = end - start
    totalTime +=duration
    requestCount++
  })
  next()
})
app.get("/average-time",function(req,res,next){
  if (requestCount === 0){
    res.json({
      msg:"No request Yet "
    })
  }else{
  const averageTime =  totalTime/requestCount;
    res.json({
      msg:`Average Time: ${averageTime}ms`
    })
  }
})
app.listen(port,function(){
  console.log(`Server is running on port ${port}`)
})
