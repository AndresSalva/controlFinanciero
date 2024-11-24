describe("Registrar Ingreso", () => {
    it("Muestra monto de ingreso ingresado", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(8);
      //cy.get("#ingreso-form").should("be.visible");
      //cy.get("#categoria-ingreso").should("be.visible").select("ninguno");
      cy.get("#categoria-ingreso").select("ninguno");
      //cy.get("#categoria-ingreso-personalizado");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "Monto: 8").and("contain","ninguno");
    });
    it("Muestra monto de ingreso ingresado y fecha", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(4);
      cy.get("#fecha-ingreso").type("2024-10-19");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "4").and("contain", "2024-10-19");
    });
    it("Muestra mensaje de 'MONTO VACIO!!!' si se ingresa fecha pero no el monto", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#fecha-ingreso").type("2024-10-19");
      cy.get("#monto-ingreso").clear();
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "MONTO VACIO!!!");
    });
    it("Muestra monto de ingreso ingresado, fecha y nota", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
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
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(5);
      cy.get("#fecha-ingreso").clear();
      cy.get("#nota-ingreso").type("Salario");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "5").and("contain", fechaActual).and("contain", "Salario");
    });
    it("Muestra mensaje de 'No hay notas disponibles' caso de solo ingresar el monto de gasto y la fecha", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(5);
      cy.get("#fecha-ingreso").type("2024-10-14");
      cy.get("#nota-ingreso").clear();
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "5").and("contain", "2024-10-14").and("contain", "No hay notas disponibles");
    });
    it("Si registra un ingreso pero hace click en cancelar, cierra el formulario y sube al primer punto", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(500);
      cy.get("#fecha-ingreso").type("2024-11-16");
      cy.get("#nota-ingreso").type("Prueba de cancelar");
      cy.get("#cancelar").click();
      cy.get("#ingreso-form").should("not.be.visible"); 
      cy.get("#ingreso-div").should("not.be.visible"); 
      cy.get("h2").should("contain", "Saldo").and("be.visible");
    });

    it("Muestra monto ingresada y categoria seleccionada del ingreso", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#categoria-ingreso").select("salario");
      cy.get("#fecha-ingreso").type("2024-11-16");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "100").and("contain", "salario");
    });

    it("Muestra monto ingresada y categoria 'ninguno'", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#categoria-ingreso").select("ninguno");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "100").and("contain", "ninguno");
    });
    it("Muestra monto ingresada y categoria personalizada por seleccionar 'otros'", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#categoria-ingreso").select("otros");
      cy.get("#categoria-ingreso-personalizada").type("universidad");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "100").and("contain", "universidad");
    });
    
    it("Si no se añade categoria personalizada aparece mensaje de 'CATEGORIA VACIA!'", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(100);
      cy.get("#categoria-ingreso").select("otros");
      cy.get("#aniadir-ingreso").click();
      cy.get("#ingreso-div").should("contain", "CATEGORIA VACIA!!!");
    });
    /*
    it("Si registra un ingreso pero hace click en cancelar Restablece los valores del formulario y desplaza la vista hacia el saldo", () => {
      cy.visit("/");
      cy.get("#mostrar-form-ingreso").click();
      cy.get("#monto-ingreso").type(500);
      cy.get("#fecha-ingreso").type("2024-11-16");
      cy.get("#nota-ingreso").type("Prueba de cancelar");
      cy.get("#cancelar").click();
      cy.get("#monto-ingreso").clear();
      cy.get("#fecha-ingreso").clear();
      cy.get("#nota-ingreso").clear();
      cy.get("h2").should("contain", "Saldo").and("be.visible");
    });*/
  });