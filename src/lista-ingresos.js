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
      if (index >= 0 && index < this.ingresos.length) {
        return this.ingresos[index];
      } 
      else {
        return "El ingreso no se pudo eliminar, intentelo de nuevo";
      }
    }
    eliminarIngreso(index){
      this.ingresos.splice(index,1);
    }
  }
  export default ListaIngresos;