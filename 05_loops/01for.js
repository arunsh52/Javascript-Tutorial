// for loop

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log(`this is 5`);
        continue;
    }
    console.log(index);
    
}

for (let index = 1; index <= 10; index++) {
    console.log(`${index} X ${index} == `, index*index)
    
}

let array = ['ironman', 'spiderman', 'loki','thanos'];
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log((element));
}

// break and continue

for (let index = 0; index <= 10; index++) {
    if(index == 9) break;

    if(index == 5) continue;
    console.log(index);
    
}