function clicou() {
    let firstValue = Number(prompt('Primeiro valor:'));
    let secondValue = Number(prompt('Segundo Valor:'));
    let opcao;
    opcao = Number(prompt(`Valores informados :${firstValue} e ${secondValue}
    O que vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))
    let sum = firstValue + secondValue;
    let sub = firstValue - secondValue;
    let multi = firstValue * secondValue;
    let div =  firstValue / secondValue;
    let res = document.getElementById('resultado');

    switch (opcao) {
        case 1:
            res.innerHTML = `<p>${firstValue} + ${secondValue} = ${sum}</p>`
            break;
        case 2:
            res.innerHTML = `<p>${firstValue} - ${secondValue} = ${sub}</p>`
            break;
        case 3:
            res.innerHTML = `<p>${firstValue} X ${secondValue} = ${multi}</p>`
            break;
        case 4:
            res.innerHTML = `<p>${firstValue} % ${secondValue} = ${div}</p>`
        default:
            res.innerHTML = `Opção invalida`
            break;
    }
    
}