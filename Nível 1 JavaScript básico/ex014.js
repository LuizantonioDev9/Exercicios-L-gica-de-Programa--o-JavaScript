function clicou() {
    let res = document.getElementById('resultado');
    let date = new Date;
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${date}</mark></p>`
}