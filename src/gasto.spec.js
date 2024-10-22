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

  it("Si no ingresa un monto pero si la fecha, Deberia mostrar un mensaje de MONTO VACIO", () => {
    const gastito = new Gasto
    gastito.agregarMonto(null)
    gastito.agregarFecha("2024-10-14")
    expect(gastito.mostrarMonto()).toEqual('Necesita llenar el monto');
    expect(gastito.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });

  it("Si no ingresa un monto y no ingresa fecha, Deberia usar la fecha actual", () => {
    const gastito = new Gasto();
    gastito.agregarMonto(23);
    gastito.agregarFecha(null);
    gastito.agregarNota("Gasto en gustitos");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`; 

    expect(gastito.mostrarMonto()).toEqual('Monto: 23');
    expect(gastito.mostrarFecha()).toEqual(`Fecha: ${fechaActual}`);
    expect(gastito.mostrarNota()).toEqual('Nota: Gasto en gustitos');
  });
});