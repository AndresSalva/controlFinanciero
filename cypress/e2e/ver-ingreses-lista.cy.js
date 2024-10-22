describe("Ver Ingresos", () => {
    it("Muestra un ingreso ingresado en la lista", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(200);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("Regalos");
      cy.get("#aniadir-ingreso").click();
      cy.get("#lista-ingresos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Regalos");
    });
  });
  