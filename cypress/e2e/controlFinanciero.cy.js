describe("Gastos, Ingresos - Control", () => {
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

    it("Muestra 3 ingresos y muestra el total", () => {
      cy.visit("/");
      
      cy.get("#monto-ingreso").type(10);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();

      cy.get("#monto-ingreso").type(30);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();


      cy.get("#monto-ingreso").type(100);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();


      cy.get("#totalIngresos-div").should('contain', '140');
    });
    it("Muestra el saldo actualizandoce", () => {
      cy.visit("/");
      
      cy.get("#monto-ingreso").type(100);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er ingreso");
      cy.get("#aniadir-ingreso").click();

      cy.get("#monto-ingreso").type(300);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("2do ingreso");
      cy.get("#aniadir-ingreso").click();

      cy.get("#monto-gasto").type(150);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("1er gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#monto-gasto").type(20);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("2do gasto");
      cy.get("#aniadir-gasto").click();


      cy.get("#saldo-div").should('contain', '230');
    });
  });
  