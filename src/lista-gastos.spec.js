import ListaGastos from "./lista-gastos.js";
import Gasto from "./gasto.js";

describe("Lista gastos", () => {
  it("Deberia registrar un gasto en la lista", () => {
    const gastito = new Gasto;
    gastito.agregarMonto(45)
    gastito.agregarFecha("2024-10-12")
    gastito.agregarNota("compra de libros")
    gastito.agregarCategoria("Alimentacion")
    const lista = new ListaGastos;
    lista.registrarGasto(gastito);
    const resultado = [{
        monto: 45,
        fecha: "2024-10-12",
        nota: "compra de libros",
        categoria: "Alimentacion",
      }];
    expect(lista.obtenerGastos()).toEqual(resultado);
  });
  it("Deberia registrar dos o mas gastos en la lista", () => {
    const gastito1 = new Gasto;
    gastito1.agregarMonto(45)
    gastito1.agregarFecha("2024-10-12")
    gastito1.agregarNota("compra de libros")
    gastito1.agregarCategoria("Trasporte");
    const gastito2 = new Gasto;
    gastito2.agregarMonto(90)
    gastito2.agregarFecha("2024-10-1")
    gastito2.agregarNota("Social")
    gastito2.agregarCategoria("regalo");
    const lista = new ListaGastos;
    lista.registrarGasto(gastito1);
    lista.registrarGasto(gastito2);
    const resultado = [{
        monto: 45,
        fecha: "2024-10-12",
        nota: "compra de libros",
        categoria: "Trasporte"
      },
      {
        monto: 90,
        fecha: "2024-10-1",
        nota: "Social",
        categoria: "regalo",
      }
    ];
    expect(lista.obtenerGastos()).toEqual(resultado);
  });

  it("Debería indicar que no hay gastos registrados cuando la lista está vacía", () => {
    const lista = new ListaGastos;
    expect(lista.obtenerGastos()).toEqual([]); // La lista debería estar vacía
  });
  //
  it("Deberia seleccionar un gasto correctamente según el indice", () => {
    const gastito1 = new Gasto();
    gastito1.agregarMonto(50);
    gastito1.agregarFecha("2024-10-12");
    gastito1.agregarNota("Compra de útiles escolares");
    gastito1.agregarCategoria("Ropa");

    const gastito2 = new Gasto();
    gastito2.agregarMonto(100);
    gastito2.agregarFecha("2024-11-01");
    gastito2.agregarNota("Cena familiar");
    gastito2.agregarCategoria("Salud");

    const lista = new ListaGastos();
    lista.registrarGasto(gastito1);
    lista.registrarGasto(gastito2);

    const seleccionado = lista.seleccionarGasto(1);
    expect(seleccionado).toEqual({
      monto: 100,
      fecha: "2024-11-01",
      nota: "Cena familiar",
      categoria: "Salud"
    });
  });
  it("Deberia lanzar un error si el indice está fuera de rango (negativo)", () => {
    const lista = new ListaGastos();
    const resultado = lista.seleccionarGasto(-1); 
    expect(resultado).toBe("El gasto no se pudo eliminar, intentelo de nuevo");
  });
  //
  it("Deberia recalcular los gastos correctamente después de editar un gasto", () => {
    const lista = new ListaGastos();

    const gastito1 = new Gasto();
    gastito1.agregarMonto(100);
    gastito1.agregarFecha("2024-10-12");
    gastito1.agregarNota("Compra de libros");
    gastito1.agregarCategoria("Educación");

    const gastito2 = new Gasto();
    gastito2.agregarMonto(200);
    gastito2.agregarFecha("2024-10-15");
    gastito2.agregarNota("Cena con amigos");
    gastito2.agregarCategoria("Ocio");

    lista.registrarGasto(gastito1);
    lista.registrarGasto(gastito2);

    const nuevosDatos = {
        monto: 300,
        fecha: "2024-10-20",
        nota: "Cena especial",
        categoria: "Ocio",
    };
    lista.editarGasto(1, nuevosDatos);
    const resultadoEsperado = [
        {
            monto: 100,
            fecha: "2024-10-12",
            nota: "Compra de libros",
            categoria: "Educación",
        },
        {
            monto: 300,
            fecha: "2024-10-20",
            nota: "Cena especial",
            categoria: "Ocio",
        },
    ];
    expect(lista.obtenerGastos()).toEqual(resultadoEsperado);
  });
  it("No edita nada cuando la lista está vacia", () => {
    const listaGastos = new ListaGastos();

    const resultado = listaGastos.editarGasto(0, {
        monto: 150,
        fecha: "2024-11-05",
        nota: "Intento de edicion con lista vacia",
        categoria: "otro",
    });
    expect(resultado).toBe("Indice invalido para editar gasto.");
  });
});