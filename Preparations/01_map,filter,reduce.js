const arr = [10,15,20,25,30];

const newarr = arr.filter((val)=>{
    return val % 2 === 0;
    // Returns the elements of an array that meet
    // the condition specified in a callback function
}).map((val)=>{
   return val * 2 // taking each value and it will double
}).reduce((acc,int)=>{
    return acc + int
},0)

// newarr.forEach((val,index,arr)=>{
//     console.log(val,index,arr) // it will take the value and print it
// })

console.log(newarr); // 120 it will print




