// const useremail = []

// if (useremail) {
//     console.log("Got user emial");
// } else {
//     console.log("dont have  user email");
// }

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values

// "0", 'false', " ", [], {}, function(){}



// if (useremail.length === 0) {
//     console.log("Array isempty");
// }

// const emptyObj = {}
//  if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");    
//  }


 // Nullish Coalescing Operator (??): null undefined

 let val1;
//  val1 =  5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
 
 

 console.log(val1);

 // terniary Operator

//  condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");