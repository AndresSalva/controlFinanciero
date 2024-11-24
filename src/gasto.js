class Gasto {
  constructor() {
    this.monto = null;
    this.fecha= null;
    this.nota= null;
    this.categoria = null;
  }
  agregarMonto(monto) {
    if (monto === null || isNaN(monto)) {
      this.monto = null;
    } else {
      this.monto = Number(monto); 
    }
  }
  agregarFecha(fecha) {
    if (!fecha) {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); 
      const year = today.getFullYear();
      this.fecha = `${year}-${month}-${day}`;
    } else {
      this.fecha = fecha;
    }
  }
  agregarNota(nota) {
    this.nota= nota;
  }
  agregarCategoria(categoria){
    this.categoria = categoria;
  }
  mostrarMonto() {
    let respuesta;
    if(this.monto != null)
      {
        respuesta =  `Monto: ${this.monto}`;
      }
    else{
        respuesta =  `MONTO VACIO!!!`;
      }
      return respuesta;
  }
  mostrarFecha() {
    return `Fecha: ${this.fecha}`;
  }
  mostrarNota() {
    let respuesta;
    if(this.nota != null)
      {
        respuesta =  `Nota: ${this.nota}`;
      }
    else{
        respuesta =  "No hay notas disponibles";
      }
    return respuesta;
  }
  mostrarCategoria(){
    return `Categoria: ${this.categoria}`;
  }
  reset() {
    this.monto = null;
    this.fecha = null;
    this.nota = null;
  }
}
export default Gasto;