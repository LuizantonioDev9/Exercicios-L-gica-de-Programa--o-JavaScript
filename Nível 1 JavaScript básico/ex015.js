function analisar() {
    let res = document.getElementById('resultado');
    let data = new Date;
    let date = data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();
    let daysOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let day = data.getDay();
    let week = daysOfTheWeek[day];
    let hour = data.getHours();
    let minute = data.getMinutes();
    let seconds = data.getSeconds();

    
    res.innerHTML = `<p>Dia:<mark> ${date}</mark></p>`
    res.innerHTML += `<p>Mês:<mark> ${month}</mark></p>`
    res.innerHTML += `<p>Ano:<mark> ${year}</mark></p>`
    res.innerHTML += `<p>Dia da semana:<mark> ${week}</mark></p>`
    res.innerHTML += `<p>Hora:<mark> ${hour}</mark></p>`
    res.innerHTML += `<p>Minutos:<mark> ${minute}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${seconds}</mark></p>`
    
}