//Dates

let myDate = new Date()
// console.log(myDate); //2024-06-27T07:40:19.396Z
// console.log(myDate.toString());//Thu Jun 27 2024 07:40:53 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Thu Jun 27 2024
// console.log(myDate.toLocaleString());//6/27/2024, 7:41:47 AM
// console.log(myDate.toLocaleDateString())// 6/27/2024
// console.log(typeof(myDate)); //object

// let createDate = new Date(2024,1,27);
//console.log(createDate.toString());//Tue Feb 27 2024 00:00:00 GMT+0000 (Coordinated Universal Time) 
// the month count starts from zero
// let createDate = new Date(2024, 1, 27);
// console.log(createDate.toLocaleString());//2/27/2024, 12:00:00 AM
// let createDate = new Date(2024, 0, 27,10,10);
// console.log(createDate.toLocaleString());//1/27/2024, 10:10:00 AM
// let createDate = new Date("2024-06-27");
// console.log(createDate.toLocaleString());//6/27/2024, 12:00:00 AM
// let createDate = new Date("12-31-23");//mm-dd-yy
// console.log(createDate.toLocaleString())//12/31/2023, 12:00:00 AM


let myCreatedDate = new Date("2024-06-26");
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let timeDiffMs = myCreatedDate.getTime() - myTimeStamp //difference in milliseconds between the two dates.

//// Convert the time difference from milliseconds to hours and minutes
let timeDiffInHrs = Math.floor(Math.abs(timeDiffMs) / (1000 * 60 * 60))
//calculated by dividing the difference in milliseconds by the number of milliseconds in an hour (1000 * 60 * 60) 
//and using Math.floor to get the integer part.

let timeDiffInMin = Math.floor((Math.abs(timeDiffMs) % (1000 * 60 * 60)) / (1000 * 60));

console.log(`Time Difference : ${timeDiffInHrs} in hrs and ${timeDiffInMin} min`);


let newDate = new Date();
console.log(newDate.getMonth()+1); // 6
console.log(newDate.getDay()); //4

let formatedDate = newDate.toLocaleString('default',{
    weekday:"short"
})

console.log(formatedDate);//Thu