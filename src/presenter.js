import Gasto from "./gasto.js";
import Presupuesto from "./presupuesto.js";
import Ingreso from "./ingreso.js";
import ListaGastos from "./lista-gastos.js";
import ListaIngresos from "./lista-ingresos.js";
import ListaPresupuestos from "./lista-presupuestos.js";
import ControlFinanciero from "./control-financiero.js";
import informePresupuesto from "./InformePresupuesto.js";

//Gasto
const notaGasto = document.querySelector("#nota-gasto");
const fechaGasto = document.querySelector("#fecha-gasto");
const montoGasto = document.querySelector("#monto-gasto");
const categoria_gasto = document.querySelector("#categoria-gasto")
const inputCategoriaPersonalizadaGasto = document.getElementById("categoria-gastos");
const form_gasto = document.querySelector("#gastos-form");
const div_gastos = document.querySelector("#gastos-div");
const cancelarGastoBtn = document.querySelector("#cancelar-gasto");
const mostrarFormBtn = document.querySelector("#mostrar-form-btn"); 

let indiceGastoSeleccionado = null;


//Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto");
const categoria_presupuesto = document.querySelector("#categoria-presupuesto");
const inputCategoriaPersonalizadaPresupuesto = document.getElementById("categoria-gasto-personalizada");
const form_presupuesto = document.querySelector("#presupuesto-form");
const div_presupuesto = document.querySelector("#presupuesto-div");
const div_totales_presupuestos = document.querySelector("#totalPresupuesto-div");
const mostrarFormPresupuesto = document.querySelector("#mostrar-form-presupuesto");
let indicePresupuestoSeleccionado = null;



//Ingreso
const montoIngreso = document.querySelector("#monto-ingreso");
const fechaIngreso = document.querySelector("#fecha-ingreso");
const notaIngreso = document.querySelector("#nota-ingreso");
const form_ingreso = document.querySelector("#ingreso-form")
const div_ingreso = document.querySelector("#ingreso-div")
const cancelarIngresoBtn = document.querySelector("#cancelar");
const mostrarFormBtnIngreso = document.querySelector("#mostrar-form-ingreso"); 
const categoria_ingreso = document.querySelector("#categoria-ingreso");
const inputCategoriaPersonalizadaIngresos=document.getElementById("categoria-ingreso-personalizada");

//Categorias
const imagen_categoria_gastos = document.querySelector('#gastos-btn');
const imagen_categoria_ingresos = document.querySelector('#ingresos-btn');
const gastosImage = document.querySelector('img[alt="Gastos"]');
const ingresosImage = document.querySelector('img[alt="Ingresos"]');

//Lista gastos
const div_lista_gastos = document.querySelector("#lista-gastos-div");
const lista_gastos = new ListaGastos;

//Lista ingresos
const div_lista_ingresos = document.querySelector("#lista-ingresos-div");
const lista_ingresos = new ListaIngresos;

//Lista presupuesto
const lista_presupuestos = new ListaPresupuestos();

//Control Financiero
const gestion = new ControlFinanciero;
//Total Gastos
const div_total_gastos = document.querySelector("#totalGastos-div");
//Total Ingresos
const div_total_ingresos = document.querySelector("#totalIngresos-div");
//Total Saldo
const div_saldo = document.querySelector("#saldo-div");

//Informe Presupuesto
const informe = new informePresupuesto();

const div_informe_presupuesto = document.querySelector("#informePresupuesto-div");

//Funciones genericas
function visibilidadDeFormulario(formElement, divElement) {
  if (formElement.style.display === "none" || formElement.style.display === "") {
    formElement.style.display = "block";
    divElement.style.display = "block";
  } else {
    formElement.reset(); 
    divElement.innerHTML = ""; 
    formElement.style.display = "none"; 
    divElement.style.display = "none"; 
  }
}

mostrarFormBtn.addEventListener("click", () => { 
  visibilidadDeFormulario(form_gasto, div_gastos);
});

