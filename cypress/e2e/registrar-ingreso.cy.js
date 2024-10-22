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
    it("Muestra la fecha actual en caso de solo ingresar el monto de gasto y nota", () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
      const day = String(today.getDate()).padStart(2, '0');
      const fechaActual = `${year}-${month}-${day}`; 
  
      cy.visit("/");
      cy.get("#monto-ingreso").type(5);
      cy.get("#fecha-ingreso").clear();
      cy.get("#nota-ingreso").type("Salario");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "5").and("contain", fechaActual).and("contain", "Salario");
    });
    it("Muestra mensaje de 'No hay notas disponibles' caso de solo ingresar el monto de gasto y la fecha", () => {
      cy.visit("/");
      cy.get("#monto-ingreso").type(5);
      cy.get("#fecha-ingreso").type("2024-10-14");
      cy.get("#nota-ingreso").clear();
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "5").and("contain", "2024-10-14").and("contain", "No hay notas disponibles");
    });
  });