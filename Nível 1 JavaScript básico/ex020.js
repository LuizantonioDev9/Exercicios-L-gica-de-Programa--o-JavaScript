function gerarEstacaoDoAno(){
    let estacao = prompt("Digite o mês em extenso (ex:Setembro");
    let res = document.getElementById("resultado");
    switch (estacao) {
        case "Dezembro":
            res.innerHTML = `<p>No mês de <mark>Dezembro</mark> estamos no <mark>VERÃO</mark></p>`;
            break;
        case "Janeiro":
            res.innerHTML = `<p>No mês de <mark>Janeiro</mark> estamos no <mark>VERÃO</mark></p>`;
            break;
        case "Fevereiro":
            res.innerHTML = `<p>No mês de <mark>Fevereiro</mark> estamos no <mark>VERÃO</mark></p>`;
            break;
        case "Março":
            res.innerHTML = `<p>No mês de <mark>Março</mark> estamos no <mark>VERÃO</mark></p>`;
            break;
        case "Abril":
            res.innerHTML = `<p>No mês de <mark>Abril</mark> estamos no <mark>OUTONO</mark></p>`;
            break;
        case "Maio":
            res.innerHTML = `<p>No mês de <mark>Maio</mark> estamos no <mark>OUTONO</mark></p>`;
            break;
        case "Junho":
            res.innerHTML = `<p>No mês de <mark>Junho</mark> estamos no <mark>OUTONO</mark></p>`;
            break;
        case "Julho":
            res.innerHTML = `<p>No mês de <mark>Julho</mark> estamos no <mark>INVERNO</mark></p>`;
            break;
        case "Agosto":
            res.innerHTML = `<p>No mês de <mark>Agosto</mark> estamos no <mark>INVERNO</mark></p>`;
            break;
        case "Setembro":
            res.innerHTML = `<p>No mês de <mark>etembro</mark> estamos no <mark>INVERNO</mark></p>`;
            break;
        case "Outubro":
            res.innerHTML = `<p>No mês de <mark>Outubro</mark> estamos no <mark>PRIMAVERA</mark></p>`;
            break;
        case "Novembro":
            res.innerHTML = `<p>No mês de <mark>Novembro</mark> estamos no <mark>PRIMAVERA</mark>`;
            break;
            default:
                alert('OPÇÃO INVALIDA');
            break;
    }
    

}