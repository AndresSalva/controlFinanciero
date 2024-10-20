describe("Registrar Ingreso", () => {
    it("Muestra monto de ingreso ingresado", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(8);
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "8");
    });
  });
  