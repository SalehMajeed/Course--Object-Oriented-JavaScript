function user_form(name, age, email) {
    const new_user = Object.create(user_functions);

    new_user.name = name;
    new_user.age = age;
    new_user.email = email;
    new_user.score = 0;

    return new_user;
}

const user_functions = {
    login_attempt: function () {
        this.score++;
    },
};
var users = {}
users.x =  new user_form('anony', 33, 'anony@anony');
users.y =  new user_form('persona', 20, 'persona@persona');
