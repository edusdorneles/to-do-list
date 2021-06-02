// <-- Adicionar e deletar task -->
listBtn = document.getElementById('list-add-button');

// <-- Adicionar Task -->
listBtn.addEventListener('click', function () {
    listInput = document.getElementById('list-add-input').value;

    if (listInput == '' || listInput == null || !listInput.trim().length) {
        alert('Enter some task.');
    } else {
        // Div container para a task.
        listToDo = document.getElementById('to-do-list');
        listToDo.style.display = 'block';

        // Criando node do que está no input para poder dar append.
        listInput = document.createTextNode(listInput);

        // Div principal da task e cria index para identificação da div (counter).
        var task = document.createElement('div');
        task.setAttribute('class', 'task row')
        listToDo.append(task);

        // Div para o título da task.
        var taskTitleDiv = document.createElement('div');
        (screen.width <= 768) ? taskTitleDiv.setAttribute('class', 'task-title col-9') : taskTitleDiv.setAttribute('class', 'task-title col-10');
        task.appendChild(taskTitleDiv);

        // Div para o ícone da task.
        var taskIcoDiv = document.createElement('div');
        (screen.width <= 768) ? taskIcoDiv.setAttribute('class', 'task-icos col-3') : taskIcoDiv.setAttribute('class', 'task-icos col-2');
        task.appendChild(taskIcoDiv);


        // Adicionando o conteúdo para as divs do título da task.
        var taskCircleIco = document.createElement('i');
        taskCircleIco.setAttribute('class', 'fas fa-circle');
        taskTitleDiv.appendChild(taskCircleIco);

        var taskTitle = document.createElement('h5');
        taskTitle.appendChild(listInput);
        taskTitleDiv.appendChild(taskTitle);

        // Adicionando o conteúdo para as divs do icone de delete e ver mais.
        var taskBtnMore = document.createElement('button');
        taskBtnMore.setAttribute('class', 'btn');

        var taskIcoMore = document.createElement('i');
        taskIcoMore.setAttribute('class', 'far fa-eye');
        taskIcoMore.style.color = '#0d6efd';
        taskBtnMore.appendChild(taskIcoMore);
        taskIcoDiv.appendChild(taskBtnMore);


        var taskBtnDel = document.createElement('button');
        taskBtnDel.setAttribute('class', 'btn');

        var taskIcoDel = document.createElement('i');
        taskIcoDel.setAttribute('class', 'far fa-trash-alt');
        taskIcoDel.style.color = 'red';
        taskBtnDel.appendChild(taskIcoDel);
        taskIcoDiv.appendChild(taskBtnDel);


        // Append de todo conteúdo criado na div principal.
        listToDo.append(task);

        // Limpa o campo input.
        document.getElementById('list-add-input').value = '';

        // Validando o tamanho da task para ver se é maior que o suportado.        
        if (taskTitle.offsetHeight < taskTitle.scrollHeight || taskTitle.offsetWidth < taskTitle.scrollWidth) {
            var dots = document.createElement('p');
            dots.setAttribute('class', 'title-dots');
            dots.append('...');
            taskTitleDiv.appendChild(dots);
        }

        // <-- Ver mais - Task -->
        if (taskBtnMore != undefined) {
            taskBtnMore.addEventListener('click', function () {
                var taskModal = document.querySelector('.more-modal');
                taskModal.style.display = 'flex';

                // Criando elementos dentro do modal principal.
                var modalIn = document.createElement('div');
                modalIn.setAttribute('class', 'more-modal-in');
                taskModal.appendChild(modalIn);

                var modalTitle = document.createElement('div');
                modalTitle.setAttribute('class', 'more-modal-title');
                modalTitle.innerHTML = 'Task';
                modalIn.appendChild(modalTitle);

                var modalText = document.createElement('div');
                modalText.setAttribute('class', 'more-modal-text');
                var modalTextP = document.createElement('p');
                modalText.appendChild(modalTextP);
                modalIn.appendChild(modalText);
                modalTextP.append(taskTitle.innerHTML);

                // Botão "fechar"
                var modalClose = document.createElement('div');
                modalClose.setAttribute('class', 'more-modal-close');
                modalIn.appendChild(modalClose);

                var modalCloseBtn = document.createElement('button');
                modalCloseBtn.setAttribute('class', 'btn');
                modalCloseBtn.innerHTML = 'Close';
                modalClose.appendChild(modalCloseBtn);

                modalCloseBtn.addEventListener('click', function() {
                    taskModal.style.display = 'none';
                    modalIn.remove();
                });
            });
        }

        // <-- Deletar - Task -->
        if (taskBtnDel != undefined) {
            taskBtnDel.addEventListener('click', function () {
                // Remover a task.
                task.remove();

                // Verificando se vai ter alguma task sobrando quando deletar.
                var taskCounter = listToDo.getElementsByTagName('div');
                if (taskCounter.length == 0) {
                    listToDo.style.display = 'none';
                }
            });
        }
    }
});