describe("Ver presupuestos", () => {
  it("Cuando se registre un presupuesto se mostrará la lista de presupuestos", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("transporte");
    cy.get("#aniadir-presupuesto").click();

    cy.get("#totalPresupuesto-div").should("contain", "100").and("contain", "transporte");
  });
  it("Cuando se registre un presupuesto se mostrará la lista de presupuestos", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("otros");
    cy.get("#categoria-gasto-personalizada").type("universidad");
    cy.get("#aniadir-presupuesto").click();

    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(35);
    cy.get("#categoria-presupuesto").select("alimentacion");
    cy.get("#aniadir-presupuesto").click();

    cy.get("#totalPresupuesto-div").should("contain", "100").and("contain", "universidad");
    cy.get("#totalPresupuesto-div").should("contain", "35").and("contain", "alimentacion");
  });
  it("Cada presupuesto tiene un botón para poder eliminar un presupuesto", () => {
    cy.visit("/");

    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(35);
    cy.get("#categoria-presupuesto").select("alimentacion");
    cy.get("#aniadir-presupuesto").click();

    cy.get("#totalPresupuesto-div").should("contain", "35").and("contain", "alimentacion");

    cy.get(".eliminar-presupuesto-btn").should('be.visible').click();

    cy.get("#totalPresupuesto-div").should("not.contain", "35");
    cy.get("#totalPresupuesto-div").should("not.contain", "alimentacion");
  });
});