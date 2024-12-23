const input = document.getElementById('js-todo-input');
const list = document.getElementById('js-todo-list');
const btn = document.getElementById('btn');

function createToDo(value) {
    const listItem = document.createElement('li');
    listItem.className = 'js-todo-item';
    listItem.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-delete';
    listItem.appendChild(deleteBtn);

    return listItem;
} 

btn.addEventListener('click', () => {
    if (input.value === '') return;

    list.appendChild(createToDo(input.value));
    input.value = '';
});

btn.addEventListener('click', createToDo);

list.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-delete')) {
        const listItem = event.target.parentElement;
        list.removeChild(listItem);
    }
});
