const arr = [1,3,5,7,9]
console.log(arr[0])
console.log(arr)

const arr2 = ["IronMan", "Captain America", "Hulk"];
console.log(arr2[2]);

const arr3 = new Array(1,2,3,"Bulk",34.43)
console.log(arr3[4])

// -----------Array Methods------------
arr.push(4)
arr.push(8)
arr.pop()
arr.unshift(199) // Push value in front of Array
arr.shift() // Pop value from Array's front
console.log(arr)

console.log(arr.includes(9));

const newArr = arr.join(); // convert all this element into string
console.log(typeof newArr)

console.log(newArr)

// ---------------slice and splice-------------

const myA1 = arr.slice(1,3); // It don't manipulate original array
console.log(myA1);
console.log("A", arr);

const myA2 = arr.splice(1,3); // It manipulate original array
console.log(myA2);
console.log("B", arr);
