$(document).ready(function () {
    const $form = $('form[name="form"]');
    const $taskList = $('[data-list]');
    const $clearTaskBtn = $('[data-clear]');
    let tasks = [];

    if (localStorage.getItem('tasks')) tasks = JSON.parse(localStorage.getItem('tasks'));

    function addTask(content, checked = false) {
        const $li = $('<li>', { class: 'todo-item', style: 'display: flex' });
        const $checkbox = $('<input>', { type: 'checkbox', checked: checked });
        const $span = $('<span>', { class: 'todo-item__description', text: content });
        const $removeBtn = $('<button>', { class: 'delete-btn', text: 'Видалити', 'data-clear': true });

        const $modal = $('#id-modal');
        const $modalTitle = $('#id-modal-title');

        $li.on('click', function (e) {
            if ($(e.target).is($span)) {
                $modal.show();
                $modalTitle.text($span.text());
            }
        });

        $('#modal-close').on('click', function () {
            $modal.hide();
        });

        $removeBtn.on('click', function () {
            $li.remove();
            tasks = tasks.filter(task => task.content !== content);
            if (!tasks.length) {
                $clearTaskBtn.hide();
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

        $checkbox.on('change', function () {
            const task = tasks.find(task => task.content === content);
            task.completed = $checkbox.prop('checked');

            if ($checkbox.prop('checked')) {
                $span.addClass('todo-item__description--completed');
                $removeBtn.addClass('todo-item__delete--completed');
            } else {
                $span.removeClass('todo-item__description--completed');
                $removeBtn.removeClass('todo-item__delete--completed');
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

        if (checked) {
            $span.addClass('todo-item__description--completed');
            $removeBtn.addClass('todo-item__delete--completed');
        }

        $li.append($checkbox, $span, $removeBtn);
        $taskList.append($li);
    }

    if (tasks.length) {
        tasks.forEach(task => {
            addTask(task.content, task.completed);
        });
        $clearTaskBtn.show();
    }

    $form.on('submit', function (e) {
        e.preventDefault();

        const taskInput = $form.find('input[name="value"]');
        if (taskInput.val().trim()) {
            const newTask = {
                content: taskInput.val().trim(),
                completed: false
            };
            tasks.push(newTask);
            addTask(newTask.content);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            $clearTaskBtn.show();
        }

        $form[0].reset();
    });

    if ($clearTaskBtn.length) {
        $clearTaskBtn.on('click', function () {
            tasks = [];
            localStorage.clear();
            $taskList.empty();
            $clearTaskBtn.hide();
        });
    }

    $(window).on('storage', function (e) {
        if (e.originalEvent.key === 'tasks') {
            tasks = JSON.parse(e.originalEvent.newValue);
            $taskList.empty();
            tasks.forEach(task => {
                addTask(task.content, task.completed);
            });
        }
    });
});
