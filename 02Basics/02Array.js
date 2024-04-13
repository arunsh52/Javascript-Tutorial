const marvel_heros = ["IronMan","Thor","SpiderMan"]
const dc_heros = ["SuperMan", "BatMan", "SuperWomen"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

let all_new_heros = [...dc_heros] // This is called spread operator

let new_arr = [1,2,3,[5,6,7],[9,[6,5,4,[1,2,3],5]]]

let flat_new_arr = new_arr.flat(Infinity)
console.log(flat_new_arr);


console.log(...new_arr)


console.log(Array.isArray("Javascript")) // check this is an array

console.log(Array.from("Javascript")); // convert into array

let num1  = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3));