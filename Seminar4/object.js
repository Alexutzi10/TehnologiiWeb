const person = {
    name: 'John',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log('${this.email} has logged in.');
};

User.prototype.logout = function(){
    this.online = false;
    console.log('${this.email} has logged out.');
};

const user = new User('alexsurugiu@bosromania.com', 'Alex');
user.login();
console.log(user);