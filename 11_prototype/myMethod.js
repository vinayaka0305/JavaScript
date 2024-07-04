let myName = "vinayaka     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`truelength is : ${this.trim().length}`);
}

myName.trueLength();

"avv  ".trueLength();
"spirit".trueLength();