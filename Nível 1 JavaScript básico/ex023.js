function contar() {
    let res = document.getElementById('resultado');

    res.innerHTML += `<h2>Números pares de 1 até 10</h2>`

    let contador = 0;
    while(contador <= 10) {
        if(contador % 2 == 0) {
            res.innerHTML += ` <mark>${contador}</mark>&#x1F449;` 
        }
        contador++
    }
    res.innerHTML += ` &#x1F3C1;` 
}


 
