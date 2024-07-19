const inputVal = document.querySelector("#to-do-list")
const todoListContainer = document.querySelector(".to-do-listcontainer")
const ulCnt = document.querySelector(".list");
const submitBtn = document.querySelector(".submit")


function addTask(e){
    e.preventDefault();
    let input = inputVal.value;
    if(input.trim()==='') return
    let li = document.createElement('li');
    li.textContent = input
    let div = document.createElement('div');
    
    let completeBtn = document.createElement("button");
    completeBtn.setAttribute('class',"c-btn")
    completeBtn.innerText = "completed";

    let deleBtn = document.createElement("button");
    deleBtn.setAttribute("class","d-btn");
    deleBtn.innerText = "delete";

    div.appendChild(li)
    div.appendChild(completeBtn);
    div.appendChild(deleBtn);
    ulCnt.appendChild(div)

    completTaskFun(completeBtn,li); 
    deleteTaksFun(deleBtn,div);

    inputVal.value = '';
} 

submitBtn.addEventListener("click",addTask);

function completTaskFun(btn,list){
    btn.addEventListener('click',()=>{
        if (list.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
            list.style.textDecoration = '';
        } else {
            list.style.textDecoration = 'line-through';
        }
    })
}

function deleteTaksFun(btn,div){
    btn.addEventListener("click",()=>{
        div.remove();
    })
}

