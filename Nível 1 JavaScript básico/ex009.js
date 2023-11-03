let contador = 0;
let res = document.getElementById('resultado');

function clicou() {
    contador++
    res.innerHTML = `<p>O contador está com ${contador} cliques</p>`
}