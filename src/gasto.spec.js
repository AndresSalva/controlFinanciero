import Gasto from "./gasto.js";

describe("Gastos", () => {
  it("Deberia registrar monto gasto", () => {
    const gastito = new Gasto
    gastito.agregarMonto(1)
    expect(gastito.mostrarMonto()).toEqual('Monto: 1');
  });

  it("Deberia registrar monto gasto con fecha", () => {
    const gastito = new Gasto
    gastito.agregarMonto(1)
    gastito.agregarFecha("2024-10-14")
    expect(gastito.mostrarMonto()).toEqual('Monto: 1');
    expect(gastito.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });

  it("Deberia registrar monto gasto con fecha y nota", () => {
    const gastito = new Gasto
    gastito.agregarMonto(1)
    gastito.agregarFecha("2024-10-14")
    gastito.agregarNota("Gasto en ropa")
    expect(gastito.mostrarMonto()).toEqual('Monto: 1');
    expect(gastito.mostrarFecha()).toEqual('Fecha: 2024-10-14');
    expect(gastito.mostrarNota()).toEqual('Nota: Gasto en ropa');
  });
});