describe("Registrar presupuesto", () => {
  it("Muestra monto de presupuesto ingresado", () => {
    cy.visit("/");
    cy.get("#monto-presupuesto").type(100);
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "100");
  });
});
