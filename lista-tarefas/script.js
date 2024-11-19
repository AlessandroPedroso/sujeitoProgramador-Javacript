let listElement = document.querySelector("#app ul"); //pega a informação do UL

let inputElement = document.querySelector("#app input"); //pega o input dentro do html

let buttonElement = document.querySelector('#app button') // pega o button dentro da div

let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = ""

    tarefas.map((tarefa) => {
        let liElement = document.createElement("li"); // cria o elemento li
        let tarefaText = document.createTextNode(tarefa);//cria o texto

        let linkElement = document.createElement('a');//cria o elemento a
        linkElement.setAttribute("href", "#");// cria o atributo href dentro da tag a

        let linkText = document.createTextNode("Excluir");//cria o texto excluir
        linkElement.appendChild(linkText);//adiciona o texto excluir dentro da tag a

        let posicao = tarefas.indexOf(tarefa); //busca o index da tarefa

        linkElement.setAttribute("onclick",`deletarTarefa(${posicao})`)// envia o index da tarefa para a função deletar

        liElement.appendChild(tarefaText);// adiciona o nome da tarefa em li
        liElement.appendChild(linkElement); // adiciona o link dentro de li
        listElement.appendChild(liElement); // adicionar o li dentro de ul
    })
}

function adicionarTarefas() {
    if (inputElement.value === '') {

        alert("Digite alguma tarefa")
        return false;

    } else {

        let novaterefa = inputElement.value
        tarefas.push(novaterefa);
        inputElement.value = '';
        renderTarefas();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderTarefas();
}



