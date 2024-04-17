// for in 

const obj ={
    1:"one",
    2:"two",
    3:"three"
}

for (const key in obj) {
    console.log(key, obj[key])
}

const array = ['one','two','three','four'];

for (const key in array) {
    console.log(key, array[key]);
}