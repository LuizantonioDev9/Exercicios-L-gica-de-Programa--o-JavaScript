let numeroAleatorio = Math.round(Math.random() * 100 + 1);
let res = document.getElementById('resultado');


function adivinhe() {
    let palpite = Number(prompt('Qual é o seu palpite?'));


    if(palpite > numeroAleatorio) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é MENOR</p>`
    } else if (palpite == numeroAleatorio) {
        res.innerHTML += `<p>PARABÉNS! Você acertou! Eu tinha sorteado o valor ${numeroAleatorio}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    } else if(palpite < numeroAleatorio) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é MAIOR</p>`
    }
    console.log(numeroAleatorio)
}



