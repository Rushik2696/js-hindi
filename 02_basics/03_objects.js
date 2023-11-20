// singleton 
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rushik",
    "full name": "Rushik patel",
    [mySym]: "mykey1",
    age: 18,
    location: "palanpur",
    email: "rudjr@google.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rushik@google.com"
// console.log(JsUser.email);
// Object.freeze(JsUser) // for to not change any value

JsUser.email = "ruvfsik@gmaile.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

    

