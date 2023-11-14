function calcularFatorial() {
    let num = document.getElementById('num').value;
    let saida = document.getElementById('saida');
    let fatorial = 1;
    let calc = num;

    saida.innerHTML = `<h2>Calculando ${num}!</h2>`
    
    while(calc > 1) {
        saida.innerHTML += `${calc} x`
        fatorial *= calc;
        calc--;
    }
    saida.innerHTML += `1 = ${fatorial.toLocaleString('pt-BR')}`
}