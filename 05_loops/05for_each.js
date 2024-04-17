// for each 

let temp = ["cpp",'js','C#','python'];


// temp.forEach(element => {
//     console.log(element);
// });

temp.forEach(elm =>{
    console.log(elm);
})


// const hell = ()=>{
//     return 'this is hell function';
// }
// console.log(hell())

function print(item){
    console.log(item)
}

const hell = (print);  // we can initialize function anywhere

temp.forEach((element, index, arr)=>{
    console.log(element, index,arr);
})


let array = [
    {
        'language': "javascript",
        'shortcut': "js"
    },
    {
        'language': "python",
        'shortcut': "py"
    },
    {
        'language': "c++",
        'shortcut': "cpp"
    }
]
array.forEach((value, index)=>{
    console.log(value.language,index)
})