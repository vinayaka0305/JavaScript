const coding = ["js", "java", "html", "css", "c++"];

const values = coding.forEach((item) => {
    return item
})

// console.log(values) // undefined
// in foreach loop does't return anything   

//++++++++++++++++++++++++ filter +++++++++++++++++++++++++++++

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numbers = numArr.filter((num)=> num>5);

// const numbers = numArr.filter((num)=>(
//     num>5 
// )) 
// return not used because we have used parantheses

const numbers = numArr.filter((num) => {
    return num > 5
})
// here if we use curely brackets we need to return that using return keyword


// console.log(numbers)

// example
// pushing the values into newArr with forEach loop with some condition checking

const newArr = [];

numArr.forEach((num) => {
    if (num > 5) {
        newArr.push(num)
    }
})

// console.log(newArr);

//+++++++++++++++++++++++++++++++++++++++++ filter example +++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk)=>(
    bk.genre === "History"
))

userBooks = books.filter((bk)=>(
    bk.publish >= 2000
))

userBooks = books.filter((bk)=>(
    bk.publish >= 1995 && bk.genre === "History"
))

console.log(userBooks) 

// below is the console of the filtered values
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++