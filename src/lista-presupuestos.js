class ListaPresupuestos {
  constructor() {
    this.presupuestos = [];
  }
  registrarPresupuesto(presupuesto) {
    this.presupuestos.push(presupuesto);
  }
  obtenerPresupuestos() {
    return this.presupuestos;
  }
  eliminarPresupuesto(index) {
    this.presupuestos.splice(index, 1);
  }
  seleccionarPresupuesto(index) {
    if (index >= 0 && index < this.presupuestos.length) {
      return this.presupuestos[index];
    } 
    else {
      return "El presupuesto no se pudo editar, intentelo de nuevo";
    }
  }
  editarPresupuesto(index, nuevosDatos) {
    if (index >= 0 && index < this.presupuestos.length) {
        this.presupuestos[index].agregarMonto(nuevosDatos.monto);
        this.presupuestos[index].agregarCategoria(nuevosDatos.categoria);
        return this.presupuestos;
    } else {
        return("Indice inválido para editar presupuesto.");
    }

  }
}
export default ListaPresupuestos;