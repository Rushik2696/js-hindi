const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },100)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(("Async task 2"));
        resolve()
    },1000)
}).then(function() {
    console.log(("Asynce 2 resolved"));
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username : "chai", email: "chai@.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promisefour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Rushik", password: "123"})
        } else {
            reject('ERROR : something went wrong')
        }
    },1000)
})

promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
}).finally(() => console.log(("The promise is either resolved or rejected")))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR : JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log((response));
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