//-------------------GASTOS

form_gasto.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const gastito = new Gasto;
  const valor_gasto = Number.parseInt(montoGasto.value);
  const fecha_gasto = fechaGasto.value || obtenerFechaActual();
  const nota_gasto = notaGasto.value || "No hay notas disponibles";
  const valor_categoria_gasto = categoria_gasto.value;

  if (fecha_gasto && !valor_gasto) {
    div_gastos.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }

  gastito.agregarMonto(valor_gasto);
  gastito.agregarFecha(fecha_gasto);
  gastito.agregarNota(nota_gasto);
  gastito.agregarCategoria(valor_categoria_gasto);

  if(valor_categoria_gasto === "otros"){
    const valor_categoria_gasto_personalizado = inputCategoriaPersonalizadaGasto.value;
    if (!valor_categoria_gasto_personalizado) {
      div_gastos.innerHTML = "<p>CATEGORIA VACIA!!!</p>";
      return;
    }
    gastito.agregarCategoria(valor_categoria_gasto_personalizado);
    registrarCategoria_en_InformePresupuesto(valor_categoria_gasto_personalizado, 0, valor_gasto);//NUEVO
  } else {
    registrarCategoria_en_InformePresupuesto(valor_categoria_gasto, 0, valor_gasto);//NUEVOOOO
  }
  
  if (indiceGastoSeleccionado !== null) {
    const nuevosDatos = {
      monto: valor_gasto,
      fecha: fecha_gasto,
      nota: nota_gasto,
      categoria: valor_categoria_gasto,
    };
    gestion.editarGasto(indiceGastoSeleccionado, nuevosDatos);
    actualizarSaldo();
    const totalGastos = gestion.verTotalGastitos();
    div_total_gastos.innerHTML = `<p>Total de gastos: ${totalGastos}</p>`;

    // Refrescar la lista visual
    actualizarListaGastos();
    // Resetear el índice seleccionado
    indiceGastoSeleccionado = null;
  } else {
    // Si no es edición, agregar el nuevo gasto a la lista
    lista_gastos.registrarGasto(gastito);
    actualizarControlFinanciero_porGastos(gastito);
    actualizarSaldo();
    
  }
  actualizarListaGastos();

  div_gastos.innerHTML = "<p>" + gastito.mostrarMonto() + "<p>" + gastito.mostrarFecha() + "<p>" + gastito.mostrarNota() +  "<p>" + gastito.mostrarCategoria() + "</p>";

  limpiarCampos([montoGasto, notaGasto, fechaGasto]);
  form_gasto.style.display = "none";
});

categoria_gasto.addEventListener("change", () => {
  if (categoria_gasto.value === "otros") {
    inputCategoriaPersonalizadaGasto.style.display = "block"; // Mostrar campo de texto
  } else {
    inputCategoriaPersonalizadaGasto.style.display = "none"; // Ocultar campo de texto
    inputCategoriaPersonalizadaGasto.value = ""; // Limpiar el valor
  }
});

cancelarGastoBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  botonCancelar(form_gasto, div_gastos);
});


function actualizarListaGastos(){
  //lista_gastos.registrarGasto(gastito);
  const gastos = lista_gastos.obtenerGastos();

  //div_lista_gastos.innerHTML = "";
  div_lista_gastos.innerHTML = "<ul>";
  gastos.forEach((gastoRegistrado,index) => {
    div_lista_gastos.innerHTML+= 
      `<li>
        Monto: ${gastoRegistrado.monto}, Fecha: ${gastoRegistrado.fecha}, Nota: ${gastoRegistrado.nota}, Categoria: ${gastoRegistrado.categoria}
        <button class="select-gasto-btn" data-index="${index}">:</button>
        <button class="eliminar-gasto-btn" data-index="${index}">Eliminar</button>
      </li>`;
      //"<li>"+"Monto: "+ gastoRegistrado.monto+", Fecha: "+gastoRegistrado.fecha+", Nota: "+gastoRegistrado.nota+"</li>";
    });
    div_lista_gastos.innerHTML += "</ul>";

    const selectButtons = div_lista_gastos.querySelectorAll(".select-gasto-btn");
    selectButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        seleccionarGasto(index);
      });
    });  

    div_lista_gastos.querySelectorAll(".eliminar-gasto-btn").forEach(button => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        eliminarGasto(index);
      });
    });
    //  
}

