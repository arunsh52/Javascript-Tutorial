function sayMyName(){
    console.log("javascript");
}
sayMyName()

function add(num1, num2, num3){
    // console.log(num1+num2+num3); 
      return num1+num2+num3;
}
let temp = add(2,3,4)
console.log(temp)

function loginUserMessage(userName){
    return `${userName} just logged in`
}
console.log(loginUserMessage("java"))

function addToCart(...items){ // ... this is rest operator here
    return items
}

console.log(addToCart(200,2000,200000));

const userName = {
    name: "arun",
    id:20
}

function objectHandle(anyObj){
    console.log(`${anyObj.name} have id ${anyObj.id}`)
}

objectHandle(userName)