// setInterval
function acao() {
    document.write("Executando...<br>")
}

// var timer = setInterval(() => {
//     acao()
// }, 1000);

// clearInterval(timer)// serve para parar o setInterval

setTimeout(() => {
    acao();
}, 3000);
