import ListaIngresos from "./lista-ingresos.js";
import Ingreso from "./ingreso.js";

describe("Lista ingreso", () => {
  it("Deberia registrar un ingreso en la lista", () => {
    const ingreso = new Ingreso();
    ingreso.agregarMonto(100)
    ingreso.agregarFecha("2024-10-20")
    ingreso.agregarNota("Premio")
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso);
    const resultado = [{
        monto: 100,
        fecha: "2024-10-20",
        nota: "Premio",
      }];
    expect(lista.obtenerIngreso()).toEqual(resultado);
  });
  //nuevo
  it("Deberia registrar dos o mas ingresos en la lista", () => {
    const ingreso1 = new Ingreso();
    ingreso1.agregarMonto(150)
    ingreso1.agregarFecha("2024-10-12")
    ingreso1.agregarNota("Salario")
    const ingreso2 = new Ingreso();
    ingreso2.agregarMonto(90)
    ingreso2.agregarFecha("2024-10-10")
    ingreso2.agregarNota("Regalo")
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso1);
    lista.registrarIngreso(ingreso2);
    const resultado = [{
        monto: 150,
        fecha: "2024-10-12",
        nota: "Salario",
      },
      {
        monto: 90,
        fecha: "2024-10-10",
        nota: "Regalo",
      }
    ];
    expect(lista.obtenerIngreso()).toEqual(resultado);
  });

  it("Debería indicar que no hay ingresos registrados cuando la lista está vacía", () => {
    const lista = new ListaIngresos;
    expect(lista.obtenerIngreso()).toEqual([]); // La lista debería estar vacía
  });
});