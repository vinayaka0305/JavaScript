// reduce

const arr = [1, 2, 3];

const myTotal = arr.reduce((acc, currVal) => (
    // console.log(`accVal : ${acc} - currVal :${currVal}`),
    acc + currVal
), 0)

// console.log(myTotal);

const shoppinCart = [
    {
        name: "js",
        price: 2999,
    },
    {
        name: "py",
        price: 999,
    },
    {
        name: "Data science",
        price: 12999,
    },
]


const total = shoppinCart.reduce((acc, item) => (
    acc + item.price
), 0)

console.log(total);