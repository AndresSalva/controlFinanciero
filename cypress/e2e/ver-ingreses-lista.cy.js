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
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(20);
      cy.get("#fecha-ingreso").type("2024-10-27");
      cy.get("#nota-ingreso").type("Premio");
      cy.get("#aniadir-ingreso").click();
      cy.get("#lista-ingresos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Inversiones");
      cy.get("#lista-ingresos-div").should("contain", "20").and("contain", "2024-10-27").and("contain", "Premio");
    });

    it("Cada ingreso tiene un botón para poder eliminar un ingreso", () => {
      cy.visit("/");

      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(35);
      cy.get("#categoria-ingreso").select("premios");
      cy.get("#aniadir-ingreso").click();

      cy.get("#totalIngresos-div").should("contain", "35");
      cy.get(".eliminar-ingreso-btn").should('be.visible').click();
      cy.get("#totalIngresos-div").should("contain", "Total de ingresos: 35");

    });

    it("Cada ingreso tiene un botón para poder eliminar un ingreso solo si confirma", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(35);
      cy.get("#categoria-ingreso").select("inversiones");
      cy.get("#aniadir-ingreso").click();
      cy.get("#totalIngresos-div").should("contain", "35");
      cy.window().then((window) => {
        cy.stub(window, 'confirm').returns(true);
      });
      cy.get(".eliminar-ingreso-btn").should('be.visible').click();
      cy.get("#totalIngresos-div").should("contain", "Total de ingresos: 35");
    });

    it("No debería eliminar un ingreso si el usuario no confirma", () => {
      cy.visit("/");
    
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(55);
      cy.get("#categoria-ingreso").select("inversiones");
      cy.get("#aniadir-ingreso").click();
      cy.get("#totalIngresos-div").should("contain", "55");
    
      cy.window().then((window) => {
        cy.stub(window, 'confirm').returns(false);
      });
    
      cy.get(".eliminar-ingreso-btn").should('be.visible').click();
      cy.get("#totalIngresos-div").should("contain", "55");
    });

    it("Cada ingreso tiene un botón para poder eliminar un ingreso", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(35);
      cy.get("#fecha-ingreso").type('2024-12-25')
      cy.get("#nota-ingreso").type('webada')
     
      cy.get("#categoria-ingreso").select("inversiones");
      cy.get("#aniadir-ingreso").click();

      cy.get("#ingreso-div").should("contain", "35");
      cy.get(".eliminar-ingreso-btn").should('be.visible').click();
      cy.get("#totalIngresos-div").should("not.contain", "otros");
    });
    /*it("Cada presupuesto tiene un botón para poder eliminar un presupuesto solo si confirma", () => {
      cy.visit("/");
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(35);
      cy.get("#categoria-presupuesto").select("alimentacion");
      cy.get("#aniadir-presupuesto").click();
      cy.get("#totalPresupuesto-div").should("contain", "35").and("contain", "alimentacion");
      cy.window().then((window) => {
        cy.stub(window, 'confirm').returns(true);
      });
      cy.get(".eliminar-presupuesto-btn").should('be.visible').click();
      cy.get("#totalPresupuesto-div").should("not.contain", "35");
      cy.get("#totalPresupuesto-div").should("not.contain", "alimentacion");
    });
    it("No debería eliminar un presupuesto si el usuario no confirma", () => {
      cy.visit("/");
    
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(55);
      cy.get("#categoria-ingreso").select("alimentacion");
      cy.get("#aniadiro").click();
    
      cy.get("#totalPresupuesto-div").should("contain", "55").and("contain", "alimentacion");
    
      cy.window().then((window) => {
        cy.stub(window, 'confirm').returns(false);
      });
    
      cy.get(".eliminar-presupuesto-btn").should('be.visible').click();
    
      cy.get("#totalPresupuesto-div").should("contain", "55");
      cy.get("#totalPresupuesto-div").should("contain", "alimentacion");
    });
*/

  });
  