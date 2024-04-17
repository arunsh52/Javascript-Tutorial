// foreach_advance, filter, map, reduce

let temp = ["cpp",'js','C#','python'];

// const value = temp.forEach((item)=>{  // this function not return anything
//     // console.log(item)
//     return item;
// })

// console.log(value)

// ---------------------filter----------------------
let array =  [1,2,3,4,5,6,7,8,9];
let array_condition = array.filter((num) => num> 3); // this will return array of value greater than 3

let array_condition1 = array.filter((num) =>{  // if we write {} then we have to write return for return a value
    return num>3;
})


console.log(array_condition)
console.log(array_condition1)
