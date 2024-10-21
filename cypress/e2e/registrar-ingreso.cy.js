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
    it("Muestra mensaje de 'MONTO VACIO!!!' si se ingresa fecha pero no el monto", () => {
      cy.visit("/");

      cy.get("#fecha-ingreso").type("2024-10-19");
      cy.get("#monto-ingreso").clear();
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "MONTO VACIO!!!");
    });
    it("Muestra monto de ingreso ingresado, fecha y nota", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(4);
      cy.get("#fecha-ingreso").type("2024-10-19");
      cy.get("#nota-ingreso").type("comida");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div")
        .should("contain", "4")
        .and("contain", "2024-10-19")
        .and("contain", "comida");
    });

  });