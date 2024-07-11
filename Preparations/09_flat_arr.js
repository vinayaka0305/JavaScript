const arr = [[1,2],[3,4],[5,6]];

const res = arr.flat(1);
console.log(res);

// without inbuilt method

function flattArr(arr,n){
    if(n===0) return arr;
    const res = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            res.push(arr[i]);
        }else{
            res.push(...flattArr(arr[i],n-1))
        }
    }
    return res;
}
const output = flattArr(arr,1)
console.log(output);

////////////////////////////////////////

console.log('4'+6*5); //430
console.log('4'*6 + 5);// the type convertion is happened implicity and 4 * 6 + 5 // 29

console.log(typeof NaN); // number

console.log('5'-'3'+6);//8

const arr1 = ['z','a','x','y'];

// const result = arr1.sort();
// console.log(result);


Array.prototype.sortAarr = function(){
    let n = this.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1;j++){
            if(this[j]>this[j+1]){
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this
}

const result = arr1.sortAarr();
console.log(result)
