//emoji &#x1F449;

function contar() {
    let res = document.getElementById('resultado');
    let contagem = 0;
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for(i = 0; i < 10; i++) {
        res.innerHTML += `${contagem} &#x1F449;`
        contagem++
    }
    res.innerHTML += ` &#x1F3C1;`
}