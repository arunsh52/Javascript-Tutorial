// var c  = 900
let a = 30000;
if(true){
    let a = 100
    const b = 200
    // var c = 30
    console.log("Inner a :",a);
    console.log("Inner b :",b);
    
}


console.log(a);


function one(){
    const userName = "Javascript"

    function two(){
        const platform = "github"
        console.log(userName);  // This is called closure, child function access parent's properties
    }
    // console.log(platform);
    two();
}
one();

//This is called hoisting, calling/access function/variable before decleration
console.log(increment(5))

// This is a function
function increment(num){
    return num+1;
}


// This will no run, because of hoisting
// console.log(dec(6))

// This is expression
const dec = function(num){
    return num-1;
}

console.log(4);