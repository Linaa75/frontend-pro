const form = document.forms.form;
const taskList = document.querySelector('[data-list]');
const clearTaskBtn = document.querySelector('[data-clear]');

let tasks = [];

if (localStorage.getItem('tasks')) tasks = JSON.parse(localStorage.getItem('tasks'));

function addTask(content, checked = false) {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.classList.add('todo-item');

    const modal = document.getElementById('id-modal');
    const modalTitle = document.getElementById('id-modal-title');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;

    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = content;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add("delete-btn");
    removeBtn.textContent = "Видалити";
    removeBtn.dataset.clear = "true";

    li.addEventListener('click', (e) => {
        if (e.target === span) {
            modal.style.display = "block";
            modalTitle.textContent = span.textContent;
        }
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        modal.style.display = "none";
    });


    removeBtn.addEventListener('click', (e) => {
        const taskItem = e.currentTarget.closest('li');
        taskItem.remove();

        tasks = tasks.filter(task => task.content !== content);

        if (!tasks.length) {
            clearTaskBtn.style.display = "none";
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    checkbox.addEventListener('change', () => {
        const task = tasks.find(task => task.content === content);
        task.completed = checkbox.checked;

        if (checkbox.checked) {
            span.classList.add('todo-item__description--completed');
            removeBtn.classList.add('todo-item__delete--completed');
        } else {
            span.classList.remove('todo-item__description--completed');
            removeBtn.classList.remove('todo-item__delete--completed');
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    if (checked) {
        span.classList.add('todo-item__description--completed');
        removeBtn.classList.add('todo-item__delete--completed');
    }

    li.append(checkbox);
    li.append(span);
    li.append(removeBtn);
    taskList.append(li);
}

if (tasks.length) {
    tasks.forEach(task => {
        addTask(task.content, task.completed);
    });
    clearTaskBtn.style.display = 'block';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskInput = form.elements.value;
    if (taskInput.value.trim()) {
        const newTask = {
            content: taskInput.value.trim(),
            completed: false
        };
        tasks.push(newTask);
        addTask(newTask.content);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        clearTaskBtn.style.display = "block";
    }

    e.target.reset();
});

if (clearTaskBtn) {
    clearTaskBtn.addEventListener('click', () => {
        tasks = [];
        localStorage.clear();

        while (taskList.firstElementChild) {
            taskList.firstElementChild.remove();
        }

        clearTaskBtn.style.display = "none";
    });
}

window.addEventListener('storage', (e) => {
    if (e.key === 'tasks') {
        tasks = JSON.parse(e.newValue);
        taskList.innerText = '';
        tasks.forEach(task => {
            addTask(task.content, task.completed);
        });
    }
});