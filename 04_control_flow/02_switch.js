// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let isUserLoggedIn = true
switch (isUserLoggedIn){
    case false:
        console.log(`Noooo`)
        break; // If we not use `break` then except default all the case will execute without checking 
    case true:
        console.log(`yayaya`)
        break;
    default:
        console.log("Ram mera bada bhaiya")
}

let user  = 2
switch (user) {
    case "2":
        console.log("yayaya")
        break;

    default:
        console.log(`noooo`);
        break;
}