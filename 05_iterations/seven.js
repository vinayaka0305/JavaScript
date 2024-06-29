// map

const numArr = [1, 2, 3, 4, 5];
// const values = numArr.map((num) => (
//     num + 10
// ))

// console.log(values);

/// chaining
const newArr = numArr.map((num) => num * 10) //[ 10, 20, 30, 40, 50 ]
    .map((num) => num + 1) //[ 11, 21, 31, 41, 51 ]
    .filter((num) => num >= 20) //[ 21, 31, 41, 51 ] (in filter only if condition is true that will be added)
    console.log(newArr) //


