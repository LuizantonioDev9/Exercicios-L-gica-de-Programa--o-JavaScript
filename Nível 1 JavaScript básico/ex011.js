function calcularMedia() {
    let name = prompt('Qual é o nome do aluno?');
    let primeiraNota = Number(prompt(`Qual foi a primeira nota de ${name}?`));
    let segundaNota = Number(prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${name}?`));
    let media = (primeiraNota + segundaNota) / 2;

    let res = document.getElementById('result');
    res.innerHTML = `<p>Calculando a média final de <mark>${name}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`

    if(media >= 6) {
        res.innerHTML += `<p>A mensagem que temos é: Meus parabéns!</p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style ='color:red;'>Estude um pouco mais!</strong></p>`
    }
    
}