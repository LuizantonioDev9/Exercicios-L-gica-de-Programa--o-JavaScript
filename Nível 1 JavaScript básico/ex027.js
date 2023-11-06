function tabuada() {
    let saida = document.getElementById('saida');
    let num = document.getElementById('num').value;

    saida.innerHTML = `<h2>Tabuada de ${num}</h2>`

    for(i = 1; i <= 10; i++) {
        let calc = num * i;
        saida.innerHTML += `${num} X ${i} = <strong>${calc}</strong><br>`
    }
   
}