// Función para eliminar un gasto
function eliminarGasto(index) {
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar este gasto?");
  if (confirmacion) {
    lista_gastos.eliminarGastos(index);
    actualizarListaGastos();
    actualizarSaldo(); // Asegurar que se llama aquí
    div_gastos.innerHTML = "<p>Gasto eliminado</p>";
  }
}

function seleccionarGasto(index) {
  try {
    indiceGastoSeleccionado = index;
    const gastoSeleccionado = lista_gastos.seleccionarGasto(index);

    // Mostrar los detalles del gasto en el formulario (puedes personalizar esto)
    montoGasto.value = gastoSeleccionado.monto;
    fechaGasto.value = gastoSeleccionado.fecha;
    notaGasto.value = gastoSeleccionado.nota;
    let esCategoria;
    for (let option of categoria_gasto.options) {
      if (option.value === gastoSeleccionado.categoria) {
        categoria_gasto.value = gastoSeleccionado.categoria;
        esCategoria = true;
      }
    }
    if(!esCategoria){
      categoria_gasto.value = "otros";
      inputCategoriaPersonalizadaGasto.value = gastoSeleccionado.categoria;
    }

    // Enfocar el formulario para edición
    form_gasto.style.display = "block";
    div_gastos.innerHTML = `
      <p>Gasto seleccionado:</p>
      <p>Monto: ${gastoSeleccionado.monto}</p>
      <p>Fecha: ${gastoSeleccionado.fecha}</p>
      <p>Nota: ${gastoSeleccionado.nota}</p>
      <p>Categoria: ${gastoSeleccionado.categoria}
    `;
  } catch (error) {
    console.error(error.message);
  }
}
function actualizarControlFinanciero_porGastos(gasto,esEdicion = false, montoAnterior = 0){
  if (esEdicion) {
     gestion.saldo += Number(montoAnterior); // Devuelve el saldo original
     gestion.saldo -= Number(gasto.monto); // Aplica el nuevo gasto
   } else {
     // Si es un nuevo gasto
     gestion.registrarGasto(gasto);
   }
   const totalGastos = gestion.verTotalGastitos();
 
   div_total_gastos.innerHTML = `<p>Total de gastos: ${Number(totalGastos)}</p>`;
 }

//-------------------INGRESOS
form_ingreso.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingreso = new Ingreso;
  const valor_ingreso = Number.parseInt(montoIngreso.value);
  const fecha_ingreso = fechaIngreso.value || obtenerFechaActual(); 
  const nota_ingreso = notaIngreso.value || "No hay notas disponibles";
  const valor_categoria_ingreso= categoria_ingreso.value;

  if (fecha_ingreso && !valor_ingreso) {
    div_ingreso.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }
  
  ingreso.agregarMonto(valor_ingreso);
  ingreso.agregarFecha(fecha_ingreso);
  ingreso.agregarNota(nota_ingreso);
  ingreso.agregarCategoria(valor_categoria_ingreso);

  if (!valor_ingreso) {
    div_ingreso.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }

  if(valor_categoria_ingreso === "otros"){
    const valor_categoria_ingreso_personalizado = inputCategoriaPersonalizadaIngresos.value;
    if (!valor_categoria_ingreso_personalizado) {
      div_ingreso.innerHTML = "<p>CATEGORIA VACIA!!!</p>";
      return;
    }
    ingreso.agregarCategoria(valor_categoria_ingreso_personalizado);
  }


  actualizarListaIngreso(ingreso);
  actualizarControlFinanciero_porIngresos(ingreso);
  actualizarSaldo();

  div_ingreso.innerHTML = "<p>" + ingreso.mostrarMonto() + "</p>" + ingreso.mostrarFecha() + "</p>"  + ingreso.mostrarNota() + "</p>"  + ingreso.mostrarCategoria() + "</p>";

  
  limpiarCampos([montoIngreso, notaIngreso, fechaIngreso]);
  form_ingreso.style.display = "none";
});

