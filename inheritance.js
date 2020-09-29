class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(this.email, 'just logged in');
        return this;
    }

    logout() {
        console.log(this.email, 'just out in');
        return this;
    }

    updateScore() {
        this.score++;
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u=>{
            return u.email != user.email
        })
    }
}
var userOne = new User('anony@anony.com', 'anony');
var userTwo = new User('persona@persona.com', 'persona');

var admin = new Admin('Grey@Grey.com','Grey')

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo)

console.log(users)