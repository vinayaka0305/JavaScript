let students = [
  { name: "Ram", scores: [80, 95, 60] },
  { name: "Mohan", scores: [85, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [95, 90, 94] },
];

function getHighesScorer(student) {
  const getAverage = student.map((student) => {
    const average =
      student.scores.reduce((acc, int) => acc + int, 0) / student.scores.length;
    return { name: student.name, average: average };
  });
  // console.log(getAverage)

  const highestscorer = getAverage.filter((student) => {
    return student.average > 90;
  });

  return highestscorer;
}

const res = getHighesScorer(students);
res.forEach((val) => {
  // console.log(val.name+" : "+val.average);
});

//////////////////////////////////////////////////////////////////

function findMissing(arr, upperBound, lowerBound) {
  let n = upperBound - lowerBound + 1;
  let tSum = (n * (upperBound + lowerBound)) / 2;
  let sum = arr.reduce((acc, int) => acc + int, 0);
  let missNum = tSum - sum;

  return missNum;
}

const res1 = findMissing([1, 2, 4], 4, 1);
// console.log(res1);
/////////////////////////////////////////////////////////////////////////////

const addAndSubstract = {
    num1:6,
    num2:4,
    add:function(){
        return this.num1 + this.num2
    },
    substract:function(){
        return this.num1 - this.num2;
    }
}

const calculator = {
    product:function(){
        return this.num1 * this.num2
    },

    divide:function(){
        return this.num1 / this.num2;
    }
}

Object.setPrototypeOf(calculator,addAndSubstract);

// console.log(calculator.add());
// console.log(calculator.divide());
// console.log(calculator.substract());

//////////////////////////////////////////////////////////////////////////////

function generateOrder(){
    let count = 0;
    function increment(){
        count++;
        return `total order =  ${count}`
    }
    return increment;
}

const res2 = generateOrder();
// console.log(res2())
// console.log(res2())
// console.log(res2())
///////////////////////////////////////////////////////////////////////////////


class Account{

    static accCount = 0;
    static totalBalance = 0;
    constructor(accNum,balance){
        this.accNum = accNum
        this.balance = balance;

        Account.accCount += 1
        Account.totalBalance += balance
    }

    static returnTotalBalance(){
        return Account.totalBalance
    }

    static returnAccCount(){
        return Account.accCount;
    }
}

const user1 = new Account("as1111",1000);
const user2 = new Account("ass222",2000);

const totalAcc = Account.returnAccCount();
console.log(totalAcc);
const total = Account.returnTotalBalance();
console.log(total);

/////////////////////////////////////////////////////////

function checkCanVote(time,age){
    return new Promise((res,rej)=>{
        if(age>=18){
            setTimeout(()=>{
                res("you can vote")
            },time)
        }else{
            setTimeout(()=>{
                rej("you cannot vote")
            },time)
        }
    })
}

checkCanVote(1000,10).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

///////////////////////////////////////////////////////////
