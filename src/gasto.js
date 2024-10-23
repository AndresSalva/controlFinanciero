class Gasto {
  constructor() {
    this.monto = null;
    this.fecha= null;
    this.nota= null;
  }
  agregarMonto(monto) {
    if (monto === null || isNaN(monto)) {
      this.monto = null; // Mantén el valor como nulo si el monto es inválido
    } else {
      this.monto = Number(monto); // Solo convertir si el monto es válido
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
}
export default Gasto;