//Immediately Invoked Function Expressions(IIFE)

//IIFE is function that is defined and executed immedeately after it's created
//It's a common patter in javascript for avoiding the polluting of the global scope and 
//-for creating private scopes

// Key Points:
// The function is defined within parentheses to make it an expression.
// The second set of parentheses () calls the function immediately after it's defined.
// IIFEs help in creating a local scope to avoid variable collisions in the global scope.


//example

(function one() {
    //name iife
    console.log("hello , IIFE")
})();

// if we want execute anothe iife we need to add a semicolon ; explcitly at end because it will understand
// that first iife was executed and ended
((name) => {
    //unnamed iife 
    console.log(`hello ,${name}`)
})("vinayaka") // we also pass arguments here