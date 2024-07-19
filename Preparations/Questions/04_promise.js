function promiseMe(time,data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            return res(data);
        },time)
    })
}

promiseMe(1000,"vinayaka").then((data)=>{
    console.log(data);
})

///////////////////////////////////////////////////////


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

checkCanVote(1000,12).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

/////////////////////////////////////////////////////////


