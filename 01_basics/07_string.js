//in javascript strings are denoted in single quotes or double quotes

const name = "vinayaka"
const repoCount = 10;

console.log(`my name is ${name} and my repcount is ${repoCount}`)

// in modren js we backticks 
// when use backticks it is a string interpulation 
// in this we can create a placeholders and we a put or inject a variables directly to it.

//another method of string declaration

const myName = new String("Vinayaka AV");//when we use new keyword the obj is created
//  console.log(myName); // here in the console it return an obj with key value pairs
//  console.log(myName[0]) // we can console the value of 0 index with key but it is not an array
//  console.log(myName.__proto__);// we ge the all string methods in console
//  console.log(myName.charAt(1));
//  console.log(myName.indexOf('a'))

const newString = myName.substring(0, 4);
console.log(newString) // Vina last index not included;

const anotherString = myName.slice(-8, 5)
console.log(anotherString) // in this we can negative value which takes index reverse

const newStringOne = "  vinayaka "
console.log(newStringOne)
console.log(newStringOne.trim());// it remove all the extra spaces from both star and end

const url = "https://vinayaka.com/vinayaka%20av";

console.log(url.replace('%20', '-')); // replace the values by the given values
console.log(url.includes('vinayaka')); // true

const gameName = new String("GTA V CITY");
console.log(gameName.split(" "))// it convert string into array (splits by spaces)
