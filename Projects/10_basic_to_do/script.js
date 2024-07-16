const inputValue = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoBtnadd = document.querySelector(".todo-btn");

function addTask(e){
    e.preventDefault();
    const taskFromField = inputValue.value;
    console.log(taskFromField);
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.textContent = taskFromField;
    li.setAttribute('class','todo-item')
    const completBtn = document.createElement('button');
    completBtn.innerText = 'completed'
    completBtn.setAttribute('class','complete-btn');
    const delBtn = document.createElement("button");
    delBtn.innerText = 'delete'
    delBtn.setAttribute('class','trash-btn');
    
    div.appendChild(li);
    div.appendChild(completBtn);
    div.appendChild(delBtn)

    todoList.appendChild(div);

    completeTask(completBtn,li);
    deleteTask(delBtn,div)
    saveData();
    inputValue.value = ''
}

todoBtnadd.addEventListener("click",addTask)

function completeTask(btn,list){
    btn.addEventListener('click',()=>{
        if(list.style['text-decoration'] !== ''){
            list.style['text-decoration'] = '';
            saveData();
        }else{
            list.style['text-decoration'] = "line-through solid rgb(0, 0, 0)"
            saveData();
        }
    })
}

function deleteTask(btn,task){
    btn.addEventListener("click",()=>{
        task.remove(); // removes child
    })
}

function saveData() {
    localStorage.setItem('data', todoList.innerHTML);
}

function showList() {
    todoList.innerHTML = localStorage.getItem('data') || '';
    document.querySelectorAll('.complete-btn').forEach((btn, index) => {
        completeTask(btn, todoList.children[index].querySelector('li'));
    });
    document.querySelectorAll('.trash-btn').forEach((btn, index) => {
        deleteTask(btn, todoList.children[index]);
    });
}

showList();