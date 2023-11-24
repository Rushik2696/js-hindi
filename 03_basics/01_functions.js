

function sayMyName(){
console.log("R");
console.log("u");
console.log("s");
console.log("h");
console.log("i");
console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//      console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    //  let result = number1 + number2
    //  return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rushik"))
console.log(loginUserMessage())