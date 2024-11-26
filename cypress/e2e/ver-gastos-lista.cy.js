describe("Ver Gastos", () => {
    it("Muestra un gasto ingresado en la lista", () => {
      cy.visit("/");
      cy.get("#mostrar-form-btn").click(); 
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto en comida");
      cy.get("#aniadir-gasto").click();
      cy.get("#lista-gastos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Gasto en comida");
    });
    it("Muestra dos o mas gastos ingresados en la lista", () => {
      cy.visit("/");
      cy.get("#mostrar-form-btn").click(); 
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto en comida");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      //cy.get("#monto-gasto").clear();
      //cy.get("#fecha-gasto").clear();
      //cy.get("#nota-gasto").clear();
      cy.get("#monto-gasto").type(20);
      cy.get("#fecha-gasto").type("2024-10-27");
      cy.get("#nota-gasto").type("Salud");
      cy.get("#aniadir-gasto").click();
      cy.get("#lista-gastos-div").should("contain", "200").and("contain", "2024-10-30").and("contain", "Gasto en comida");
      cy.get("#lista-gastos-div").should("contain", "20").and("contain", "2024-10-27").and("contain", "Salud");
    });
    /*
    it("Edita un gasto existente", () => {
      cy.visit("/");
  
      // Agregar un gasto inicial
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(100);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto original");
      cy.get("#aniadir-gasto").click();
  
      // Seleccionar el botón de editar
      cy.get(".editar-gasto-btn").first().click();
  
      // Editar los datos del gasto
      cy.get("#monto-gasto").clear().type(150);
      cy.get("#fecha-gasto").clear().type("2024-11-01");
      cy.get("#nota-gasto").clear().type("Gasto editado");
      cy.get("#aniadir-gasto").click();
  
      // Verificar que los cambios se reflejen en la lista
      cy.get("#lista-gastos-div")
        .should("contain", "150")
        .and("contain", "2024-11-01")
        .and("contain", "Gasto editado");
    });
    it("Elimina un gasto existente", () => {
      cy.visit("/");
  
      // Agregar un gasto inicial
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto a eliminar");
      cy.get("#aniadir-gasto").click();
  
      // Seleccionar el botón de eliminar
      cy.get(".eliminar-gasto-btn").first().click();
  
      // Confirmar eliminación
      cy.on("window:confirm", () => true);
  
      // Verificar que el gasto haya sido eliminado
      cy.get("#lista-gastos-div").should("not.contain", "200").and("not.contain", "Gasto a eliminar");
    });*/
  });
  