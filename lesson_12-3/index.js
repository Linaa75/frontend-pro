function toDo() {
    const input = document.getElementById('js-todo-input');
    const name = input.value.trim();
    if (name === '') return;

    const list = document.getElementById('js-todo-list');
    const listItem = document.createElement('li');
    listItem.className = 'js-todo-item';
    listItem.textContent = name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-delete';
    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);
    input.value = '';
} 

const btn = document.getElementById('btn');
btn.addEventListener('click', toDo);

const list = document.getElementById('js-todo-list');
list.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-delete')) {
        const listItem = event.target.parentElement;
        list.removeChild(listItem);
    }
});