function contagem () {
    let res = document.getElementById('saida');
    let numInicial = document.getElementById('num1').value;
    let numFinal = document.getElementById('num2').value;

    

    if(numInicial <= numFinal) {
        res.innerHTML += `<h2>Contando de ${numInicial} até ${numFinal}</h2>`
        while(numInicial < numFinal) {
            res.innerHTML += `${numInicial}&#x1F449;`
            numInicial++;
        }
        
    } else if (numInicial >= numFinal) {
        res.innerHTML += `<h2>Contando de ${numInicial} até ${numFinal}</h2>`
        while(numInicial > numFinal) {
            res.innerHTML += `${numInicial}&#x1F449;`
            numInicial--;
        }
        
    } 
    
    
    if (numFinal <= numInicial) {
        while(numFinal <= numInicial){
            res.innerHTML += `${numFinal}&#x1F449;`;
            numFinal++;
        }
        res.innerHTML += `&#x1F3C1;`
    } else if(numFinal >= numInicial) {
        while(numFinal >= numInicial) {
            res.innerHTML += `${numFinal}&#x1F449;`;
            numFinal--;
        }
        res.innerHTML += `&#x1F3C1;`
    }

}