import Gasto from "./gasto.js";
import Presupuesto from "./presupuesto.js";
import Ingreso from "./ingreso.js";

//Gasto
const fechaGasto = document.querySelector("#fecha-gasto");
const montoGasto = document.querySelector("#monto-gasto");
const form_gasto = document.querySelector("#gastos-form");
const div_gastos = document.querySelector("#gastos-div");
const gastito = new Gasto;

//Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto")
const form_presupuesto = document.querySelector("#presupuesto-form")
const div_presupuesto = document.querySelector("#presupuesto-div")
const presupuestito = new Presupuesto;

//Categorias
const cat_gastos = document.querySelector('#gastos-btn');
const cat_ingresos = document.querySelector('#ingresos-btn');
const gastosImage = document.querySelector('img[alt="Gastos"]');
const ingresosImage = document.querySelector('img[alt="Ingresos"]');

//Ingreso
const montoIngreso = document.querySelector("#monto-ingreso")
const fechaIngreso = document.querySelector("#fecha-ingreso");
const form_ingreso = document.querySelector("#ingreso-form")
const div_ingreso = document.querySelector("#ingreso-div")
const ingreso = new Ingreso;

form_gasto.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_gasto = Number.parseInt(montoGasto.value);
  const fecha_gasto = fechaGasto.value; 

  gastito.agregarMonto(valor_gasto);
  gastito.agregarFecha(fecha_gasto);

  div_gastos.innerHTML = "<p>" + gastito.mostrarMonto() + "<p>" + gastito.mostrarFecha() + "</p>";
});

form_presupuesto.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_presupuesto = Number.parseInt(montoPresupuesto.value);
  presupuestito.agregarMonto(valor_presupuesto);

  div_presupuesto.innerHTML = "<p>" + presupuestito.mostrarMonto() + "</p>";
});


cat_gastos.addEventListener('click', (event) => {
  event.preventDefault();
  gastosImage.style.display = 'block'; // Mostrar la imagen de gastos
  ingresosImage.style.display = 'none'; // Ocultar la imagen de ingresos
});


cat_ingresos.addEventListener('click', (event) => {
  event.preventDefault(); 
  ingresosImage.style.display = 'block'; // Mostrar la imagen de ingresos
  gastosImage.style.display = 'none'; // Ocultar la imagen de gastos
});

form_ingreso.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor_ingreso = Number.parseInt(montoIngreso.value);
  const fecha_ingreso = fechaIngreso.value;
  ingreso.agregarMonto(valor_ingreso);
  ingreso.agregarFecha(fecha_ingreso);

  div_ingreso.innerHTML = "<p>" + ingreso.mostrarMonto() + "</p>" + ingreso.mostrarFecha() + "</p>";
});
