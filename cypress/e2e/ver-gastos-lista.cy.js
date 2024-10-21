describe("Ver Gastos", () => {
    it("Muestra un gasto ingresado en la lista", () => {
      cy.visit("/");
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto en comida");
      cy.get("#aniadir-gasto").click();
      cy.get("#lista-gastos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Gasto en comida");
    });
  });
  