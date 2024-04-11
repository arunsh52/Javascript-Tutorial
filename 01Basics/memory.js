// stack (primitive) and heap (non-primitive)


// -------------Stack (primitive) ----------------------
let userOne = "javascript"
let userTwo = userOne

console.log(userTwo);  // javascript

userTwo = "React"

console.log(userOne);  // javascript
console.log(userTwo);  // React

// -------------------heap (non-primitive)--------------

let userObj = {
    userId: 12345,
    userName: "Javascript"
}

let anotherUser = userObj

anotherUser.userId = 98765
console.log(userObj.userId);