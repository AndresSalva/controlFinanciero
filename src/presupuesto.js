class Presupuesto {
    constructor() {
      this.monto = null;
      this.categoria = null;
    }
    agregarMonto(monto) {
      this.monto = monto;
    }
    agregarCategoria(categoria){
      this.categoria = categoria;
    }
    mostrarMonto() {
      return `Monto: ${this.monto}`;
    }
    mostrarCategoria(){
      return `Categoria: ${this.categoria}`;
    }
}
export default Presupuesto;
  