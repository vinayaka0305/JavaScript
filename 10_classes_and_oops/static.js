//In JavaScript, static methods are defined on the class itself, 
//not on instances of the class. 

//They are often used for utility functions 
//that don't require an instance of the class to be called. 

class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`UserName : ${this.userName}`);
    }
    static creatId(){
        return `123`
    }
}


class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email = email;
    }
}

const userOne = new Teacher("vinayaka","vav6473@gmail.com")

userOne.logMe();
console.log(userOne.creatId())// instances are not accesssable the static function


