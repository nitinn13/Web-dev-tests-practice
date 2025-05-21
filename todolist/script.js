const input = document.getElementById('input');
const list = document.getElementById('list');

const addTodo = () => {
    const todo = input.value;
    const li = document.createElement('li');
    li.innerText = todo;
    list.appendChild(li);
    input.value = '';
}