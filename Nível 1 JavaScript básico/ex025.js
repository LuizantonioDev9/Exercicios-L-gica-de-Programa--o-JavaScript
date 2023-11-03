function contagem() {
    let input = document.getElementById('fnum');
    let res = document.getElementById('resultado');
    let num = input.value;
    let contador = 0;

    res.innerHTML += `<h2>Contando de ${contador} até ${num}</h2>`

    while(contador <= num) {
        res.innerHTML += `${contador}&#x1F449;`
        contador++
    }
    res.innerHTML += `&#x1F3C1;`
}