categoria_ingreso.addEventListener("change", () => {
  if (categoria_ingreso.value === "otros") {
    inputCategoriaPersonalizadaIngresos.style.display = "block"; // Mostrar campo de texto
  } else {
    inputCategoriaPersonalizadaIngresos.style.display = "none"; // Ocultar campo de texto
    inputCategoriaPersonalizadaIngresos.value = ""; // Limpiar el valor
  }
});

cancelarIngresoBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  botonCancelar(form_ingreso, div_ingreso);
});

mostrarFormBtnIngreso.addEventListener("click", () => { 
  visibilidadDeFormulario(form_ingreso, div_ingreso);
});



function actualizarListaIngreso(ingreso){
  lista_ingresos.registrarIngreso(ingreso);
  const ingresos = lista_ingresos.obtenerIngreso();

  div_lista_ingresos.innerHTML = "<ul>";  
  ingresos.forEach((ingresoRegistrado,index) => {
    div_lista_ingresos.innerHTML+= 
       //"<li>"+"Monto: "+ ingresoRegistrado.monto+", Fecha: " + ingresoRegistrado.fecha + ", Nota: " + ingresoRegistrado.nota+"</li>";
       `<li>
        Monto: ${ingresoRegistrado.monto}, Fecha: ${ingresoRegistrado.fecha}, Nota: ${ingresoRegistrado.nota}, Categoria: ${ingresoRegistrado.categoria}
        <button class="select-ingreso-btn" data-index="${index}">:</button>
      </li>`;
    });
    div_lista_ingresos.innerHTML+= "</ul>";

    
    const selectButtons = div_lista_ingresos.querySelectorAll(".select-ingreso-btn");
    selectButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        seleccionarIngreso(index);
      });
    });
}

function seleccionarIngreso(index) {
  try {
    const ingresoSeleccionado = lista_ingresos.seleccionarIngreso(index);
    console.log("Ingreso seleccionado:", ingresoSeleccionado);

    // Mostrar los detalles del ingreso en el formulario (puedes personalizar esto)
    montoIngreso.value = ingresoSeleccionado.monto;
    fechaIngreso.value = ingresoSeleccionado.fecha;
    notaIngreso.value = ingresoSeleccionado.nota;

    // Enfocar el formulario para edición
    form_ingreso.style.display = "block";
    //div_ingreso.style.display = "block";
    div_ingreso.innerHTML = `
      <p>Ingreso seleccionado:</p>
      <p>Monto: ${ingresoSeleccionado.monto}</p>
      <p>Fecha: ${ingresoSeleccionado.fecha}</p>
      <p>Nota: ${ingresoSeleccionado.nota}</p>
    `;
  } catch (error) {
    console.error(error.message);
  }
}



function actualizarControlFinanciero_porIngresos(ingreso){
   gestion.registrarIngreso(ingreso);
   const totalIngresos = gestion.verTotalIngresitos();
 
   div_total_ingresos.innerHTML = `<p>Total de ingresos: ${Number(totalIngresos)}</p>`;
 }





//-------------------PRESUPUESTOS

