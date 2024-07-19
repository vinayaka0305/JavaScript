(function name(){
    console.log("hi")
})();

((name)=>{
    console.log(`hi ${name}`)
})("vinayaka")
////////////////////////


const random = Math.round(Math.random() * 10)+1;
console.log(random);

/////////////////////////////////////

let a = null;
let val = Number(a)
console.log(val)

////////////////////////////////

function AppointMent(appDate){
    this.date = new Date(appDate)
    this.location = '';

    this.setLoaction=function(location){
        this.location = location;
    }

    this.getLocation = function(){
        return this.location
    }

    this.toString = function(){
        return `Appointment on ${this.date.toDateString()} at ${this.location}`
    }
}

let appDate = "2024-7-19"
let location = "DC Office at DVG"

const newApp = new AppointMent(appDate);
newApp.setLoaction(location)

console.log(newApp.toString());
console.log(newApp.getLocation());

