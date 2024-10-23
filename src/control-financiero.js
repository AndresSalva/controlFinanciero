import ListaGastos from './lista-gastos.js';
import ListaIngresos from './lista-ingresos.js';

class ControlFinanciero{
    constructor() {
        this.ListaGastos=new ListaGastos;
        this.ListaIngresos=new ListaIngresos;
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

    registrarIngreso(ingreso){
        this.ListaIngresos.registrarIngreso(ingreso);
    }

    verTotalIngresitos(){
        const ingresos = this.ListaIngresos.obtenerIngreso();
        let totalIngresos=0;
        ingresos.forEach((ingreso) =>{
            totalIngresos+=Number(ingreso.monto);
         });
        return totalIngresos;
    }
}

export default ControlFinanciero
