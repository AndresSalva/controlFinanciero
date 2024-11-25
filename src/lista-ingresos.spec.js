import ListaIngresos from "./lista-ingresos.js";
import Ingreso from "./ingreso.js";

describe("Lista ingreso", () => {
  it("Deberia registrar un ingreso en la lista", () => {
    const ingreso = new Ingreso();
    ingreso.agregarMonto(100)
    ingreso.agregarFecha("2024-10-20")
    ingreso.agregarNota("Galletitas")
    ingreso.agregarCategoria("premios")
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso);
    const resultado = [{
        monto: 100,
        fecha: "2024-10-20",
        nota: "Galletitas",
        categoria: "premios",
      }];
    expect(lista.obtenerIngreso()).toEqual(resultado);
  });
  //nuevo
  it("Deberia registrar dos o mas ingresos en la lista", () => {
    const ingreso1 = new Ingreso();
    ingreso1.agregarMonto(150)
    ingreso1.agregarFecha("2024-10-12")
    ingreso1.agregarNota("Salario")
    ingreso1.agregarCategoria("salario")
    const ingreso2 = new Ingreso();
    ingreso2.agregarMonto(90)
    ingreso2.agregarFecha("2024-10-10")
    ingreso2.agregarNota("Regalo")
    ingreso2.agregarCategoria("premios")
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso1);
    lista.registrarIngreso(ingreso2);
    const resultado = [{
        monto: 150,
        fecha: "2024-10-12",
        nota: "Salario",
        categoria: "salario",
      },
      {
        monto: 90,
        fecha: "2024-10-10",
        nota: "Regalo",
        categoria: "premios",
      }
    ];
    expect(lista.obtenerIngreso()).toEqual(resultado);
  });

  it("Debería indicar que no hay ingresos registrados cuando la lista está vacía", () => {
    const lista = new ListaIngresos;
    expect(lista.obtenerIngreso()).toEqual([]); // La lista debería estar vacía
  });

  it("Deberia lanzar un error si el indice está fuera de rango (negativo)", () => {
    const lista = new ListaIngresos;
    const resultado = lista.seleccionarIngreso(-1); 
    expect(resultado).toBe("El ingreso no se pudo eliminar, intentelo de nuevo");
  });
  it("Deberia eliminar un ingreso de la lista", () => {
    const ingresito1 = new Ingreso;
    ingresito1.agregarMonto(55);
    ingresito1.agregarCategoria("salario");

    const ingresito2 = new Ingreso;
    ingresito2.agregarMonto(80);
    ingresito2.agregarCategoria("ninguno");

    const lista = new ListaIngresos;
    lista.registrarIngreso(ingresito1);
    lista.registrarIngreso(ingresito2);
    expect(lista.obtenerIngreso()).toEqual([ingresito1, ingresito2]);
    lista.eliminarIngreso(1);
    expect(lista.obtenerIngreso()).toEqual([ingresito1]);
  });

  it("Debería eliminar un presupuesto de la lista después de confirmación", () => {
    const ingreso_1 = new Ingreso;
    ingreso_1.agregarMonto(100);
    ingreso_1.agregarCategoria("inversiones");
  
    const ingreso_2 = new Ingreso;
    ingreso_2.agregarMonto(60);
    ingreso_2.agregarCategoria("premios");
  
    const lista = new ListaIngresos;
    lista.registrarIngreso(ingreso_1);
    lista.registrarIngreso(ingreso_2);
  
    expect(lista.obtenerIngreso()).toEqual([ingreso_1, ingreso_2]);
  
    const mockConfirm = jest.fn().mockReturnValue(true);
    global.confirm = mockConfirm;
  
    lista.eliminarIngreso(1);
  
    expect(lista.obtenerIngreso()).toEqual([ingreso_1]);
  });
});