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

    let input = document.getElementById('valor');
    let valor = input.value;

    resDolar.innerHTML = `Dólar: ${(valor / usd).toFixed(2)}`;
    resEur.innerHTML = `Euro:  ${(valor / eur).toFixed(2)}`;
    resGbp.innerHTML = `Libra: ${(valor / gbp).toFixed(2)}`;

}