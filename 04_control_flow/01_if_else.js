let isUserLoggedIn = true

if(isUserLoggedIn){
    console.log(`User is Logged In`)
}
else{
    console.log(`User is not Logged In`)
}

// <, >, <=, >=, ==, !=, ===, 

let char = 3
if(char < 4) console.log(`less than 4`), console.log(`less than 5`); // Not a Good practice

let userCreditCard = true;

if(isUserLoggedIn && userCreditCard){
    console.log(`User can buy Course`)
}
else{
    console.log(`User can't buy a course`)
}


// Terniary operator

// condition ? true : false

3 == "3" ? console.log(`Both are equal`) : console.log(`Not equal`);