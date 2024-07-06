const obj={
    name:"vianyaka",
    sayName:function(){
        console.log(this.name)
    }
}

const sayMyName = obj.sayName.bind(obj);

sayMyName();

// In this example:

// obj.sayName.bind(obj) creates a new function where this always refers to obj.

// Calling sayNameBound() will always log "vinayaka", no matter where or how you call it.