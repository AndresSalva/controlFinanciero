import ControlFinanciero from './control-financiero.js'
import Gasto from './gasto.js';
import Ingreso from './ingreso.js';
import ListaIngresos from './lista-ingresos.js';

describe("Control financiero", () => {
    it("Registra el gasto en el control financiero", () => {

        const gastito=new Gasto;
        const gastito2=new Gasto;
        const gastito3=new Gasto;

        const controlFinanciero1=new ControlFinanciero;

        gastito.agregarMonto(100);
        gastito2.agregarMonto(20);
        gastito3.agregarMonto(350);

        controlFinanciero1.registrarGasto(gastito);
        controlFinanciero1.registrarGasto(gastito2);
        controlFinanciero1.registrarGasto(gastito3);

        const totalGastitos= controlFinanciero1.verTotalGastitos();
        expect(totalGastitos).toEqual(470);
    });

    it("Registra el ingreso en el control financiero", () => {

        const ingresito=new Ingreso;
        const ingresito2=new Ingreso;
        const ingresito3=new Ingreso;

        const controlFinancieroIngreso=new ControlFinanciero;

        ingresito.agregarMonto(10);
        ingresito2.agregarMonto(30);
        ingresito3.agregarMonto(100);

        controlFinancieroIngreso.registrarIngreso(ingresito);
        controlFinancieroIngreso.registrarIngreso(ingresito2);
        controlFinancieroIngreso.registrarIngreso(ingresito3);

        const totalIngresitos=controlFinancieroIngreso.verTotalIngresitos();
        expect(totalIngresitos).toEqual(140);

    });

    it("Actualiza el saldo en el control financiero", () => {

        const ingresito_saldo=new Ingreso;
        const gastito_saldo= new Gasto;
        const controlFinancieroSaldo= new ControlFinanciero;

        ingresito_saldo.agregarMonto(600);
        controlFinancieroSaldo.registrarGasto(gastito_saldo);

        gastito_saldo.agregarMonto(200);
        controlFinancieroSaldo.registrarIngreso(ingresito_saldo);
        controlFinancieroSaldo.actualizarSaldo();

        expect(controlFinancieroSaldo.saldo).toBe(400);
    });
    it("Muestra el saldo actualizado", () => {

        const ingresito_saldo=new Ingreso;
        const gastito_saldo= new Gasto;
        const controlFinancieroSaldo= new ControlFinanciero;

        ingresito_saldo.agregarMonto(1000);
        controlFinancieroSaldo.registrarGasto(gastito_saldo);

        gastito_saldo.agregarMonto(250);
        controlFinancieroSaldo.registrarIngreso(ingresito_saldo);
        controlFinancieroSaldo.actualizarSaldo();
        

        expect(controlFinancieroSaldo.verTotalSaldo()).toBe('Total: 750');
    });

    it("Muestra el mensaje 'Ojo te estas endeudando' cuando el saldo es negativo", () => {
        const ingresito_saldo = new Ingreso;
        const gastito_saldo = new Gasto;
        const controlFinancieroSaldo = new ControlFinanciero;

        ingresito_saldo.agregarMonto(100);
        gastito_saldo.agregarMonto(250);
        
        controlFinancieroSaldo.registrarIngreso(ingresito_saldo);
        controlFinancieroSaldo.registrarGasto(gastito_saldo);
        controlFinancieroSaldo.actualizarSaldo();

        expect(controlFinancieroSaldo.verTotalSaldo()).toBe('Total: -150 Ojo te estas endeudando');
    });
    //
    it("Deberia seleccionar un gasto correctamente segun el indice", () => {
        const gastito1 = new Gasto();
        const gastito2 = new Gasto();
        const controlFinanciero = new ControlFinanciero();
    
        gastito1.agregarMonto(150);
        gastito1.agregarFecha("2024-11-19");
        gastito1.agregarNota("Compra de libros");
    
        gastito2.agregarMonto(300);
        gastito2.agregarFecha("2024-11-20");
        gastito2.agregarNota("Cena familiar");
    
        controlFinanciero.registrarGasto(gastito1);
        controlFinanciero.registrarGasto(gastito2);
    
        const seleccionado = controlFinanciero.seleccionarGasto(1);
        expect(seleccionado).toEqual({
          monto: 300,
          fecha: "2024-11-20",
          nota: "Cena familiar",
        });
      });
    it("Deberia devolver un mensaje si el indice está fuera de rango (negativo)", () => {
        const controlFinanciero = new ControlFinanciero();
        const resultado = controlFinanciero.seleccionarGasto(-1); // Llama directamente a la función
        expect(resultado).toBe("El gasto no se pudo eliminar, intentelo de nuevo");
    });

      it("Deberia seleccionar un ingreso correctamente segun el indice", () => {
        const ingreso1 = new Ingreso;
        const ingreso2 = new Ingreso;
        const controlFinanciero = new ControlFinanciero;
    
        ingreso1.agregarMonto(150);
        ingreso1.agregarFecha("2024-11-19");
        ingreso1.agregarNota("Compra de bisuteria");
        ingreso1.agregarCategoria("premios");
    
        ingreso2.agregarMonto(300);
        ingreso2.agregarFecha("2024-11-20");
        ingreso2.agregarNota("Cena familiar");
        ingreso2.agregarCategoria("inversiones");
    
        controlFinanciero.registrarIngreso(ingreso1);
        controlFinanciero.registrarIngreso(ingreso2);
    
        const seleccionado = controlFinanciero.seleccionarIngreso(1);
        expect(seleccionado).toEqual({
          monto: 300,
          fecha: "2024-11-20",
          nota: "Cena familiar",
          categoria: "inversiones",
        });
      });

      it("Deberia devolver un mensaje si el indice está fuera de rango (negativo)", () => {
        const controlFinanciero = new ControlFinanciero;
        const resultado = controlFinanciero.seleccionarIngreso(-1); // Llama directamente a la función
        expect(resultado).toBe("El ingreso no se pudo eliminar, intentelo de nuevo");
    });
});