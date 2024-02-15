//given an array ,give me back a new array in which every value is multiplied by 2
       //2nd method
// const original = [1,2,3,4,5]
// const multipliedbytwo = original.map(value => value *2)
// console.log(multipliedbytwo)


          //One Method
/*const input = [1,2,3,4,5]
const newArray = [];
for (let i = 0; i <input.length; i++){
  newArray.push(input[i]*2)
}
console.log(newArray)*/
             
                         //3rd method

const arr = [1,2,3,4,5]

function f(i){
  return i*2
}

const multi = arr.map(f);
console.log(multi) 

               //4th Method
/* const arr = [1,2,3,4,5]
function f(i){
  return i*2
}
const a = arr.map(f)
console.log(a) */