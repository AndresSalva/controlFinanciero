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
    it("Muestra un presupuesto y un gasto en el informe con categoria personalizada", () => {
        cy.visit("/"); 
    
        cy.get("#mostrar-form-presupuesto").click();
        cy.get("#monto-presupuesto").type(100);
        cy.get("#categoria-presupuesto").select("otros");
        cy.get("#categoria-gasto-personalizada").type("universidad");
        cy.get("#aniadir-presupuesto").click();
    
        cy.get("#informePresupuesto-div")
          .should("contain", "universidad")
          .and("contain", "Presupuesto: 100")
          .and("contain", "Gasto: 0")
          .and("contain", "Total: 100");
    
        cy.get("#mostrar-form-btn").click();
        cy.get("#monto-gasto").type(10);
        cy.get("#categoria-gasto").select("otros");
        cy.get("#categoria-gastos").type("universidad");
        cy.get("#aniadir-gasto").click(); 
    
        cy.get("#informePresupuesto-div")
          .should("contain", "universidad")
          .and("contain", "Presupuesto: 100")
          .and("contain", "Gasto: 10")
          .and("contain", "Total: 90"); 
    });


  });
  