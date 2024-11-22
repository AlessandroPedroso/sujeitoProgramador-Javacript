
// Reduce = o Reduce busca reduzir um array

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador,numero) => {
    console.log(`${acumulador} - total ate o momento`)
    console.log(`${numero} - valor atual`)
    console.log('===================')
    return acumulador += numero;
})

console.log(total)