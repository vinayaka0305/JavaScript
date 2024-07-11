// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log("grand parent clicked")
// },false)

// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log("parent clicked")
// },false)

// document.querySelector('#child').addEventListener('click',()=>{
//     console.log("child clicked")
// },false)

// # event bubbling;
// child clicked
// script.js:6 parent clicked
// script.js:2 grand parent clicked
// events are propagating up the hirrache
//the event bubbling is used by default if we not passed any thrid argument inside
// event listener function
// when pass false the events will bubble out

////////////////////////////////////////////////////////////////////////////////

// event capturing is exactly opposite to the event bubbling->
// it is also called as event trickling or trickling down

// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log("grand parent clicked")
// },true)

// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log("parent clicked")
// },true)

// document.querySelector('#child').addEventListener('click',()=>{
//     console.log("child clicked")
// },true)

// grand parent clicked
// script.js:31 parent clicked
// script.js:35 child clicked
// we pass the true as third argument to achieve the event capturing;

///////////////////////////////////////////////////////////////////////////////////

// stop propagation in event bubbling->

// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log("grand parent clicked")
// },false)

// document.querySelector('#parent').addEventListener('click',(e)=>{
//     console.log("parent clicked")
//     e.stopPropagation();
//     //here the propagation cycle will stop at this point
// },false)

// document.querySelector('#child').addEventListener('click',(e)=>{
//     console.log("child clicked")
//     e.stopPropagation();
// },false)

///////////////////////////////////////////////////////////////////////////////////

// stop propagation in event event capturing->

document.querySelector('#grandParent').addEventListener('click',(e)=>{
    console.log("grand parent clicked")
    e.stopPropagation();
},true)

document.querySelector('#parent').addEventListener('click',(e)=>{
    console.log("parent clicked")
   
    //here the propagation cycle will stop at this point
},true)

document.querySelector('#child').addEventListener('click',(e)=>{
    console.log("child clicked")
   
},true)


