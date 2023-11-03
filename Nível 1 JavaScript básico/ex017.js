let res = document.getElementById('resultado');

function gerou() {
    let numeroAleatorio = Math.round(Math.random() * 100 + 1);
    res.innerHTML += `<p>Acabei de pensar no número <mark>${numeroAleatorio}</mark></p>`
}

function limpar() {
    res.innerHTML = '';
}