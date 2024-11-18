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