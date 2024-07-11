const User = {
    _email :"vinay@gmail.com",
    password:123,
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const vinay = Object.create(User)
console.log(vinay.email);

