import Ingreso from "./ingreso";

describe("Ingresos", () => {
  it("Deberia registrar monto ingreso", () => {
    const ingreso = new Ingreso()
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
  it("Si no ingresa un monto pero si la fecha, Deberia mostrar un mensaje de 'MONTO VACIO!!!'", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(null)
    ingreso.agregarFecha("2024-10-14")
    expect(ingreso.mostrarMonto()).toEqual('MONTO VACIO!!!');
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
  it("Si no ingresa un monto y no ingresa fecha, Deberia usar la fecha actual", () => {
    const ingreso = new Ingreso();
    ingreso.agregarMonto(23);
    ingreso.agregarFecha(null);
    ingreso.agregarNota("Premios");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`; 

    expect(ingreso.mostrarMonto()).toEqual('Monto: 23');
    expect(ingreso.mostrarFecha()).toEqual(`Fecha: ${fechaActual}`);
    expect(ingreso.mostrarNota()).toEqual('Nota: Premios');
  });
  it("Si ingresa el monto y la fecha pero no ingresa una nota, Deberia mostrar un mensaje de 'No hay notas disponibles'", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(14);
    ingreso.agregarNota(null)
    ingreso.agregarFecha("2024-10-14")
    expect(ingreso.mostrarMonto()).toEqual('Monto: 14');
    expect(ingreso.mostrarNota()).toEqual('No hay notas disponibles');
    expect(ingreso.mostrarFecha()).toEqual('Fecha: 2024-10-14');
  });
  it("Debería limpiar los valores del formulario de ingreso al cancelar", () => {
    const ingreso = new Ingreso();
    ingreso.agregarMonto(100);
    ingreso.agregarFecha("2024-11-16");
    ingreso.agregarNota("Nota de prueba");
  
    ingreso.reset();
  
    expect(ingreso.monto).toBeNull();
    expect(ingreso.fecha).toBeNull();
    expect(ingreso.nota).toBeNull();
  });

  it("Deberia registrar el ingreso con su categoria", () => {
    const ingreso = new Ingreso
    ingreso.agregarMonto(90)
    ingreso.agregarCategoria("Bisuteria")
    expect(ingreso.mostrarMonto()).toEqual('Monto: 90');
    expect(ingreso.mostrarCategoria()).toEqual('Categoria: Bisuteria');
  });
  
});