var area = document.getElementById("area"); //h2

function entrar() {
    
    var nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        
        alert("Ops algo deu errado")

        area.innerHTML = "Clique no botão para acessar..."
    } else {
        area.innerHTML = "Bem vindo " + nome + " ";
        
        /* Cria o botão */
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        /*Adicionado o botao dentro do elemento desejado, nesse caso o H2*/
        area.appendChild(botaoSair);
    }
}

function sair() {
    alert("Até mais")

    area.innerHTML = "Você saiu!"
}

function mediaAluno(nota1,nota2) {
    var media = (nota1 + nota2) / 2;

    if (media >= 7) {
        console.log("Aluno aprovado com a média: " + media)
    } else if (media < 7) {
        console.log("Aluno reprovado com a média: " + media);
    }
}

function aluno(nome, curso) {
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;
    console.log(mensagem)
}