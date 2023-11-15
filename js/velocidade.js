const velocidadeDaLuzEmKmPorSegundo  = 300.000;
const distanciaDoSol = document.querySelector("#km");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const distanciaEmSegundos = distanciaDoSol.value / velocidadeDaLuzEmKmPorSegundo;
  let tempoNecessario = distanciaEmSegundos / 60;
  tempoNecessario = tempoNecessario.toFixed(2);
  alert(tempoNecessario);
})

