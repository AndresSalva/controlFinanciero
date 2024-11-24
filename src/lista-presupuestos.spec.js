import ListaPresupuestos from "./lista-presupuestos.js";
import Presupuesto from "./presupuesto.js"

describe("Lista presupuestos", () => {
  it("Deberia registrar un presupuesto en la lista", () => {
    const presupuestito = new Presupuesto;
    presupuestito.agregarMonto(45)
    presupuestito.agregarCategoria("entretenimiento")
    const lista = new ListaPresupuestos;
    lista.registrarPresupuesto(presupuestito);
    const resultado = [{
        monto: 45,
        categoria: "entretenimiento"
      }];
    expect(lista.obtenerPresupuestos()).toEqual(resultado);
  });
  it("Deberia registrar dos o mas presupuestos en la lista", () => {
    const presupuestito1 = new Presupuesto;
    presupuestito1.agregarMonto(55)
    presupuestito1.agregarCategoria("alimentacion")
    const presupuestito2 = new Presupuesto;
    presupuestito2.agregarMonto(80)
    presupuestito2.agregarCategoria("ninguno")
    const lista = new ListaPresupuestos;
    lista.registrarPresupuesto(presupuestito1);
    lista.registrarPresupuesto(presupuestito2);
    const resultado = [{
        monto: 55,
        categoria: "alimentacion",
      },
      {
        monto: 80,
        categoria: "ninguno",
      }
    ];
    expect(lista.obtenerPresupuestos()).toEqual(resultado);
  });
  it("Deberia eliminar un presupuesto de la lista", () => {

    const presupuestito1 = new Presupuesto();
    presupuestito1.agregarMonto(55);
    presupuestito1.agregarCategoria("alimentacion");

    const presupuestito2 = new Presupuesto();
    presupuestito2.agregarMonto(80);
    presupuestito2.agregarCategoria("ninguno");

    const lista = new ListaPresupuestos();
    lista.registrarPresupuesto(presupuestito1);
    lista.registrarPresupuesto(presupuestito2);

    expect(lista.obtenerPresupuestos()).toEqual([presupuestito1, presupuestito2]);

    lista.eliminarPresupuesto(1);

    expect(lista.obtenerPresupuestos()).toEqual([presupuestito1]);
  });
});