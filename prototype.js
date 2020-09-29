function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin() {
    User.apply(this, arguments);
    this.role = 'Super Admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
    users = users.filter((user) => {
        return user.email != u.email;
    });
};

var userOne = new User('anony@anony.com', 'anony');
var userTwo = new User('persona@persona.com', 'persona');
var admin = new Admin('Grey@Grey.com', 'Grey');

var users = [userOne, userTwo, admin];

console.log(admin);
