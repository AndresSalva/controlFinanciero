import ControlFinanciero from './control-financiero.js'
import Gasto from './gasto.js';

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
});