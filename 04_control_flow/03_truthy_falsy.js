let userEmail = 'javascript@gmail.com'

if(userEmail){  // Here userEmail is assumed as true value
    console.log(`Got the email`)
}
else{
    console.log(`Not have user email`)
}

// false value

// false, 0, -0, BigInt 0n. "", null, undefined, NaN  // These all are assumed as falsy value except this all are truthy value

// truthy value

// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined


let temp

temp = 2 ?? 3 ?? 4
// temp = null ?? 5
// temp = undefined ?? 2
// temp = undefined ?? null
// temp = null ?? undefined

console.log(temp)