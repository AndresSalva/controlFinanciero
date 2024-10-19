import Gasto from "./gasto.js";
import Presupuesto from "./presupuesto.js";

//Gasto
const montoGasto = document.querySelector("#monto-gasto");
const form_gasto = document.querySelector("#gastos-form");
const div_gastos = document.querySelector("#gastos-div");
const gastito = new Gasto;

//Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto")
const form_presupuesto = document.querySelector("#presupuesto-form")
const div_presupuesto = document.querySelector("#presupuesto-div")
const presupuestito = new Presupuesto;

form_gasto.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_gasto = Number.parseInt(montoGasto.value);
  gastito.agregarMonto(valor_gasto);

  div_gastos.innerHTML = "<p>" + gastito.mostrarMonto() + "</p>";
});

form_presupuesto.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_presupuesto = Number.parseInt(montoPresupuesto.value);
  presupuestito.agregarMonto(valor_presupuesto);

  div_presupuesto.innerHTML = "<p>" + presupuestito.mostrarMonto() + "</p>";
});
