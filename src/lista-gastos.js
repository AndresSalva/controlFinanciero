class ListaGastos {
    constructor() {
      this.gastos = [];
    }
    registrarGasto(gasto) {
      this.gastos.push(gasto);
    }
    obtenerGastos() {
      return this.gastos;
    }
    //
    seleccionarGasto(index) {
      return this.gastos[index];
    }
  }
  export default ListaGastos;