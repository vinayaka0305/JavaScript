let myName = "vianayaka    "


// creating a method

let heros = ["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vinayaka = function(){
    console.log("vinayaka is present in all objects")
}
//here top level hirrache is accessed and new property is added
//through the object only all the prototypes are linked 
// so the newly created protoype is also available with string,array etc..
// Object->Array the prototype can accessable
// Array->object not accessable 

Array.prototype.heyVinayaka = function(){
    console.log("hey vinayka");
}

heroPower.vinayaka();
heros.vinayaka();

heros.heyVinayaka();
// heroPower.heyVinayaka();//heyVinayaka is not a function because it is an object


/////////////////////prototype inheritance //////////////////////////////

const user = {
    userName :"vinayka av",
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    team: "Tech",
    isAvailable : false
}

const TASupport = {
    make:"js assingment",
    full:true,
    // __proto__:TeachingSupport // all the properties of Teachingsupport are borrowed
}

// console.log(TASupport.isAvailable);
// console.log(TASupport.team);

// this is old syntax
// Teacher.__proto__ = user
// console.log(Teacher.userName);

// modern syntax

Object.setPrototypeOf(TeachingSupport,TASupport) 
//from TASupport all the proties access given to Teaching support
console.log(TeachingSupport.make)








