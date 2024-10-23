describe("Gastos - Control", () => {
    it("Muestra 3 gastos ingresados y muestra el total", () => {
      cy.visit("/");
      
      cy.get("#monto-gasto").type(100);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("1er gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#monto-gasto").type(20);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("2do gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#monto-gasto").type(350);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("3er gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#totalGastos-div").should('contain', '470');
    });
  });
  