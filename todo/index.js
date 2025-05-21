const todoinput = document.getElementById('todoinput');
const btn = document.getElementById('btn');
const todolist = document.getElementById('todolist');

btn.addEventListener('click', () => {
    const todo = todoinput.value;
    const todoitem = document.createElement('div');
    todoitem.innerHTML = "<span>" + todo + "</span><button >Delete</button>";
    
    todolist.appendChild(todoitem);
    todoinput.value = '';
})
