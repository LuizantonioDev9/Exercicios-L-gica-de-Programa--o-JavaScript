function contar() {
    let res = document.getElementById('resultado');
    let contador = 1;
    res.innerHTML += `<h2>Contado de 1 até 10, marcando os pares</h2>`

    while(contador <= 10) {
        if(contador % 2 == 0) {
            res.innerHTML += ` <strong><mark>${contador}</mark></strong>&#x1F449;`
        } else {
            res.innerHTML += ` <strong>${contador}</strong>&#x1F449;`
        }
        
        contador++
    }
    res.innerHTML += ` &#x1F3C1;`
}