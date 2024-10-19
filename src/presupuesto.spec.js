import Presupuesto from "./presupuesto.js";

describe("Presupuesto", () => {
  it("Deberia registrar el presupuesto", () => {
    const presupuestito = new Presupuesto
    presupuestito.agregarMonto(90)
    expect(presupuestito.mostrarMonto()).toEqual('Monto: 90');
  });
});