// Conversor de moedas

const userName = prompt("Qual é o seu nome?")
const button = document.querySelector("button");
const valueInDollars = document.getElementById("dolar");
const valueInEuro = document.getElementById("euro");
const valueInLibra = document.getElementById("libra");
const valueInBitcoin = document.getElementById("bitcoin");
const dollarExchangeRateInReais = 4.91;
const exchangeRateOfgEurosInReais = 5.25;
const poundExchangeRateInReais = 6.02
const bitcoinExchangeRateInReais = 178797.33;

button.addEventListener("click", () => {
  if (valueInDollars.value) {
    alert(dollarToReais(valueInDollars.value));
    valueInDollars.value = "";
  } else if (valueInEuro.value) {
    alert(euroToReais(valueInEuro.value));
    valueInEuro.value = "";
  } else if (valueInLibra.value) {
    alert(libraToReais(valueInLibra.value));
    valueInLibra.value = "";
  } else if (valueInBitcoin.value) {
    alert(bitcoinToReais(valueInBitcoin.value));
    valueInBitcoin.value = "";
  }
})

function dollarToReais(value) {
  let valueInReais = value * dollarExchangeRateInReais;
  valueInReais = valueInReais.toFixed(2);
  return `Olá ${userName}, a cotação de Dolar(es) em Reais é de R$${valueInReais}`;
}

function euroToReais(value) {
  let valueInReais = value * exchangeRateOfgEurosInReais;
  valueInReais = valueInReais.toFixed(2);
  return `Olá ${userName}, a cotação de Euro(s) em Reais é de R$${valueInReais}`;
}

function libraToReais(value) {
  let valueInReais = value * poundExchangeRateInReais;
  valueInReais = valueInReais.toFixed(2);
  return `Olá ${userName}, a cotação de Libra(s) em Reais é de R$${valueInReais}`;
}

function bitcoinToReais(value) {
  let valueInReais = value * bitcoinExchangeRateInReais;
  valueInReais = valueInReais.toFixed(2);
  return `Olá ${userName}, a cotação do Bitcoin para Reais é de R$${valueInReais}`;
}