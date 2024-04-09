let score = "34"
console.log(typeof score); // string

let scoreInNumber= Number(score); // For conversion, always use capital letter like as Number
console.log(typeof scoreInNumber); // number 

let scoreAgain = "32abs"
console.log(typeof scoreAgain) // string

let scoreAgainInNumber = Number(scoreAgain) 
console.log(typeof scoreAgainInNumber)
console.log(scoreAgainInNumber); // Output is NaN means Not A Number because scoreAgain will not convert in number

// "33" = 33
// "Javascript" = Nan
// true = 1, false = 0 and vise-versa
// undefined = NaN


let num = 3;
let booleanNum = Boolean(num);
console.log(booleanNum); //true

// 1 = true, 0 = false
// "" = false
// "javascript" = true