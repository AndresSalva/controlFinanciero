class Gasto {
  constructor() {
    this.monto = null;
    this.fecha= null;
    this.nota= null;
  }
  agregarMonto(monto) {
    this.monto = monto;
  }
  agregarFecha(fecha) {
    this.fecha= fecha;
  }
  agregarNota(nota) {
    this.nota= nota;
  }
  mostrarMonto() {
    let respuesta;
    if(this.monto != null)
      {
        respuesta =  `Monto: ${this.monto}`;
      }
    else{
        respuesta =  "Necesita llenar el monto";
      }
      return respuesta;
  }
  mostrarFecha() {
    return `Fecha: ${this.fecha}`;
  }
  mostrarNota() {
    return `Nota: ${this.nota}`;
  }
}
export default Gasto;