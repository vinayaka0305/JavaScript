const user = {
    userId: "abbb111",
    fullName: {
        userName: {
            firstName: "vianyaka",
            lastName: "AV"
        }
    }
}

// console.log(user.fullName.userName.firstName);


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }
const obj3 = { 7: "a", 8: "b", 9: "c" }

// const newObj = Object.assign({},obj1,obj2,obj3);

const newObj = {...obj1,...obj2,...obj3}
// console.log(newObj);

//////////////////////////////////////


const userData = [{
    id: "1",
    userName: "vinay"
}, {
    id: "2",
    userName: "av"
}
]

userData.forEach((val)=>{
    console.log(val.id+"=>"+val.userName )
})

const uniqueKey = new Set();

userData.forEach((val)=>{
    Object.keys(val).forEach(key=>uniqueKey.add(key))
})

console.log([...uniqueKey])

/////////////////////////////////////////

const marvel_hero = {
    name: "Steve Rogers",
    aka: "Captain America",
    place: "Broklyn"
}

const {name,aka,place} = marvel_hero;
console.log(name,aka,place)

////////////////////////////////////////////
