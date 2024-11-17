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
  it("Deberia registrar dos o mas gastos en la lista", () => {
    const gastito1 = new Gasto;
    gastito1.agregarMonto(45)
    gastito1.agregarFecha("2024-10-12")
    gastito1.agregarNota("compra de libros")
    const gastito2 = new Gasto;
    gastito2.agregarMonto(90)
    gastito2.agregarFecha("2024-10-1")
    gastito2.agregarNota("Social")
    const lista = new ListaGastos;
    lista.registrarGasto(gastito1);
    lista.registrarGasto(gastito2);
    const resultado = [{
        monto: 45,
        fecha: "2024-10-12",
        nota: "compra de libros",
      },
      {
        monto: 90,
        fecha: "2024-10-1",
        nota: "Social",
      }
    ];
    expect(lista.obtenerGastos()).toEqual(resultado);
  });

  it("Debería indicar que no hay gastos registrados cuando la lista está vacía", () => {
    const lista = new ListaGastos;
    expect(lista.obtenerGastos()).toEqual([]); // La lista debería estar vacía
  });


});