function calcular() {
    let num = Number(prompt('Digite um número:'));
    let res = document.getElementById('resultado')
    if(num % 2 == 0) {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`
    } else {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`
    }
}