form_presupuesto.addEventListener("submit", (event) => {
  event.preventDefault();
  const presupuestito = new Presupuesto;
  const valor_presupuesto = Number.parseInt(montoPresupuesto.value);
  const valor_categoria_presupuesto = categoria_presupuesto.value;
  
  if (!valor_presupuesto) {
    div_presupuesto.innerHTML = "<p>MONTO VACIO!!!</p>";
    return;
  }
  presupuestito.agregarMonto(valor_presupuesto);
  presupuestito.agregarCategoria(valor_categoria_presupuesto);
  if(valor_categoria_presupuesto === "otros"){
    const valor_categoria_presupuesto_personalizado = inputCategoriaPersonalizadaPresupuesto.value;
    if (!valor_categoria_presupuesto_personalizado) {
      div_presupuesto.innerHTML = "<p>CATEGORIA VACIA!!!</p>";
      return;
    }
    presupuestito.agregarCategoria(valor_categoria_presupuesto_personalizado);
    registrarCategoria_en_InformePresupuesto(valor_categoria_presupuesto_personalizado, valor_presupuesto, 0);  // Nuevo
  } else {
    registrarCategoria_en_InformePresupuesto(valor_categoria_presupuesto, valor_presupuesto, 0);//NUEVOOOOO
  }
  if (indicePresupuestoSeleccionado !== null) {
    const nuevosDatos = {
      monto: presupuestito.monto,
      categoria: presupuestito.categoria
    };
    lista_presupuestos.editarPresupuesto(indicePresupuestoSeleccionado,nuevosDatos);
    // Resetear el índice seleccionado
    indicePresupuestoSeleccionado = null;
  } else {
    actualizar_paraPresupuestos(presupuestito);
  }
  actualizarListaPresupuestos();
  div_presupuesto.innerHTML = "<p>" + presupuestito.mostrarMonto() + "</p>" + presupuestito.mostrarCategoria() + "</p>";
  form_presupuesto.style.display = "none";
  limpiarCampos([montoPresupuesto, categoria_presupuesto, inputCategoriaPersonalizadaPresupuesto]);
});

mostrarFormPresupuesto.addEventListener("click", () => { 
  visibilidadDeFormulario(form_presupuesto, div_presupuesto);
});

categoria_presupuesto.addEventListener("change", () => {
  if (categoria_presupuesto.value === "otros") {
    inputCategoriaPersonalizadaPresupuesto.style.display = "block"; // Mostrar campo de texto
  } else {
    inputCategoriaPersonalizadaPresupuesto.style.display = "none"; // Ocultar campo de texto
    inputCategoriaPersonalizadaPresupuesto.value = ""; // Limpiar el valor
  }
});

function actualizar_paraPresupuestos(presupuestito){
  if (presupuestito) {
    lista_presupuestos.registrarPresupuesto(presupuestito);
  }
  actualizarListaPresupuestos();
}

function actualizarListaPresupuestos() {
  const presupuestos = lista_presupuestos.obtenerPresupuestos();

  div_totales_presupuestos.innerHTML = "<ul>";
  presupuestos.forEach((presupuestoRegistrado, index) => {
    div_totales_presupuestos.innerHTML += `
      <li>
        Monto: ${presupuestoRegistrado.monto}, Categoría: ${presupuestoRegistrado.categoria}
        <button class="eliminar-presupuesto-btn" data-index="${index}">Eliminar</button>
        <button class="editar-presupuesto-btn" data-index="${index}">Editar</button>
      </li>`;
  });
  div_totales_presupuestos.innerHTML += "</ul>";

  div_totales_presupuestos.querySelectorAll(".eliminar-presupuesto-btn").forEach(button => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      eliminarPresupuesto(index);
    });
  });
  div_totales_presupuestos.querySelectorAll(".editar-presupuesto-btn").forEach(button => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      seleccionarPresupuesto(index);
    });
  });
}

