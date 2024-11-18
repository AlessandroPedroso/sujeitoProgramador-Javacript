//SWITCH

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");

    switch (Number(valor)) {
        case 1:
            alert("Você escolheu 1 = suco")
        break;
        case 2:
            alert("Você escolheu 2 = Agua gelada")
            break;
        case 3:
            alert("Você escolheu 3 = Sorverte")
            break;
        case 4:
            alert("Você chamou o garçom !")
            break;
        default:
            alert("Escolha uma opção entre 1 a 4")
            break;
    }
}

// CONDICIONAIS

var valor = "30";

if (valor === 30) {
    console.log("Sim o valor é igual a 30!")
} else {
    console.log("Numero diferente de 30!")
}

var numero = 10

numero === 10 ? console.log("NUMERO É IGUAL A 10") : console.log("NUMERO NÃO TEM O VALOR 10");


