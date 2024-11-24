describe("Ver presupuestos", () => {
  it("Cuando se registre un presupuesto se mostrará la lista de presupuestos", () => {
    cy.visit("/");
    cy.get("#mostrar-form-presupuesto").click();
    cy.get("#monto-presupuesto").type(100);
    cy.get("#categoria-presupuesto").select("transporte");
    cy.get("#aniadir-presupuesto").click();

    cy.get("#totalPresupuesto-div").should("contain", "100").and("contain", "transporte");
  });
  
  });