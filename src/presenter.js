import Gasto from "./gasto.js";
import Presupuesto from "./presupuesto.js";
import Ingreso from "./ingreso.js";
import ListaGastos from "./lista-gastos.js";

//Gasto
const notaGasto = document.querySelector("#nota-gasto");
const fechaGasto = document.querySelector("#fecha-gasto");
const montoGasto = document.querySelector("#monto-gasto");
const form_gasto = document.querySelector("#gastos-form");
const div_gastos = document.querySelector("#gastos-div");


//Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto");
const form_presupuesto = document.querySelector("#presupuesto-form");
const div_presupuesto = document.querySelector("#presupuesto-div");
const presupuestito = new Presupuesto;

//Categorias
const cat_gastos = document.querySelector('#gastos-btn');
const cat_ingresos = document.querySelector('#ingresos-btn');
const gastosImage = document.querySelector('img[alt="Gastos"]');
const ingresosImage = document.querySelector('img[alt="Ingresos"]');

//Ingreso
const montoIngreso = document.querySelector("#monto-ingreso");
const fechaIngreso = document.querySelector("#fecha-ingreso");
const notaIngreso = document.querySelector("#nota-ingreso");
const form_ingreso = document.querySelector("#ingreso-form")
const div_ingreso = document.querySelector("#ingreso-div")
const ingreso = new Ingreso;

//Lista gastos
const div_lista_gastos = document.querySelector("#lista-gastos-div");
const lista_gastos = new ListaGastos;

form_gasto.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastito = new Gasto;
  const valor_gasto = Number.parseInt(montoGasto.value);
  
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
  const year = today.getFullYear();
  const fecha_gasto = fechaGasto.value || `${year}-${month}-${day}`;

  const nota_gasto = notaGasto.value;

  if (fecha_gasto && !valor_gasto) {
    div_gastos.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }

  gastito.agregarMonto(valor_gasto);
  gastito.agregarFecha(fecha_gasto);
  gastito.agregarNota(nota_gasto);

  actualizarLista(gastito); ///Esto es nuevooooooooooooooooooooooooooooooooooooooooooooooooooooooo

  div_gastos.innerHTML = "<p>" + gastito.mostrarMonto() + "<p>" + gastito.mostrarFecha() + "<p>" + gastito.mostrarNota() + "</p>";
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
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
  const year = today.getFullYear();
  const fecha_ingreso = fechaIngreso.value || `${year}-${month}-${day}`;; 
  const nota_ingreso = notaIngreso.value;

  if (fecha_ingreso && !valor_ingreso) {
    div_ingreso.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }

  ingreso.agregarMonto(valor_ingreso);
  ingreso.agregarFecha(fecha_ingreso);
  ingreso.agregarNota(nota_ingreso);

  div_ingreso.innerHTML = "<p>" + ingreso.mostrarMonto() + "</p>" + ingreso.mostrarFecha() + "</p>"  + ingreso.mostrarNota() + "</p>";
});

function actualizarLista(gastito){
  lista_gastos.registrarGasto(gastito);
  const gastos = lista_gastos.obtenerGastos();

  div_lista_gastos.innerHTML = "<ul>";  
  gastos.forEach((gastoRegistrado) => {
    div_lista_gastos.innerHTML+= 
       "<li>"+"Monto: "+ gastoRegistrado.monto+", Fecha: "+gastoRegistrado.fecha+", Nota: "+gastoRegistrado.nota+"</li>";
    });
    div_lista_gastos.innerHTML+= "</ul>";
}





