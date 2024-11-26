describe("Ver Presupuestos y Gastos", () => {
  
    it("Muestra un presupuesto ingresado en el informe", () => {
        cy.visit("/"); 

        cy.get("#mostrar-form-presupuesto").click();
        cy.get("#monto-presupuesto").type(1000);
        cy.get("#categoria-presupuesto").select("alimentacion");
        cy.get("#aniadir-presupuesto").click();

        cy.get("#informePresupuesto-div")
            .should("contain", "alimentacion")
            .and("contain", "Presupuesto: 1000")
            .and("contain", "Gasto: 0")
            .and("contain", "Total: 1000");
    });
    it("Muestra un presupuesto y un gasto en el informe", () => {
        cy.visit("/"); 
    
        cy.get("#mostrar-form-presupuesto").click();
        cy.get("#monto-presupuesto").type(1000);
        cy.get("#categoria-presupuesto").select("alimentacion");
        cy.get("#aniadir-presupuesto").click();
    
        cy.get("#informePresupuesto-div")
          .should("contain", "alimentacion")
          .and("contain", "Presupuesto: 1000")
          .and("contain", "Gasto: 0")
          .and("contain", "Total: 1000");
    
        cy.get("#mostrar-form-btn").click(); 
        cy.get("#monto-gasto").type(200); 
        cy.get("#categoria-gasto").select("alimentacion"); 
        cy.get("#aniadir-gasto").click(); 
    
        cy.get("#informePresupuesto-div")
          .should("contain", "alimentacion")
          .and("contain", "Presupuesto: 1000")
          .and("contain", "Gasto: 200")
          .and("contain", "Total: 800"); 
    });


  });
  