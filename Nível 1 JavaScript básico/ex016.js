function checarIdade() {
    let yearOfBirthday = Number(prompt('Em que ano você nasceu?'));
    let data = new Date;
    let year = data.getFullYear();
    let calc = year - yearOfBirthday;
    let res = document.getElementById('resultado');

    res.innerHTML = `Quem nasceu em ${yearOfBirthday} vai completar ${calc} anos em ${year}`
}