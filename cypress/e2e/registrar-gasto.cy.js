describe("Registrar Gasto", () => {
  it("Muestra monto de gasto ingresado", () => {
    cy.visit("/");
    cy.get("#monto-gasto").type(4);
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4");
  });

  it("Muestra monto de gasto ingresado y fecha", () => {
    cy.visit("/");
    cy.get("#monto-gasto").type(4);
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4").and("contain", "2024-10-19");
  });

  it("Muestra monto de gasto ingresado,fecha y nota", () => {
    cy.visit("/");
    cy.get("#monto-gasto").type(4);
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#nota-gasto").type("Gasto en comida");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4").and("contain", "2024-10-19").and("contain", "Gasto en comida");
  });

  it("Muestra mensaje de 'MONTO VACIO!!!' si se ingresa fecha pero no el monto", () => {
    cy.visit("/");
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#monto-gasto").clear();
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "MONTO VACIO!!!");
  });

  it("Muestra la fecha actual en caso de solo ingresar el monto de gasto y nota", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const day = String(today.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`; 

    cy.visit("/");
    cy.get("#monto-gasto").type(5);
    cy.get("#fecha-gasto").clear();
    cy.get("#nota-gasto").type("Gasto en transporte");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "5").and("contain", fechaActual).and("contain", "Gasto en transporte");
  });
  it("Muestra mensaje de 'No hay notas disponibles' caso de solo ingresar el monto de gasto y la fecha", () => {
    cy.visit("/");
    cy.get("#monto-gasto").type(5);
    cy.get("#fecha-gasto").type("2024-10-14");
    cy.get("#nota-gasto").clear();
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "5").and("contain", "2024-10-14").and("contain", "No hay notas disponibles");
  });
});
