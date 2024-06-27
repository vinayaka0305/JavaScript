const user1 = new Object() // it is singleton object;
const user2 = {} // non-singleton object

user2.id = "123abcd"
user2.name = "kate"
user2.isLoggedIn = false;

// console.log(user2);

const user3 = {
    userId: "abbb111",
    fullName: {
        userName: {
            firstName: "vianyaka",
            lastName: "AV"
        }
    }
}
//we can object inside an object
// console.log(user3.fullName.userName.firstName); //vinayaka

//assign the object or merge

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }
const obj3 = { 7: "a", 8: "b", 9: "c" }

// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }
// using spread operators 
// console.log(obj4);

//+++++++++++++++++ Array of Objects ++++++++++++

const userData = [{
    id: "1",
    userName: "vinay"
}, {
    id: "2",
    userName: "av"
}
]

// console.log(user2)
// console.log(Object.keys(user2)); // it will give the keys of object in the form of array
// //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(user2)) // same it will give the values
// //[ '123abcd', 'kate', false ]
// console.log(Object.entries(user2)) // it will give every key as an array 
// //[ [ 'id', '123abcd' ], [ 'name', 'kate' ], [ 'isLoggedIn', false ] ]

// console.log(user2.hasOwnProperty('isLoggedIn')); // true

//++++++++++++++++++++ Object destructuring ++++++++++++++++++++++++++

const marvel_hero = {
    name: "Steve Rogers",
    aka: "Captain America",
    place: "Broklyn"
}

// destructuring means extracting the value from the object

// const { name } = marvel_hero

// console.log(name);//Steve Rogers

const {name:fName} = marvel_hero;
console.log(fName);//Steve Rogers

///randmon user me 
//https://randomuser.me/api

// json https://jsonformatter.org/