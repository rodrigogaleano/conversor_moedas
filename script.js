var usd = null;
var eur = null;
var gbp = null;

document.addEventListener('DOMContentLoaded', () => {
    var url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL'
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        usd = data.USDBRL.bid;
        eur = data.EURBRL.bid;
        gbp = data.GBPBRL.bid;
    })
})



function converter() {

    let resDolar = document.querySelector('#dolar');
    let resEur = document.querySelector('#euro');
    let resGbp = document.querySelector('#libra');
    let container = document.querySelector('.resultado')

    let input = document.getElementById('valor');
    let valor = input.value;

    container.style.display = 'flex';
    resDolar.innerHTML = `<h3>U$${(valor / usd).toFixed(2)}</h3><smaller>Dólar</smaller>`;
    resEur.innerHTML = `<h3>€${(valor / eur).toFixed(2)}</h3><smaller>Euro</smaller>`;
    resGbp.innerHTML = `<h3>£${(valor / gbp).toFixed(2)}</h3><smaller>Libra</smaller>`;

}