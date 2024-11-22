//REST Operator.

function convidados(...nomes) {
    console.log("SEJA BEM VINDO TODOS CONVIDADOS")
    console.log(nomes)
}

convidados("Matheus", "Lucas", "Maria");

function sorteador(...numeros) {
    console.log(numeros);
    const numerosGerados = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numerosGerados]);
}

sorteador(1,4,5,15,25,90,55,34)