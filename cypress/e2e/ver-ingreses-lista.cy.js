describe("Ver Ingresos", () => {
    it("Muestra un ingreso ingresado en la lista", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(200);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("Regalos");
      cy.get("#aniadir-ingreso").click();
      cy.get("#lista-ingresos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Regalos");
    });
    //nuevo
    it("Muestra dos o mas ingreso aniadidos en la lista", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(200);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("Inversiones");
      cy.get("#aniadir-ingreso").click();
      cy.get("#monto-ingreso").clear();
      cy.get("#fecha-ingreso").clear();
      cy.get("#nota-ingreso").clear();
      cy.get("#monto-ingreso").type(20);
      cy.get("#fecha-ingreso").type("2024-10-27");
      cy.get("#nota-ingreso").type("Premio");
      cy.get("#aniadir-ingreso").click();
      cy.get("#lista-ingresos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Inversiones");
      cy.get("#lista-ingresos-div").should("contain", "20").and("contain", "2024-10-27").and("contain", "Premio");
    });
  });
  