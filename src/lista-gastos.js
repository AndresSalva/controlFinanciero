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
      if (index >= 0 && index < this.gastos.length) {
        return this.gastos[index];
      } 
      else {
        return "El gasto no se pudo eliminar, intentelo de nuevo";
      }
    }
  }
  export default ListaGastos;