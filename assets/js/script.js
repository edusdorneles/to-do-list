// <-- Adicionar e deletar task -->
listBtn = document.getElementById('list-add-button');

// <-- Adicionar Task -->
listBtn.addEventListener('click', function() {
    listInput = document.getElementById('list-add-input').value;
    
    if(listInput == '' || listInput == null) {
        alert('Enter some task.');
    } else {
        // Div container para a task.
        listToDo = document.getElementById('to-do-list');
        listToDo.style.display = 'block';

        // Criando node do que está no input para poder dar append.
        listInput = document.createTextNode(listInput);

        // Div principal da task e cria index para identificação da div (counter).
        var task = document.createElement('div');
        task.classList.add('task', 'row');
        listToDo.append(task);

        // Div para o título da task.
        var taskTitleDiv = document.createElement('div');
        taskTitleDiv.classList.add('task-title', 'col-10');
        task.appendChild(taskTitleDiv);

        // Div para o ícone da task.
        var taskIcoDiv = document.createElement('div');
        taskIcoDiv.classList.add('task-icos', 'col-2');
        task.appendChild(taskIcoDiv);


        
        // Adicionando o conteúdo para as divs do título da task.
        var taskCircleIco = document.createElement('i');
        taskCircleIco.classList.add('fas', 'fa-circle');
        taskTitleDiv.appendChild(taskCircleIco);

        var taskTitle = document.createElement('h5');
        taskTitle.appendChild(listInput);
        taskTitleDiv.appendChild(taskTitle);

        // Adicionando o conteúdo para as divs do icone da task.
        var taskBtn = document.createElement('button');
        taskBtn.classList.add('btn');
        var taskIco = document.createElement('i');
        taskIco.classList.add('far', 'fa-trash-alt');
        taskIco.setAttribute('id', 'del-button');
        taskBtn.appendChild(taskIco);
        taskIcoDiv.appendChild(taskBtn);



        // Limpa o campo input.
        document.getElementById('list-add-input').value = '';

        // Append de todo conteúdo criado na div principal.
        listToDo.append(task);



        // <-- Deletar Task -->
        if (taskBtn != undefined) {
            taskBtn.addEventListener('click', function() {
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