function calcular() {
    let metrosQuadrados = document.getElementById('numMetros').value;
    let numeroDePessoas = document.getElementById('numPessoas').value;
    let eletronicos = document.getElementById('numEletronicos').value;
    let saida = document.getElementById('saida');
    let btu = 600;
    saida.style.fontSize = '1.2em'
    saida.style.fontFamily =  'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif';

    numeroDePessoas = numeroDePessoas * btu;
    metrosQuadrados = metrosQuadrados * btu;
    eletronicos = eletronicos * btu;
    let totalBtu = numeroDePessoas + metrosQuadrados + eletronicos;

    if(totalBtu <= 15000 && totalBtu >= 12000) {
        totalBtu = 12000;
        saida.innerHTML += `<p>${totalBtu} BTU</p>`;
    } else {
        saida.innerHTML += `<p>${totalBtu} BTU</p>`
    }

    

}