function gerarNumeroMega(qtdNumero) {
    if (qtdNumero < 6 || qtdNumero > 9) {
        console.log("Apenas numeros de 6 atá 9")
        return []
    }

    const numeros = [];

    while (numeros.length < qtdNumero) {
         const numeroAleatorio = Math.floor(Math.random() * 60) + 1; // gera um numero aleatorio até 60
        
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio)
        }
    }

    return numeros
}

const numeroSorteado = gerarNumeroMega(6);
console.log(numeroSorteado)