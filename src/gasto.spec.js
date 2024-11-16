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
    expect(gastito.mostrarMonto()).toEqual('MONTO VACIO!!!');
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
  it("Si ingresa el monto y la fecha pero no ingresa una nota, Deberia mostrar un mensaje de 'No hay notas disponibles'", () => {
    const gastito = new Gasto();
    gastito.agregarMonto(14);
    gastito.agregarNota(null)
    gastito.agregarFecha("2024-10-14")
    expect(gastito.mostrarMonto()).toEqual('Monto: 14');
    expect(gastito.mostrarNota()).toEqual('No hay notas disponibles');
    expect(gastito.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });
  it("Debería limpiar los valores del formulario de ingreso al cancelar", () => {
    const gastito = new Gasto();
    gastito.agregarMonto(60);
    gastito.agregarFecha("2024-11-16");
    gastito.agregarNota("Nota de cancelar");
  
    gastito.reset();
  
    expect(gastito.monto).toBeNull();
    expect(gastito.fecha).toBeNull();
    expect(gastito.nota).toBeNull();
  });
});