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
    editarGasto(index, nuevosDatos) {
      const gasto = this.gastos[index];
          gasto.agregarMonto(nuevosDatos.monto);
          gasto.agregarFecha(nuevosDatos.fecha);
          gasto.agregarNota(nuevosDatos.nota);
          gasto.agregarCategoria(nuevosDatos.categoria);
          return gasto; // Devuelve el gasto actualizado
    }
  }
  export default ListaGastos;