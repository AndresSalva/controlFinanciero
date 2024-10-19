import Gasto from "./gasto.js";

const montoGasto = document.querySelector("#monto-gasto");
const form = document.querySelector("#gastos-form");
const div = document.querySelector("#gastos-div");
const gastito = new Gasto;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_gasto = Number.parseInt(montoGasto.value);
  gastito.agregarMonto(valor_gasto);

  div.innerHTML = "<p>" + gastito.mostrarMonto() + "</p>";
});
