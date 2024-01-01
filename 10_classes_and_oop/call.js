function SetUsername(username){
    this.username = username
    console.log("called");
}

function creatUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new creatUser("chai", "chai@.com", "12300")
console.log(chai);