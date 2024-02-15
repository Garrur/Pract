//filtering
//what if i tell u , given an input array, give me back all the even values from it.

const arr =[1,2,3,4,5]
                  // Dumb method
/*const arr =[1,2,3,4,5]
const newArr =[]

for(let i=0; i<arr.length; i++){
  if (arr[i] % 2 == 0){
    newArr.push(arr[i])
  }
}
console.log(newArr) */
/* const ans =arr.filter(function (i){
             if(i%2== 0){
                         return true
                       }else{
                         return false
                       }
                     })
console.log (ans) */

function filter(i){
  return i%2 == 0; 
}
const final = arr.filter(filter)
console.log(final)