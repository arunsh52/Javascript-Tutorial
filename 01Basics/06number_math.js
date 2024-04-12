const num = 100;
console.log(num)
console.log(typeof num);

const score = new Number(100)
console.log(score)
console.log(typeof score);

console.log(score.toFixed(3));
console.log(score.toString().length);

const floatNum = 23.2333;
console.log(typeof floatNum);

const precess = 1123.867
console.log(precess.toPrecision(3));

const hundered = 100000
console.log(hundered.toLocaleString('en-IN'))

// ------------------Math--------------------

console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(2.9))
console.log(Math.ceil(4.2))
console.log(Math.floor(2.9))
console.log(Math.sqrt(5))
console.log(Math.pow(4,4))
console.log(Math.random());
console.log(Math.min(2,4,0,5,3,1));
console.log(Math.max(2,3,1,100,1000,1001));

console.log(Math.round(Math.random() * 3));

const run = ((Math.random() *10) +1);
// console.log(run);
console.log(run.toFixed(2));
