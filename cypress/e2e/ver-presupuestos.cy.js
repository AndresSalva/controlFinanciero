describe("Ver presupuestos", () => {
    it("Muestra el total del presupuesto aniadido", () => {
      cy.visit("/");
      cy.get("#monto-presupuesto").type(100);
      cy.get("#aniadir-presupuesto").click();
      cy.get("#totalPresupuesto-div").should("contain", "100");
    });

    it("Si no hay presupuesto se muestra un mensaje de 'No hay presupuestos'", () => {
        cy.visit("/");
        cy.get("#totalPresupuesto-div").should("contain", "No hay presupuestos");
      });
  });