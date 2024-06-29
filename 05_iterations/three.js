// for of
const arr = [1,2,3,4,5];

for (const i of arr) {
    // console.log(i); // 1,2,3,4,5
}

const greeting = "Hello world"

for (const greet of greeting) {
    if(greet === " "){
        continue;
    }
    // console.log(greet)
}
/// map 
// map is an object in js and holds the key value pairs
// it remember original inserted order of keys 
const map = new Map();

map.set('IN','India')
map.set('USA','United States of America')
map.set('SA','South Africa');
// maps are unique
console.log(map); // whole map we will get

// in the map case we have to use for of loop

// for (const key of map) {
//     console.log(key); // here we get the key value pairs both inside an close arr [] bracket
// }

// for individual values we have to destructre it

for (const [key,val] of map) {
    console.log(key, ":-", val) // by destructuring we can access the key value separetely
}

// object are not iteratable usig for of loop



