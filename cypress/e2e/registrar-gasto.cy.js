describe("Registrar Gasto", () => {
  it("Muestra monto de gasto ingresado", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(4);
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4");
  });

  it("Muestra monto de gasto ingresado y fecha", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(4);
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4").and("contain", "2024-10-19");
  });

  it("Muestra monto de gasto ingresado,fecha y nota", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(4);
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#nota-gasto").type("Gasto en comida");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "4").and("contain", "2024-10-19").and("contain", "Gasto en comida");
  });

  it("Muestra mensaje de 'MONTO VACIO!!!' si se ingresa fecha pero no el monto", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#fecha-gasto").type("2024-10-19");
    cy.get("#monto-gasto").clear();
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "MONTO VACIO!!!");
  });

  it("Muestra la fecha actual en caso de solo ingresar el monto de gasto y nota", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const day = String(today.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`;
  
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(5);
    cy.get("#fecha-gasto").clear();
    cy.get("#nota-gasto").type("Gasto en transporte");
    cy.get("#aniadir-gasto").click();
  
    // Asegurarse que el contenido del div haya cambiado antes de hacer las afirmaciones
    cy.get("#gastos-div").should("contain", "5")
      .and("contain", fechaActual)
      .and("contain", "Gasto en transporte");
  });
  
  it("Muestra mensaje de 'No hay notas disponibles' caso de solo ingresar el monto de gasto y la fecha", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(5);
    cy.get("#fecha-gasto").type("2024-10-14");
    cy.get("#nota-gasto").clear();
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "5").and("contain", "2024-10-14").and("contain", "No hay notas disponibles");
  });

  it("Si registra un gasto pero hace click en cancelar, cierra el formulario y sube al primer punto", () => {
    cy.visit("/"); 
    cy.get("#mostrar-form-btn").click(); 
    cy.get("#monto-gasto").type(200); 
    cy.get("#fecha-gasto").type("2024-11-16"); 
    cy.get("#nota-gasto").type("Prueba de cancelar"); 
    cy.get("#cancelar-gasto").click(); 

    cy.get("#gastos-form").should("not.be.visible"); 
    cy.get("#gastos-div").should("not.be.visible"); 
    cy.get("h2").should("contain", "Saldo").and("be.visible");
  });
  it("Muestra monto ingresada y categoria seleccionada del gasto", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(50);
    cy.get("#categoria-gasto").select("alimentacion");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "50").and("contain", "alimentacion");
  });
  it("Muestra monto ingresada y categoria 'ninguno'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(100);
    cy.get("#categoria-gasto").select("ninguno");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "100").and("contain", "ninguno");
  });
  it("Muestra monto ingresada y categoria personalizada por seleccionar 'otros'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(100);
    cy.get("#categoria-gasto").select("otros");
    cy.get("#categoria-gastos").type("universidad");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "100").and("contain", "universidad");
  });
  it("Si no se añade categoria personalizada aparece mensaje de 'CATEGORIA VACIA!'", () => {
    cy.visit("/");
    cy.get("#mostrar-form-btn").click();
    cy.get("#monto-gasto").type(100);
    cy.get("#categoria-gasto").select("otros");
    cy.get("#aniadir-gasto").click();
    cy.get("#gastos-div").should("contain", "CATEGORIA VACIA!!!");
  });
});
