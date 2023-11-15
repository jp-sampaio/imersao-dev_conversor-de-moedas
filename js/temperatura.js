const cf = document.getElementById("cf");
const cfButton = document.querySelector(".cf");

const ck = document.getElementById("ck");
const ckButton = document.querySelector(".ck");

const fc = document.getElementById("fc");
const fcButton = document.querySelector(".fc");

const fk = document.getElementById("fk");
const fkButton = document.querySelector(".fk");

const kc = document.getElementById("kc");
const kcButton = document.querySelector(".kc");

const kf = document.getElementById("kf");
const kfButton = document.querySelector(".kf");

cfButton.addEventListener("click", () => {
  const celsiusEmFahrenheit = Number(cf.value) * 1.8 + 32;
  alert(
    `${cf.value} graus celsius é igual a ${celsiusEmFahrenheit} graus fahrenheit`
    );
});

ckButton.addEventListener("click", () => {
  const celsiusEmKelvin = Number(ck.value) + 273.15;
  alert(
    `${ck.value} graus celsius é igual a ${celsiusEmKelvin} graus kelvin`
  );
});

fcButton.addEventListener("click", () => {
  const fahrenheitEmCelsius = (Number(fc.value) - 32) * 5 / 9;
  alert(`
  ${fc.value} graus fahrenheit é igual a ${fahrenheitEmCelsius} graus celsius`
  );
});

fkButton.addEventListener("click", () => {
  const fahrenheitEmKelvin = (Number(fk.value) - 32) * 5 / 9 + 273.15;
  alert(`
  ${fk.value} graus fahrenheit é igual a ${fahrenheitEmKelvin} graus kelvin`);
});

kcButton.addEventListener("click", () => {
  const kelvinEmCelsius = Number(kc.value) - 273.15;
  alert(`
  ${kc.value} graus kelvin é igual a ${kelvinEmCelsius} graus celsius`);
});

kfButton.addEventListener("click", () => {
  const kelvinEmFahrenheit = (Number(kf.value) - 273.15) * 9 / 5 + 32;
  alert(`
  ${kf.value} graus kelvin é igual a ${kelvinEmFahrenheit} graus fahrenheit`);
});