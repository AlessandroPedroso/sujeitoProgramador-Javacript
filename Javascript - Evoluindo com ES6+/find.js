let listagem = [5, 3, "Jose", 2, "Matheus"]

// let busca = listagem.find((item) => {
//     return item === "Jose"
// })

let busca = listagem.find((item) => {
    if (item === "Jose") {
        return console.log("ITEM ENCONTRADO COM SUCESSO");
    }
})

console.log(busca)