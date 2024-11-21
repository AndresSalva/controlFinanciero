describe("Ver presupuestos", () => {
    it("Si no hay presupuesto se muestra un mensaje de 'No hay presupuestos'", () => {
      cy.visit("/");
      cy.get("#totalPresupuesto-div").should("contain", "No hay presupuestos");
    });

    it("Muestra el total del presupuesto aniadido", () => {
      cy.visit("/");
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(100);
      cy.get("#aniadir-presupuesto").click();
      cy.get("#totalPresupuesto-div").should("contain", "100");
    });

    it("Muestra el total del presupuesto aniadido y su categoria", () => {
      cy.visit("/");
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(100);
      cy.get("#categoria-presupuesto").select("alimentacion");
      cy.get("#aniadir-presupuesto").click();
      cy.get("#totalPresupuesto-div").should("contain", "100").and("contain", "alimentacion");
    });
    it("Muestra el total del presupuesto aniadido y su categoria personalizada", () => {
      cy.visit("/");
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(100);
      cy.get("#categoria-presupuesto").select("otros");
      cy.get("#categoria-gasto-personalizada").type("universidad");
      cy.get("#aniadir-presupuesto").click();
      cy.get("#totalPresupuesto-div").should("contain", "100").and("contain", "universidad");
    });

    
  });