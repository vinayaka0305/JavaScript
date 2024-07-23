const textIn = document.querySelector('#text-in');
const ulList = document.querySelector('#list')
const addListBtn = document.querySelector("#add");



function addTask(){
    let input = textIn.value;
    let li = document.createElement ('li');
    let div = document.createElement('div');
    li.innerHTML = input;

    const cBtn = document.createElement('button');
    cBtn.setAttribute('class','cbtn');
    cBtn.textContent = "completed"

    
    const dBtn = document.createElement('button');
    dBtn.setAttribute('class','dbtn');
    dBtn.textContent = "delete"

    div.appendChild(li)
    div.appendChild(cBtn);
    div.appendChild(dBtn);

    ulList.appendChild(div);

    completeTask(cBtn,li);
    deleteTask(dBtn,div);
    
    textIn.value = '';
}

addListBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    addTask();
})


function completeTask(btn,list){
    btn.addEventListener('click',()=>{
        if(list.style.textDecoration !== ''){
            list.style.textDecoration = ''
        }else{
            list.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
        }
    })
}


function deleteTask(btn,div){
    btn.addEventListener('click',()=>{
        div.remove()
    })
}