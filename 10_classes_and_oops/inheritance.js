class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`USERNAME : is ${this.userName}`)
    }
}


class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.userName}`);
    }
}

const userOne = new Teacher("avvv","av@gmail.com",123);
console.log(userOne)
userOne.addCourse();
userOne.logMe();

const userTwo = new User("vinayaka");
userTwo.logMe();

console.log(userOne === userTwo); //false

console.log(userOne instanceof Teacher) // true
console.log(userTwo instanceof Teacher);//false
console.log(userOne instanceof User);// true
