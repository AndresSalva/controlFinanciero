import Gasto from "./gasto.js";

describe("Gastos", () => {
  it("Deberia registrar monto gasto", () => {
    const gastito = new Gasto
    gastito.agregarMonto(1)
    expect(gastito.mostrarMonto()).toEqual('Monto: 1');
  });
});