// for of

// these is array specific

let array = [1,3,4,5,6,3];

for (const val of array) {
    console.log(val)
}
console.log("\n")

let str = "HAPPY BIRTHDAY";
for (const val of str) {
    if(val == " ")continue;
    console.log(val)
}

// Maps

let map = new Map();

// map.set(1,'one');
map.set(1,'one');
map.set(2,'two');
map.set(3,'three');
map.set(4,'four');
// console.log(map.get(4));

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key, value)
}

let obj = {
    1: 'one',
    2:'two'
}

// we can't use for of loop for object
// for (const [key, value] of obj) {
//     console.log(key, value)
// }