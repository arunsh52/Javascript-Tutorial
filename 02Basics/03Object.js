// Object

// we can create object with 2 method first is using constructor and second is using object literal

const mySym = Symbol("key1");
// object literal
const obj = {
    name : "Javascript",
    age : 30,
    "Gender": "Other",
    email: "javascript@gmail.com",
    isLoggedIn : true,
    [mySym] : "Symbol"  // this is the syntax to use symbol in objectk
}


obj.email = "Javascrippt@gmail.com";
console.log(obj.email);
console.log(obj["Gender"]) // this is another way to access obj element and if key is in string data type then we only have this method
console.log(obj[mySym]) // syntax of access symbol


// Object.freeze(obj) // This will freeze an object, now you can't update object
obj.email = "javascript@gmail.com"
console.log(obj)

obj.greeting = function(){
    console.log("Hi Sir, How are You?");
    console.log(`How may I help you ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greeting);