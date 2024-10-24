import Gasto from "./gasto.js";
import Presupuesto from "./presupuesto.js";
import Ingreso from "./ingreso.js";
import ListaGastos from "./lista-gastos.js";
import ListaIngresos from "./lista-ingresos.js";
import ControlFinanciero from "./control-financiero.js";

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
//const ingreso = new Ingreso;

//Lista gastos
const div_lista_gastos = document.querySelector("#lista-gastos-div");
const lista_gastos = new ListaGastos;

//Lista ingresos
const div_lista_ingresos = document.querySelector("#lista-ingresos-div");
const lista_ingresos = new ListaIngresos;

//Control Financiero
const gestion = new ControlFinanciero;
//Total Gastos
const div_total_gastos = document.querySelector("#totalGastos-div");
//Total Ingresos
const div_total_ingresos = document.querySelector("#totalIngresos-div");
//Total Saldo

const div_saldo = document.querySelector("#saldo-div");




form_gasto.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastito = new Gasto;
  const valor_gasto = Number.parseInt(montoGasto.value);
  
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
  const year = today.getFullYear();
  const fecha_gasto = fechaGasto.value || `${year}-${month}-${day}`;
  const nota_gasto = notaGasto.value || "No hay notas disponibles";


  if (fecha_gasto && !valor_gasto) {
    div_gastos.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }

  gastito.agregarMonto(valor_gasto);
  gastito.agregarFecha(fecha_gasto);
  gastito.agregarNota(nota_gasto);

  actualizarLista(gastito); ///Esto es nuevooooooooooooooooooooooooooooooooooooooooooooooooooooooo
  actualizarLaListaGastos_ControlFinanciero(gastito);
  actualizarSaldo();

  div_gastos.innerHTML = "<p>" + gastito.mostrarMonto() + "<p>" + gastito.mostrarFecha() + "<p>" + gastito.mostrarNota() + "</p>";

  montoGasto.value = '';
  notaGasto.value = '';
  fechaGasto.value = '';
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

  const ingreso = new Ingreso;
  const valor_ingreso = Number.parseInt(montoIngreso.value);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
  const year = today.getFullYear();
  const fecha_ingreso = fechaIngreso.value || `${year}-${month}-${day}`;; 
  const nota_ingreso = notaIngreso.value || "No hay notas disponibles";
  
  if (fecha_ingreso && !valor_ingreso) {
    div_ingreso.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }
  
  ingreso.agregarMonto(valor_ingreso);
  ingreso.agregarFecha(fecha_ingreso);
  ingreso.agregarNota(nota_ingreso);

  actualizarListaIngreso(ingreso);
  actualizarLaListaIngresos_ControlFinanciero(ingreso);
  actualizarSaldo();
  div_ingreso.innerHTML = "<p>" + ingreso.mostrarMonto() + "</p>" + ingreso.mostrarFecha() + "</p>"  + ingreso.mostrarNota() + "</p>";

  montoIngreso.value = '';
  notaIngreso.value = '';
  fechaIngreso.value = '';
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

function actualizarListaIngreso(ingreso){
  lista_ingresos.registrarIngreso(ingreso);
  const ingresos = lista_ingresos.obtenerIngreso();

  div_lista_ingresos.innerHTML = "<ul>";  
  ingresos.forEach((ingresoRegistrado) => {
    div_lista_ingresos.innerHTML+= 
       "<li>"+"Monto: "+ ingresoRegistrado.monto+", Fecha: " + ingresoRegistrado.fecha + ", Nota: " + ingresoRegistrado.nota+"</li>";
    });
    div_lista_ingresos.innerHTML+= "</ul>";
}

function actualizarLaListaGastos_ControlFinanciero(gasto){
 // const montoGasto = Number(gasto.monto);
  gestion.registrarGasto(gasto);
  const totalGastos = gestion.verTotalGastitos();


  div_total_gastos.innerHTML = `<p>Total de gastos: ${Number(totalGastos)}</p>`;
}

function actualizarLaListaIngresos_ControlFinanciero(ingreso){
   gestion.registrarIngreso(ingreso);
   const totalIngresos = gestion.verTotalIngresitos();
 
   div_total_ingresos.innerHTML = `<p>Total de ingresos: ${Number(totalIngresos)}</p>`;
 }

 function actualizarSaldo(){
  gestion.actualizarSaldo();
  div_saldo.innerHTML = "<p>" + gestion.verTotalSaldo() + "</p>";
 }
