// ========== VARIÁVEIS ==========
var usd = null; //Dólar
var eur = null; //Euro
var gbp = null; //Libra

// ========== CONSULTA API QUANDO O DOCUMENTO ESTIVER CARREGADO ==========
document.addEventListener('DOMContentLoaded', () => {
    var url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL' //URL da API
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            usd = data.USDBRL.bid; //Armazena o valor do dólar
            eur = data.EURBRL.bid; //Armazena o valor do euro
            gbp = data.GBPBRL.bid; //Armazena o valor da libra
        })
})

// ========== CONVERSÃO ==========
function converter() {
    // Selecionando os campos do documento html
    let resDolar = document.querySelector('#dolar');
    let resEur = document.querySelector('#euro');
    let resGbp = document.querySelector('#libra');
    let container = document.querySelector('.resultado')
    let erro = document.querySelector('.erro')
    let input = document.getElementById('valor');

    let valor = input.value; //Armazena o valor do input

    //Valida a resposta
    if (valor == '') {
        //Caso não haja resposta, oculta o resultado e exibe uma mensagem de erro
        erro.style.display = 'flex';
        container.style.display = 'none';
        erro.innerHTML = 'Informe um valor válido para conversão!'
    } else {
        //Caso haja resposta, oculta a mensagem de erro e exibe a conversão
        erro.style.display = 'none';
        container.style.display = 'flex';
        
        //Insere os valores na tela
        resDolar.innerHTML = `<h3>U$${(valor / usd).toFixed(2)}</h3><smaller>Dólar</smaller>`;
        resEur.innerHTML = `<h3>€${(valor / eur).toFixed(2)}</h3><smaller>Euro</smaller>`;
        resGbp.innerHTML = `<h3>£${(valor / gbp).toFixed(2)}</h3><smaller>Libra</smaller>`;
    }
}