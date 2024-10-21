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
});
