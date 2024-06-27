const marvel_heros = ["captainAmerica", "ironman", "thor"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // here the in the marvel_hero array
// //after the last index the  dc_hero array was inserted as an array
// console.log(marvel_heros[3][0]); // batman

// const all_heros = marvel_heros.concat(dc_heros);
//Combines two or more arrays. 
//This method returns a new array without modifying any existing arrays
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]
//spread operator works same as concate , when we spread it will becomes single elements
//here we spread more than 2 arrays
// console.log(all_heros);


const hellArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 10];

const newRealArr = hellArr.flat(Infinity)
//Returns a new array with all sub-array elements concatenated 
//into it recursively up to the specified depth.
// console.log(newRealArr);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]

console.log(Array.isArray("vinayaka")) //false
console.log(Array.from("vinayaka")) // it creates an array of the given values

let scr1 = 100;
let scr2 = 200;
let scr3 = 300;

console.log(Array.of(scr1,scr2,scr3));//[ 100, 200, 300 ]
//A set of elements to include in the new array object.
//Returns a new array from a set of elements