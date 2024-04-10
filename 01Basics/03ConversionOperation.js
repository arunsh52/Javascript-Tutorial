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


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
