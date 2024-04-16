// Immediately Invoked Function Expression (IIFE)


// IIFE is a immediate invoke function which is used to remove global scope pollution
(function dbConnect(){
    //named IIFE
    console.log(`DB Connected`);
})();  // Note use ; after the function because this is immediate invoked function which need a stop(;), for stop the function execution 

( (name) =>{
    console.log(`DB Connected TWO ${name}`)
} )("MYSQL");


