//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "vinayaka",
    age: 28,
    [mySym]:"mySymKey1",
    email: "vav6473@gmail.com",
    isLoggedIn: false
}

//keys of objects are tracked behind as strings 


//accessing the object value;
//console.log(jsUser.name);//vinayaka
// console.log(jsUser["name"]);//vinayaka
// console.log(jsUser[mySym]);

//changing the object values

// jsUser.email = "av@gmail.com" // the value is overrided

// Object.freeze(jsUser) // here the object is freezed and cannot change the values
// jsUser.email = "avv@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js use ${this.name}`);
}

jsUser.greeting();
jsUser.greetingTwo();