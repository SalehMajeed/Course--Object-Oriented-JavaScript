function person(first, last, age, email) {
    this.name = {
        first: first,
        last: last,
    };
    this.age = age;
    this.email = email;
    this.score = 0
}

person.prototype.login_attempt = ()=>{this.score++}

var x = new person('anony','mous',21,'anony@anony')

// var y = new x.constructor('anony','mous',21,'anony@anony')

// console.log(y.constructor.name)