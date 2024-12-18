describe("Gastos, Ingresos - Control", () => {
    it("Muestra 3 gastos ingresados y muestra el total", () => {
      cy.visit("/");
      cy.get("#mostrar-form-btn").click(); 
      cy.get("#monto-gasto").type(100);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("1er gasto");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(20);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("2do gasto");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(350);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("3er gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#totalGastos-div").should('contain', '470');
    });

    it("Muestra 3 ingresos y muestra el total", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(10);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(30);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er gasto");
      cy.get("#aniadir-ingreso").click();

      cy.get("#totalIngresos-div").should('contain', '140');
    });
    it("Muestra el saldo actualizandoce", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("1er ingreso");
      cy.get("#aniadir-ingreso").click();
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(300);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("2do ingreso");
      cy.get("#aniadir-ingreso").click();
      cy.get("#mostrar-form-btn").click(); 
      cy.get("#monto-gasto").type(150);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("1er gasto");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(20);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("2do gasto");
      cy.get("#aniadir-gasto").click();

      cy.get("#saldo-div").should('contain', '230');
    });

    it("Muestra el mensaje 'Ojo te estas endeudando' cuando el saldo es negativo", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#fecha-ingreso").type("2024-10-30");
      cy.get("#nota-ingreso").type("Ingreso test");
      cy.get("#aniadir-ingreso").click();
      cy.get("#mostrar-form-btn").click(); 
      cy.get("#monto-gasto").type(300);
      cy.get("#fecha-gasto").type("2024-10-30");
      cy.get("#nota-gasto").type("Gasto test");
      cy.get("#aniadir-gasto").click();

      cy.get("#saldo-div").should('contain', 'Total: -200 Ojo te estas endeudando');
    });

    it("Selecciona un gasto y actualiza correctamente el saldo", () => {
      cy.visit("/");
  
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(1000);
      cy.get("#fecha-ingreso").type("2024-11-01");
      cy.get("#nota-ingreso").type("Ingreso inicial");
      cy.get("#aniadir-ingreso").click();
  
      // Registrar dos gastos
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-11-02");
      cy.get("#nota-gasto").type("Compra de oficina");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(300);
      cy.get("#fecha-gasto").type("2024-11-03");
      cy.get("#nota-gasto").type("Mantenimiento");
      cy.get("#aniadir-gasto").click();
      // Verificar saldo inicial
      cy.get("#saldo-div").should("contain", "500");
      cy.get("#lista-gastos-div button.select-gasto-btn[data-index='0']").click();

      // Verificar que los valores seleccionados están en el formulario
      //cy.get("#monto-gasto").should("have.value", "200");
      //cy.get("#fecha-gasto").should("have.value", "2024-11-02");
      //cy.get("#nota-gasto").should("have.value", "Compra de oficina");

      // Editar los valores
      //cy.get("#monto-gasto").clear().type(250);
      //cy.get("#fecha-gasto").clear().type("2024-11-05");
      //cy.get("#nota-gasto").clear().type("Compra ajustada");
      //cy.get("#aniadir-gasto").click();

      // Seleccionar el primer gasto y verificar detalles (si hay funcionalidad de selección)
      //cy.get("#lista-gastos-div button[data-index='0']").click();
      //cy.get("#lista-gastos-div").find("button.editar-gasto-btn[data-index='0']").click();
      //cy.get("#lista-gastos-div button.editar-gasto-btn[data-index='0']").click();
      cy.get("#gastos-div").should("contain", "200")
        .and("contain", "2024-11-02")
        .and("contain", "Compra de oficina");
  
      // Verificar que el saldo no cambia con la selección
      cy.get("#saldo-div").should("contain", "500");
    });

    it("Selecciona un ingreso y actualiza correctamente el saldo", ()=>{
      cy.visit("/");

      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(1000);
      cy.get("#fecha-ingreso").type("2024-11-01");
      cy.get("#nota-ingreso").type("Regalos");
      cy.get("#aniadir-ingreso").click();
  
      // Registrar dos gastos
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-11-02");
      cy.get("#nota-gasto").type("Compra de oficina");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(300);
      cy.get("#fecha-gasto").type("2024-11-03");
      cy.get("#nota-gasto").type("Mantenimiento");
      cy.get("#aniadir-gasto").click();
      // Verificar saldo inicial
      cy.get("#saldo-div").should("contain", "500");
      // Seleccionar el primer gasto y verificar detalles (si hay funcionalidad de selección)
      cy.get("#lista-ingresos-div button[data-index='0']").click();
      cy.get("#ingreso-div").should("contain", "1000")
        .and("contain", "2024-11-01")
        .and("contain", "Regalos");
        cy.get("#monto-ingreso").type(1000);
        cy.get("#fecha-ingreso").type("2024-11-01");
        cy.get("#nota-ingreso").type("Regalos");
      // Verificar que el saldo no cambia con la selección
      cy.get("#saldo-div").should("contain", "500");
    });
    it("Edita un gasto y actualiza correctamente el saldo", () => {
      cy.visit("/");
      // Registrar un ingreso inicial
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(1000);
      cy.get("#fecha-ingreso").type("2024-11-01");
      cy.get("#nota-ingreso").type("Ingreso inicial");
      cy.get("#aniadir-ingreso").click();
          // Registrar dos gastos
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-11-02");
      cy.get("#nota-gasto").type("Compra de oficina");
      cy.get("#aniadir-gasto").click();
  
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(150);
      cy.get("#fecha-gasto").type("2024-11-03");
      cy.get("#nota-gasto").type("Mantenimiento");
      cy.get("#aniadir-gasto").click();
      cy.get("#saldo-div").should("contain", "650"); 
  
      // Seleccionar y editar el primer gasto
      //cy.get("#lista-gastos-div button[data-index='0']").click();
      cy.get("#lista-gastos-div button.select-gasto-btn[data-index='0']").click();
      cy.get("#monto-gasto").clear().type(250); 
      cy.get("#fecha-gasto").clear().type("2024-11-05");
      cy.get("#nota-gasto").clear().type("Compra ajustada");
      cy.get("#aniadir-gasto").click();
      cy.get("#saldo-div").should("contain", "600"); 
    });
    it("Elimina un gasto ", () => { //y actualiza correctamente el saldo
      cy.visit("/");
    
      // Registrar dos gastos
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-11-02");
      cy.get("#nota-gasto").type("Compra de oficina");
      cy.get("#categoria-gasto").select("entretenimiento")
      cy.get("#aniadir-gasto").click();
    
      

      cy.get(".eliminar-gasto-btn").click();

      cy.get("#gastos-div").should("contain", "Gasto eliminado");

    });
    it("Elimina un gasto 2 veces", () => { //y actualiza correctamente el saldo
      cy.visit("/");
      // Registrar dos gastos
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(200);
      cy.get("#fecha-gasto").type("2024-11-02");
      cy.get("#nota-gasto").type("Compra de oficina");
      cy.get("#categoria-gasto").select("entretenimiento")
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(100);
      cy.get("#fecha-gasto").type("2004-11-02");
      cy.get("#nota-gasto").type("Compra de oficina xD");
      cy.get("#categoria-gasto").select("entretenimiento")
      cy.get("#aniadir-gasto").click();

      cy.get("#lista-gastos-div button.eliminar-gasto-btn[data-index='1']").click();

      cy.get("#gastos-div").should("contain", "Gasto eliminado");
      cy.get("#lista-gastos-div").should("not.contain", " Monto: 100, Fecha: 2004-11-02, Nota: Compra de oficina xD, Categoria: entretenimiento");
    });

    it("Selecciona un presupuesto y actualiza el formulario para editar", ()=>{
      cy.visit("/");

      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(1000);
      cy.get("#categoria-presupuesto").select("transporte");
      cy.get("#aniadir-presupuesto").click();
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(300);
      cy.get("#categoria-presupuesto").select("alimentacion");
      cy.get("#aniadir-presupuesto").click();

      cy.get("#totalPresupuesto-div button[data-index='0'].editar-presupuesto-btn").click();
      cy.get("#monto-presupuesto").should("have.value",1000);
      cy.get("#categoria-presupuesto").should("have.value","transporte");
      cy.get("#presupuesto-div").should("contain", "1000")
        .and("contain", "transporte");
    });
    it("Selecciona un presupuesto con una categoria personalizada y actualiza el formulario para editar", ()=>{
      cy.visit("/");

      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(1000);
      cy.get("#categoria-presupuesto").select("otros");
      cy.get("#categoria-gasto-personalizada").type("Libros");
      cy.get("#aniadir-presupuesto").click();
      cy.get("#mostrar-form-presupuesto").click();
      cy.get("#monto-presupuesto").type(300);
      cy.get("#categoria-presupuesto").select("alimentacion");
      cy.get("#aniadir-presupuesto").click();

      cy.get("#totalPresupuesto-div button[data-index='0'].editar-presupuesto-btn").click();
      cy.get("#monto-presupuesto").should("have.value",1000);
      cy.get("#categoria-presupuesto").should("have.value","otros");
      cy.get("#categoria-gasto-personalizada").should("have.value","Libros");
      cy.get("#presupuesto-div").should("contain", "1000")
        .and("contain", "Libros");
    });
    it("Selecciona un gasto con una categoria personalizada y actualiza el formulario para editar", ()=>{
      cy.visit("/");

      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(1000);
      cy.get("#categoria-gasto").select("otros");
      cy.get("#categoria-gastos").type("Libros");
      cy.get("#aniadir-gasto").click();
      cy.get("#mostrar-form-btn").click();
      cy.get("#monto-gasto").type(300);
      cy.get("#categoria-gasto").select("alimentacion");
      cy.get("#aniadir-gasto").click();
      cy.get("#lista-gastos-div button.select-gasto-btn[data-index='0']").click();
      //cy.get("#totalPresupuesto-div button[data-index='0'].editar-presupuesto-btn").click();
      cy.get("#monto-gasto").should("have.value",1000);
      cy.get("#categoria-gasto").should("have.value","otros");
      cy.get("#categoria-gastos").should("have.value","Libros");
      cy.get("#gastos-div").should("contain", "1000")
        .and("contain", "Libros");
    });
  });
  