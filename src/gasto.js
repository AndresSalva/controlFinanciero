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
    return `Monto: ${this.monto}`;
  }
  mostrarFecha() {
    return `Fecha: ${this.fecha}`;
  }
  mostrarNota() {
    return `Nota: ${this.nota}`;
  }
}
export default Gasto;