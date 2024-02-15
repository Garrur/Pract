const arr =["harkirat","raman", "prash"]

const ans =arr.filter(function (i){
    if(i.startsWith("h")){
      return true
    }else{
      return false
    }
  })
console.log (ans)