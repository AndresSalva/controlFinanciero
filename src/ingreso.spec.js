import Ingreso from "./ingreso";

describe("Ingresos", () => {
  it("Deberia registrar monto ingreso", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(5);
    expect(ingreso.mostrarMonto()).toEqual('Monto: 5');
  });
  it("Deberia registrar monto ingreso con fecha", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(1);
    ingreso.agregarFecha("2024-10-14");
    expect(ingreso.mostrarMonto()).toEqual('Monto: 1');
    expect(ingreso.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });
  it("Si no ingresa un monto pero si la fecha, Deberia mostrar un mensaje de MONTO VACIO", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(null)
    ingreso.agregarFecha("2024-10-14")
    expect(ingreso.mostrarMonto()).toEqual('Necesita llenar el monto');
    expect(ingreso.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });
  it("Deberia registrar monto ingreso con fecha y nota", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(1);
    ingreso.agregarFecha("2024-10-14");
    ingreso.agregarNota("alimento")
    expect(ingreso.mostrarMonto()).toEqual('Monto: 1');
    expect(ingreso.mostrarFecha()).toEqual('Fecha: 2024-10-14');
    expect(ingreso.mostrarNota()).toEqual('Nota: alimento');
  });

});