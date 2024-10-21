class Ingreso {
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
}
export default Ingreso;
  