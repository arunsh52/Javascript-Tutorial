// Second Method of object creation (using constructor) 
// the only difference between these 2 methods is that, singleton object create using constructor

const obj = new Object();

obj.name = "Singleton object"
obj.Id = "123Single"
obj.isLoggedIn = false

console.log(obj);

// object inside object

const firstObj ={
    email:"firstobj@gmail.com",
    secondObj:{
        name:"second Object",
        thirdObj:{
            firstname : "third",
            lastname: "object"
        }
    }
}

console.log(firstObj.secondObj.thirdObj.firstname)