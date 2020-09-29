class User{
    constructor(email,name){
        this.email = email
        this.name = name
    }

    login(){
        console.log(this.email, 'just logged in')
    }

    logout(){
        console.log(this.email, 'just out in')
    }
}

var userOne = new User('anony@anony.com','anony')
var userTwo = new User('persona@persona.com','persona')

console.log(userOne.login())
console.log(userTwo)