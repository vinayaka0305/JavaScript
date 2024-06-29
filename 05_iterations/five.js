// for each loop
const coding = ["html", "css", "java", "js", "c++"];

// foreach loop has a callback function which takes the values of array as parameter

// coding.forEach(function(val){
//     console.log(val) // html,css,java.............
// })

// using arrow function

// coding.forEach((val)=>{
//     console.log(val)
// })

// example 

function printMe(val) {
    // console.log(val)
}

// coding.forEach(printMe) // by give function as parameter we can use the foreach loop
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// in foreach loop we can access the value,index, and array itself
coding.forEach((val, index, arr) => {
    console.log(val, index, arr);
})

// html 0 [ 'html', 'css', 'java', 'js', 'c++' ]
// css 1 [ 'html', 'css', 'java', 'js', 'c++' ]
// java 2 [ 'html', 'css', 'java', 'js', 'c++' ]
// js 3 [ 'html', 'css', 'java', 'js', 'c++' ]
// c++ 4 [ 'html', 'css', 'java', 'js', 'c++' ]

// above is the ouput of foreach 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array of object iteration using for each

const myCoding = [
    {
        language: "JS",
        languageFileName: "js"
    },
    {
        language: "JAVA",
        languageFileName: "java"
    },
    {
        language: "PYTHON",
        languageFileName: "py"
    }
]

myCoding.forEach((val)=>{
    console.log(val.language, val.languageFileName)
})