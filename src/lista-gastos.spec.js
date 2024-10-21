import ListaGastos from "./lista-gastos.js";
import Gasto from "./gasto.js";

describe("Lista gastos", () => {
  it("Deberia registrar un gasto en la lista", () => {
    const gastito = new Gasto;
    gastito.agregarMonto(45)
    gastito.agregarFecha("2024-10-12")
    gastito.agregarNota("compra de libros")
    const lista = new ListaGastos;
    lista.registrarGasto(gastito);
    const resultado = [{
        monto: 45,
        fecha: "2024-10-12",
        nota: "compra de libros",
      }];
    expect(lista.obtenerGastos()).toEqual(resultado);
  });

});