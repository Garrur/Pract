const express = require ("express")
const zod  = require ("zod");
const app = express();

const schema = zod.array(zod.number())
/*
{
  email: string => email
  password: atleast 8 letters
  country: "In", "US"
}
*/
// const schema = zod.object({
//   email: zod.string()
//   password: zod.string()
//   country:zod.literal("IN").or(zod.literal("US"))
// })


app.use (express.json());


app.post("/health-checkup", function(req,res){
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success){
    res.status(411).json({
      msg: "input in invalid"
    })
  }else{
    res.send({response})
  }
  // const kidneyslength =  kidneys.length
})


app.listen(3000)