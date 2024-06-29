// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
// intialization,condtioncheck,perform take(if printing), incremenent

// nested loop
for (let i = 1; i <= 10; i++) {
    // console.log(`outerLoop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outerLoop ${i}`);
        // console.log(i + "*" + j + "=" + i * j);
    }
}

let arr = ["ca","im","t"];

for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
}

/// break and continue;
for(let i=1;i<=20;i++){
    if(i == 5){
        // console.log("5 is the best")
        // break;
    }
    // console.log(`value of i is ${i}`)
}
//// to break the control flow we write a break

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log("5 is the best")
        continue; 
    }
    console.log(`value of i is ${i}`)
}
// the condition the written was skipped and rest of the loop will continue
