                /* Count the Number of Request using Middleware */

const express = require("express");
const app  = express()
const port = 3000
let requestCount = 0
app.use(function (req,res,next){
  requestCount++
  console.log(`Request Count: ${requestCount}`)
  next()
})
app.get("/", function(req,res){
  res.send("Hello World")
})
app.listen(port,function(){
  console.log(`Server is running on port ${port}`)
})
