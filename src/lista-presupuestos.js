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
  }
  export default ListaPresupuestos;