class User{
    constructor(email,name){
        this.email = email
        this.name = name
        this.score = 0
    }

    login(){
        console.log(this.email, 'just logged in')
        return this
    }

    logout(){
        console.log(this.email, 'just out in')
        return this
    }

    updateScore(){
        this.score++;
        return this
    }
}

var userOne = new User('anony@anony.com','anony')
var userTwo = new User('persona@persona.com','persona')

console.log(userOne.login())
console.log(userTwo)

userOne.login().updateScore().updateScore().score.logout()