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
  }
  export default ListaIngresos;