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


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1, obj2}; // we can concat many objects like this but not good method

const obj4 = Object.assign({},obj1, obj2) // This is good syntax of concat many objects

const obj5 = {...obj1, ...obj2} // This is the best method to concat objects

console.log(obj5)


const users = [
    {
        name :"user1",
        id: "user1@gmail.com"
    },
    {
        name :"user2",
        id: "user2@gmail.com"
    },
    {
        name :"user3",
        id: "user3@gmail.com"
    }
]

console.log(users[1].name);


console.log(Object.keys(obj)); // This will give you array of all the keys of object
console.log(Object.values(obj)); // This will give you array of all the values of object

console.log(Object.keys(obj).length);// This will find length of object

console.log(obj.hasOwnProperty("email")); // This will check email is present in object obj, boolean data types

// how to destructure an object

const instaUser = {
    name : "alpha",
    id: "alpha123",
    email: "alpha@gmail.com"
}

// instaUser.name // This is a destructuring of a object but this is not so good

const {name, id, email: mail} = instaUser;
console.log(name, id, mail)
