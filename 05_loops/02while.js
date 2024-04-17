// while and do while
let array = ['shaktiman','flash','temp'];

let i  = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}


let temp = 2;
// in do while loop condition will check after the loop execution
do{
    console.log(`this is ${temp}`)
    temp++;
}while(temp<10);

temp =2;
do{
    console.log(`this is ${temp}`)
    temp++;
}while(temp>10);