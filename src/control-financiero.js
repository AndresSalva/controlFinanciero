import ListaGastos from './lista-gastos.js';
//import ListaIngresos from './lista-ingresos.js';

class ControlFinanciero{
    constructor() {
        this.ListaGastos=new ListaGastos;
    }

    registrarGasto(gasto){
        this.ListaGastos.registrarGasto(gasto);
    }
    verTotalGastitos(){
        const gastos = this.ListaGastos.obtenerGastos();
        let totalGastos = 0;
        gastos.forEach((gasto) => {
            totalGastos += Number(gasto.monto);
         });
        return totalGastos;
    }
}

export default ControlFinanciero
