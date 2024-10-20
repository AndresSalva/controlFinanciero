describe("Registrar Ingreso", () => {
    it("Muestra monto de ingreso ingresado", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(8);
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "8");
    });
    it("Muestra monto de ingreso ingresado y fecha", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(4);
      cy.get("#fecha-ingreso").type("2024-10-19");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "4").and("contain", "2024-10-19");
    });
  });
  