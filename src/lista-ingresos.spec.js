import ListaIngresos from "./lista-ingresos.js";
import Ingreso from "./ingreso.js";


describe("Lista ingreso", () => {
  it("Deberia registrar un ingreso en la lista", () => {
    const ingreso = new Ingreso();
    ingreso.agregarMonto(100)
    ingreso.agregarFecha("2024-10-20")
    ingreso.agregarNota("Premio")
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso);
    const resultado = [{
        monto: 100,
        fecha: "2024-10-20",
        nota: "Premio",
      }];
    expect(lista.obtenerIngreso()).toEqual(resultado);
  });
  

});