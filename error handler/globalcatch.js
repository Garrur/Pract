const express = require ("express")
const app = express();
app.use (express.json());
app.post("/health-checkup", function(req,res){
  const kidneys = req.body.kidneys;
  const kidneyslength =  kidneys.length

res.send("you have" + kidneyslength + "kidneys")
})
//global catches--->it haave four ARGUMENT PASSING
app.use(function(err, req, res, next){
  res.json({
    msg:"Something went Wrong"
  })
})

app.listen(3000)