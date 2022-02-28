const todoBody = document.querySelector(".todo-body");
const todoSearch = document.querySelector(".todo-search");

const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

function searchItems(){

    if(todoSearch.value === "") Array.from(todoBody.children).forEach(item =>{
        item.style.display = "flex";
    })

    else Array.from(todoBody.children).forEach(item =>{
        item.textContent.indexOf(todoSearch.value) !== -1 ? item.style.display = "flex" : item.style.display = "none";
    })
}


todoSearch.addEventListener('keyup',searchItems);

function addItems(){

    if(addInput.value.trim().length === 0) {
        addInput.value = "";
        return;
    }
    const div = document.createElement('div');
    div.classList.add('todo-items');

    const p = document.createElement("p");
    p.classList.add('todo-names');
    p.textContent = addInput.value;
    addInput.value = "";

    const checkbox = document.createElement('input');
    checkbox.classList.add('todo-checkbox')
    checkbox.type = "checkbox";

    const button = document.createElement('button');
    button.classList.add('todo-btn');

    const btnI = document.createElement('i');
    btnI.classList.add('fa');
    btnI.classList.add('fa-trash');
    
    button.append(btnI);

    div.append(checkbox);
    div.append(p);
    div.append(button);
 
    todoBody.prepend(div);
    
    checkbox.addEventListener('click',checkItems);
    button.addEventListener('click',deleteItems);
}

addBtn.addEventListener('click',addItems);

function checkItems(){
    const todoName = this.nextElementSibling;
    todoName.classList.toggle('todo-line');
}

function deleteItems(){
    const todoItem = this.closest('.todo-items');
    todoItem.style.transform = `translateX(${600}px)`;
    todoItem.style.opacity = 0;

    setTimeout(()=> todoBody.removeChild(todoItem),700);
}

