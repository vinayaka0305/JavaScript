function findMissingNum(arr,upperBound,lowerBound){

    let n = upperBound - lowerBound+1;
    let expectedSum = (n*(lowerBound+upperBound))/2;

    let sum = arr.reduce((acc,int)=>{
        return acc+int
    },0)

    let missingNum = expectedSum-sum;
    console.log(missingNum);
}

findMissingNum([1,4,3],4,1) //2