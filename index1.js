//create a map function that takes 2 inputs an array and a tranformation callbacks/fn and transform the array into an new one using the transformation fn

const original = [1,2,3,4,5]

function f(i){
  return i*2
}

function myMap(arr, transformFn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(transformFn(arr[i]));
  }
  return newArr;
}
const transformed = myMap(original,f);
console.log(transformed)