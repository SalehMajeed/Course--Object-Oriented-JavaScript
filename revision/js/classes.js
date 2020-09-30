class user {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.score = 0;
    }
    login_attempt() {
        this.score++;
    }
}

let users = {};

function credentials() {
    var name = prompt('Enter Your Name: ');
    var age = prompt('Enter Your Age: ');
    var email = prompt('Enter Your Email: ');

    users[name] = new user(name, age, email);
}

while (newone != 'no') {
    credentials();
    var newone = prompt('Do you want to add new user').toLowerCase().trim();
}

// class b{}
// class a extends b{}
// class c extends b{}
