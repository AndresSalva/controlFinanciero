import ListaGastos from './lista-gastos.js';
import ListaIngresos from './lista-ingresos.js';

class ControlFinanciero{
    constructor() {
        this.ListaGastos=new ListaGastos;
        this.ListaIngresos=new ListaIngresos;
        this.saldo = 0;
    }

    registrarGasto(gasto){
        this.ListaGastos.registrarGasto(gasto);
    }
    //
    seleccionarGasto(index) {
        return this.ListaGastos.seleccionarGasto(index);
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

    actualizarSaldo(){
        const totalGastos=this.verTotalGastitos();
        const totalIngresos= this.verTotalIngresitos();
        this.saldo=totalIngresos-totalGastos;
    }
    verTotalSaldo(){
        //return `Total: ${this.saldo}`;
        let respuesta;
        if(this.saldo <0){
            respuesta=`Total: ${this.saldo} Ojo te estas endeudando`;
        }
        else{
            respuesta=`Total: ${this.saldo}`;
        }
        return respuesta;
    }
    editarGasto(index, nuevosDatos) {
        try {
            const gastoOriginal = this.ListaGastos.seleccionarGasto(index);
            // Restar el monto del gasto original del saldo
            this.saldo += Number(gastoOriginal.monto);
            // Editar el gasto con los nuevos datos
            //const gastoActualizado = this.ListaGastos.editarGasto(index, nuevosDatos);
            this.ListaGastos.editarGasto(index, nuevosDatos);
            // Restar el nuevo gasto del saldo
            this.saldo -= Number(nuevosDatos.monto);
            return nuevosDatos;
            //return gastoActualizado;
            //const gastoActualizado = this.ListaGastos.editarGasto(index, nuevosDatos);
            //this.actualizarSaldo(); // Recalcular el saldo después de la edición
            //return gastoActualizado; // Retorna el gasto actualizado si necesitas usarlo
        } catch (error) {
            return "Error al editar el gasto:"
            //console.error("Error al editar el gasto:", error.message);
            //throw error; // Opcional, si quieres manejar el error fuera
        }
    }
    
}

export default ControlFinanciero
