function clicou() {
    let numOne = Number(prompt('Digite um número:'));
    let numTwo = Number(prompt('Digite outro número'));
    let res = document.getElementById('resultado');

    if(numOne > numTwo) {
        res.innerHTML = `<p>Analisando os valores ${numOne} e ${numTwo}, o maior valor é ${numOne}</p>`
    }

    if(numOne < numTwo) {
        res.innerHTML = `<p>Analisando os valores ${numOne} e ${numTwo}, o maior valor é ${numTwo}</p>`
    }

    if(numOne == numTwo) {
        res.innerHTML = `<p>Analisando os valores ${numOne} e ${numTwo}, ambos são IGUAIS</p>`
    }
}