let name1 = {
  firstName: "vinayaka",
  lastName: "av",
};

let printName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};

// function borrowing
printName.call(name1, "DVG");

let name2 = {
  firstName: "tony",
  lastName: "stark",
  // printName:function(){
  //     console.log(this.firstName+" "+this.lastName)
  // }
};

// printName.call(name2,"USA");

printName.apply(name2, ["united states"]);

// name2.printName();

// here the call comes into picture
// here we can borrow a function from another object

// the only differen is in call and apply is how we pass the arguments
// in apply we pass argument in array

// bind method
// the difference betweem in call and bind is it gives the copy of the method
// which can invoked later rather dircly invoking
// let printLater = printName.bind(name1, "DVGGG");
// console.log(printLater);
// printLater();
////////////////////////////////////////////

let userData={
  firstName:"vinay",
  lastName :"av",
}
function printData(aka){
  console.log(this.firstName+" "+this.lastName+" a k a "+aka);
}

printData.call(userData,"gubbi");

let userData2 = {
  firstName:"steve",
  lastName :"roger"
}
printData.call(userData2," captain america ")

printData.apply(userData2,["ca"])

let printLater = printData.bind(userData2,"steve")

printLater();


/////////////////////////////////

for(var i=0;i<3;i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}

for(let i=0;i<3;i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}















