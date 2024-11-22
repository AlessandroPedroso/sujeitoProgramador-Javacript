let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 10];


let pessoas = {
    nome: "Alessandro",
    idade: "30",
    cargo:"Programador"
}

let novaPessoa = {
    ...pessoas,
    status: "ATIVO",
    cidade: "Alvorada / RS",
    telefone:"51998152732"
}

function novoUsuario(info) {
    let dados = {
        ...info,
        status: "ATIVO",
        inicio:"20/03/2023"
    }

    console.log(dados);
}

novoUsuario({nome:"Alessandro",sobrenome:"Pedroso", cargo:"Dev"});


