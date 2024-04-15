const user = {
    name : "Javascript",
    fun: function(){
        console.log(`${this.name}, welcome to code`);
        console.log(this)
    }
}

user.fun();
user.name = "React";
user.fun();

console.log(this)

// function dev(){  // Please run this
//     console.log(this)
// }

// dev()

function developer(){
    let username = "temperature";
    console.log(`${username}, developer function`)
    console.log(this.username)  // We can't use 'this' at here.
}

developer();

const temp = function(){
    let username = "temperature";
    console.log(username)
    console.log(this.username)
}

temp();

const temp2 = ()=>{
    let username = "temperature";
    console.log(username)
    console.log(this.username); // We can't use 'this' here
}
temp2();



// ---------------------------Arrow Function------------------

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3,1));

const print2 = (num1, num2) => num1 + num2; // This is called implicit return function when there is only 1 line to return 

console.log(print2(8,2));

const objectReturn = () => ({name:"javascript"}) // That's how we return object in implicit return function

console.log(objectReturn())