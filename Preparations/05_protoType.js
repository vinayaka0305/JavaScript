Array.prototype.sum = function(){
     return this.reduce((acc,int)=>acc+int,0)
} 

const arr = [1,2,3,4,5];

// console.log(arr.sum());

///////////////////////////////////////////////////

const addAndSubstract = {
     num1:6,
     num2:3,
     add(){
          return (this.num1 + this.num2);
     },
     substract(){
          return(this.num2 - this.num2);
     }
}

const caluculator = {
     product(){
          return (this.num1 * this.num2);
     },
     divide(){
          return (this.num1 / this.num2);
     }
}

Object.setPrototypeOf(caluculator,addAndSubstract);

console.log(caluculator.num1);
console.log(caluculator.add());
console.log(caluculator.product());