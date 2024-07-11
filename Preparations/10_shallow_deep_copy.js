const obj1 = {
  a: 1,
  b: { c: 1 },
};

const shallowCopy = { ...obj1 };
shallowCopy.b.c = 3;
console.log(obj1.b.c);
//only top level properties are copied and remainig is shared b/w original and copied
// it will affect the the orginal one because sharing the same refrences

const obj2 = {
  a: 1,
  b: {
    c: 2,
  },
};

const deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.b.c = 3;
console.log(obj2.b.c);
// all level properties are copied and will not affect the original one;

////////////////////////////////////////////////////////

console.log(NaN == NaN);// false;
console.log(NaN === NaN); // false 
// since NaN not equals to its defination it self so it will be false'

//////////////////////////////////////////////////////////////////

const str = "ss vinayaka sffffsf ssdf";

function getLongestWord(str){
    const res = str.split(' ');
    const ans = [];
    console.log(res);
    let max = 0;
    for(let i=0;i<res.length;i++){
        ans.push(res[i].length)
    }
    console.log(ans)
    let index
    for(let i=0;i<ans.length;i++){
        if(ans[i]>max){
            max = ans[i];
            index = i;
        }
    }
    return res[index];
}

const res = getLongestWord(str);
console.log(res)

///////////////////////////////////////////////////////////////////

function factorial(n){
    if(n===0 || n===1) return 1;
    // return n * factorial(n-1);

    let res = 1;
    for(let i=2;i<=n;i++){
        res *= i;
    }
    return res;
}

const ans = factorial(3);
console.log(ans);