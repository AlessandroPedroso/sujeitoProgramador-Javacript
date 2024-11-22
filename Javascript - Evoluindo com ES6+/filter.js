let palavras = ["Alessandro", "Taís", "José", "Eduardo", "Ana"]

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);

