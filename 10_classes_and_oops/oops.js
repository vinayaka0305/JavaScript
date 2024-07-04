const user = {
    userName:"vinayaka",
    email:"vav6473@gmail.com",
    isLoggedIn:true,
    getUserDetails:function(){
        // console.log(userName)
        // here it will throw error because we need to put this
        //because to refer the curret object
        // console.log(this); // it print current context (whole object)
        console.log(`name : ${this.userName}`)
    }
}

console.log(user.userName);
user.getUserDetails();


function User(userName,loginCount,isLoggedIn){
    this.userName = userName,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
    }

    return this;
}   

// const userOne = User("vinayaka",9,true);
// const userTwo = User("av",10,false)
// console.log(userOne); // it will override override lates User values with old one

const userOne = new User("Vinayaka",11,true);
console.log(userOne);
const userTwo = new User("av",12,false);
console.log(userTwo);
userOne.greeting();
userTwo.greeting();
// new instace is created for both userOne & userTwo ;;

// the constructor function will give the new instances 
// when ever the new keyword is used an empty object is created called instance
// the constructor function is called immeadiately when the instance is created
// the passed arguments are injected in this key word
