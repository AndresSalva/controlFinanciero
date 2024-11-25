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
  }
  export default ListaPresupuestos;