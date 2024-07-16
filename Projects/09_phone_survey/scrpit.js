const submitBtn = document.querySelector("#submit");
const resultHolder = document.querySelector("#result-holder");
const errorsHolder = document.querySelector("#errors-holder");
const qAge = document.querySelector("#q_age");
const qOwnsPhone = document.querySelector("#q_owns_phone");

function ageChange(e) {
  const age = Number(e.target.value);
//   console.log(age);
  if (age < 5) {
    setError('you need to be atleast 5 years old to participate')
    submitBtn.setAttribute("disabled", "");
  } else {
    setError('')
    submitBtn.removeAttribute("disabled");
  }
}
function handleSubmit(e) {
  e.preventDefault();
  const age = Number(qAge.value)
  console.log(age)
  if(age===0){
    setError('please choose age')
    return;
  }
  const havePhone = qOwnsPhone.checked
  console.log(havePhone);// return true false;

  if(havePhone){
    if(age<13){
        resultHolder.textContent = "You are too young to have a phone"
    }else{
        resultHolder.textContent = 'Use your phone in moderation';
    }
  }else{
    if(age < 13){
        resultHolder.textContent = 'you will get a phone soon';
    }else{
        resultHolder.textContent = 'you should get a phone'
    }
  }
}


function setError(error){
    errorsHolder.textContent = error
}