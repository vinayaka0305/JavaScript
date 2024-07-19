const url = "https://api.github.com/users/vinayaka0305"

const user = fetch(url);

console.log(user) // the promise pending object;
// after that we need to attach a call back function

user.then(function(data){
    console.log(data);
})

// a promise can be in one of these states 
//1.pending 2. fullfilled 3.rejected