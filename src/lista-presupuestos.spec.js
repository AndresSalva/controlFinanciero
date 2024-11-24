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
});