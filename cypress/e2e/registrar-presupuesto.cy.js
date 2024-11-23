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
  it("Muestra monto ingresada y categoria seleccionada del presupuesto", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("alimentacion");
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "100").and("contain", "alimentacion");
  });
  it("Muestra monto ingresada y categoria 'ninguno'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("ninguno");
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "100").and("contain", "ninguno");
  });
  it("Muestra monto ingresada y categoria personalizada por seleccionar 'otros'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("otros");
    cy.get("#categoria-gasto-personalizada").type("universidad");
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "100").and("contain", "universidad");
  });
  it("Si no se añade categoria personalizada aparece mensaje de 'CATEGORIA VACIA!'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("otros");
    cy.get("#aniadir-presupuesto").click();
    cy.get("#presupuesto-div").should("contain", "CATEGORIA VACIA!!!");
  });
});
