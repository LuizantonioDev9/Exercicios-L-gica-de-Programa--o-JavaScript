function contar() {
    let res = document.getElementById('resultado');
    res.innerHTML += `<h2>Contagem regressiva de 10 a 1</h2>`

    let contador = 10;
    while(contador >= 0) {
        res.innerHTML += `${contador}&#x1F449;`
        contador--;
    }
    res.innerHTML += ` &#x1F3C1;` 
}