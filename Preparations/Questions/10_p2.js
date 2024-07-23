let counter = 0;

// let intervalId = setInterval(()=>{
//     counter++;
//     console.log(counter);
//     if(counter===5){
//         clearInterval(intervalId);
//     }
// },1000)

var a = 5;

function foo(){
    console.log(a);
    var a = 10;
    console.log(a);
}

foo();
///////////////////////

function ge(){
    let count = 0;
    function increment(){
        count++;
        return `${count}`
    }
    return increment
}

let order = ge();
console.log(order());
console.log(order());
console.log(order());
///////////////////////////////////////

const arr = [[1,2],[3,4],[5,6]];

// let res = arr.flat(1);
// console.log(res);

////////////////////////////////////

function flatArr(arr,n){
    if(n===0) return arr;
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            res.push(arr[i]);
        }else{
           res.push(...flatArr(arr[i],n-1))
        }
    }
    return res;
}

let ans = flatArr(arr,1);
console.log(ans);


let students = [
    { name: "Ram", scores: [80, 95, 60] },
    { name: "Mohan", scores: [85, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [95, 90, 94] },
  ];


function averagefinde(student){
    let getAverge = student.map((student)=>{
        const averge = student.scores.reduce((acc,int)=>acc+int,0) / student.scores.length;
        return {name:student.name,averge : averge}
    })

    const highterscorer = getAverge.filter((student)=>{
        return student.averge>90;
    })

    return highterscorer;
}

const result = averagefinde(students)
result.forEach((val)=>{
    console.log(val);
})

//////////////////////////////////////

const str = "hi hello namaste"

const arr1 = str.split(' ');
const arr2 = arr1.map((val)=>{
  return val[0].toLocaleUpperCase()+val.slice(1)
})

console.log(arr2);

////

const obj1 = {
    a:1,
    b:{
        c:1
    }
}

// const shallowCopy = {...obj1};

// shallowCopy.b.c = 3;
const deepCopy = JSON.parse(JSON.stringify(obj1))

deepCopy.b.c = 3;
console.log(obj1);
console.log(deepCopy);

