const user1 = {
    firstName :"tony",
    lastName :"Stark"
}

let printFullName = function(aka){
    console.log(`${this.firstName} ${this.lastName} aka ${aka}`)
}


printFullName.call(user1,"IRON MAN");
printFullName.apply(user1,["papper's boyfriend"])

let printLater = printFullName.bind(user1,"play-Boy");

printLater();