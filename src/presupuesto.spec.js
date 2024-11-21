import Presupuesto from "./presupuesto.js";

describe("Presupuesto", () => {
  it("Deberia registrar el presupuesto", () => {
    const presupuestito = new Presupuesto
    presupuestito.agregarMonto(90)
    expect(presupuestito.mostrarMonto()).toEqual('Monto: 90');
  });
  it("Deberia registrar el presupuesto con su categoria", () => {
    const presupuestito = new Presupuesto
    presupuestito.agregarMonto(90)
    presupuestito.agregarCategoria("alimentacion")
    expect(presupuestito.mostrarMonto()).toEqual('Monto: 90');
    expect(presupuestito.mostrarCategoria()).toEqual('Categoria: alimentacion');
  });
});