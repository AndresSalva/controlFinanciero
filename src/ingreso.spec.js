import Ingreso from "./ingreso";

describe("Ingresos", () => {
  it("Deberia registrar monto ingreso", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(5)
    expect(ingreso.mostrarMonto()).toEqual('Monto: 5');
  });
});