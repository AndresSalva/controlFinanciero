describe("Registrar presupuesto", () => {
  it("Muestra monto de presupuesto ingresado", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "100");
  });
  it("Muestra mensaje de 'MONTO VACIO!!!' si no se ingresa ningun monto", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "MONTO VACIO!!!");
  });

});
