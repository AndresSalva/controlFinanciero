class Gasto {
  constructor() {
    this.monto = null;
    this.fecha= null;
  }
  agregarMonto(monto) {
    this.monto = monto;
  }
  agregarFecha(fecha) {
    this.fecha= fecha;
  }
  mostrarMonto() {
    return `Monto: ${this.monto}`;
  }
  mostrarFecha() {
    return `Fecha: ${this.fecha}`;
  }
}
export default Gasto;