class ListaIngresos {
    constructor() {
      this.ingresos = [];
    }
    registrarIngreso(ingresos) {
      this.ingresos.push(ingresos);
    }
    obtenerIngreso() {
      return this.ingresos;
    }
    seleccionarIngreso(index) {
      return this.ingresos[index];
    }
  }
  export default ListaIngresos;