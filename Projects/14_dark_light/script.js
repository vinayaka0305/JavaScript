const button = document.querySelector("#swap");
const app = document.querySelector("#app");

button.addEventListener('click',()=>{
    toggleTheme()
})

function toggleTheme(){
    if(app.className === 'day'){
        app.className = 'night';
        button.className = 'button_night'
    }else{
        app.className = 'day';
        button.className = 'button_day'
    }
}