function seleccionarPresupuesto(index) {
  try {
    indicePresupuestoSeleccionado = index;
    const presupuestoSeleccionado = lista_presupuestos.seleccionarPresupuesto(indicePresupuestoSeleccionado);
    // Mostrar los detalles del gasto en el formulario (puedes personalizar esto)
    montoPresupuesto.value = presupuestoSeleccionado.monto;
    let esCategoria;
    for (let option of categoria_presupuesto.options) {
      if (option.value === presupuestoSeleccionado.categoria) {
        categoria_presupuesto.value = presupuestoSeleccionado.categoria;
        esCategoria = true;
      }
    }
    if(!esCategoria){
      categoria_presupuesto.value = "otros";
      inputCategoriaPersonalizadaPresupuesto.value = presupuestoSeleccionado.categoria;
    }
    

    // Enfocar el formulario para edición
    form_presupuesto.style.display = "block";
    
    div_presupuesto.innerHTML = `
      <p>Presupuesto seleccionado:</p>
      <p>Monto: ${presupuestoSeleccionado.monto}</p>
      <p>Categoria: ${presupuestoSeleccionado.categoria}</p>
    `;

  } catch (error) {
    console.error(error.message);
  }
}

function eliminarPresupuesto(index) {
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar este presupuesto?");
  if (confirmacion) {
    lista_presupuestos.eliminarPresupuesto(index);
    actualizarListaPresupuestos(); 
    div_presupuesto.innerHTML = "<p>Presupuesto eliminado</p>";
  }
}



function registrarCategoria_en_InformePresupuesto(nombre, presupuesto = 0, gasto = 0) {

  informe.agregarOActualizarCategoria(nombre, presupuesto, gasto);

  // Actualiza la vista en la sección de informe
  actualizarInformePresupuesto();
}

function actualizarInformePresupuesto() {
  div_informe_presupuesto.innerHTML = "<ul>";
  informe.obtenerCategorias().forEach(categoria => {
    const total = categoria.presupuesto - categoria.gasto;
      div_informe_presupuesto.innerHTML += `
          <li>
              Categoría: ${categoria.nombre}, Presupuesto: ${categoria.presupuesto}, Gasto: ${categoria.gasto}, Total: ${total}
          </li>`;
  });
  div_informe_presupuesto.innerHTML += "</ul>";
}



//Visualizacion categorias

function VisibilidadDeImagen(imagenAMostrar, imagenAOcultar) {
  if (imagenAMostrar.style.display === 'none') {
    imagenAOcultar.style.display = 'none';
    imagenAMostrar.style.display = 'block';
  } else {
    imagenAMostrar.style.display = 'none';
  }
}


imagen_categoria_gastos.addEventListener('click', (event) => {
  event.preventDefault();
  VisibilidadDeImagen(gastosImage, ingresosImage);
});

imagen_categoria_ingresos.addEventListener('click', (event) => {
  event.preventDefault();
  VisibilidadDeImagen(ingresosImage, gastosImage);
});

 document.getElementById('ver-categorias-btn').addEventListener('click', () => {
  const categoriasDiv = document.getElementById('categorias');
  if (categoriasDiv.style.display === 'none') {
    categoriasDiv.style.display = 'block';
  } else {
    categoriasDiv.style.display = 'none';
  }
});


//Miscelaneo
 function actualizarSaldo(){
  gestion.actualizarSaldo();
  console.log("Saldo actualizado:", gestion.verTotalSaldo()); 
  div_saldo.innerHTML = "<p>" + gestion.verTotalSaldo() + "</p>";
 }

 function obtenerFechaActual() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
}
// Función genérica para limpiar campos de entrada
function limpiarCampos(campos) {
  campos.forEach(campo => campo.value = '');
}

function botonCancelar(formElement, divElement){
  formElement.reset();
  divElement.innerHTML = ""; 
  const saldoHeader = document.querySelector("h2"); 
  saldoHeader.scrollIntoView({ behavior: "smooth", block: "start" }); 
  formElement.style.display = "none"; 
  divElement.style.display = "none";
}


