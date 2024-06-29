// for in 

const myObject = {
    js: "Java Script",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(key); // keys are printed
// }

for (const key in myObject) {
    // console.log(`keys of the object ${key} : values of object ${myObject[key]}`);
} // in this way we can iterate the object

// arr iteration using for in loop
/// in the array by default the keys are numbers
// example1

const programmig = ["js","css","html","react"]

for (const key in programmig) {
    // console.log(key) // 0 1 2 3 all the key means index of the array are printed
}

for (const key in programmig) {
   console.log(programmig[key]) // it will print the value (js,css....)
}

/// map object not iteratable usin for in loop