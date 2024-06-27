// arrays
//array in js are used to storing a collection of mutlple elements under a single
//variable 
// In js arrays are resizable and can contain mix of different data type
// arrays are zero based indexing
// when we perform a copy operation with array, it creates shallow copies

//shallow copy : shallow copy of an array obj is copy whose shares the 
//same refrences (points same underlying values) 
// as a result u change either the source or a copy, it causes change in objects to 
//(what changes done in copy it changes in original also)

// deepcopy : the properties of obj does't share same refrence

const arr = [1, 2, 3, 4, 5];
const arr1 = new Array(1, 2, 3, 4, 5);

// console.log(arr1);

//++++++++++++++ Methods++++++++++++++++++++++++
console.log(arr);
arr.push(6); // adds at the end
arr.pop() // removes last element

arr.unshift(1)// add at start
arr.shift()// removes at start

// console.log(arr.includes(9));// false
// console.log(arr.indexOf(9))//-1

const newArr = arr.join() // converts arr to string with comma separated
console.log(newArr);

//+++++++++++ splice & slice ++++++++++++++++++++++++++
console.log("A", arr); // A [ 1, 2, 3, 4, 5 ]
const myArr1 = arr.slice(1, 3);
console.log(myArr1); //[ 2, 3 ] not includes the 3rd index

console.log("B", arr);// B [ 1, 2, 3, 4, 5 ]
const myArr2 = arr.splice(1, 3);
console.log(myArr2); //[ 2, 3, 4 ] includes last index and manpulate the original array
//after use splice the indexes from to 1 to 3 are deleted at original array also

console.log("C", arr); ////C [ 1, 5 ]


