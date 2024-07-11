// Object. assign is used to combine or merge two or more objects;
// an object can't have two properties; as result it will pick the last update


const course = {
    name:"fsd",
    score:74
}

const grade={
    score : 80
}

const result = Object.assign(course,grade,{teacher:"james bonde"});
//proper clone of the object example is below

const copy = Object.assign({},result);

// console.log(copy);

// console.log(result);

///////////////////////////////////////////////////////////////////////////////////

//using Object.assign we can set some default values to the Object
// that we passed to functions



function printName(options){

    const defaults = {
        firstName:"vinayaka",
        lastName:"av"
    }

    options = Object.assign(defaults,options)
    
    console.log(`${options.firstName}, ${options.lastName}`)
}


printName({
    firstName:"vinayaka",
    // lastName:"av" /
})


