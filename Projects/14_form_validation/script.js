const nameError = document.querySelector("#name-error")
const emailError = document.querySelector("#email-error")
const phoneError = document.querySelector("#phone-error")
const messgaError = document.querySelector("#message-error")
const submitError = document.querySelector("#submit-error")


function validateName(){
    let name = document.querySelector('#fullname').value;
    if(name.length == 0){
        nameError.innerHTML = "name is requrired"
        return false;
    }
    nameError.innerHTML = "valid"
    return true
}

function validatePhone(){
    let phone = document.querySelector('#phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = "phone no is required"
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "phone no should be 10 digits"
        return false;
    }
    phoneError.innerHTML = 'valid'
    return true;
}

function validateEmail(){
    let email = document.querySelector('#email').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)){
        emailError.innerHTML = 'Invalid email format'
        return false;
    }

    if(email.length == 0){
        emailError.innerHTML = 'email is required'
        return false;
    }

    emailError.innerHTML = 'valid'
    return true
}

function validateMessage(){
    let message = document.querySelector('#message').value;
    let required = 30;
    let left = required-message.length;
    if(left>0){
        messgaError.innerHTML = left + 'more character needed';
        return false
    }

    messgaError.innerHTML = 'valid'
    return true
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.innerHTML = 'please fix error to submit';
        return false; 
    }
    submitError.innerHTML = "";
    return true;
}

document.querySelector("#form").addEventListener('submit',(e)=>{
    e.preventDefault();
})