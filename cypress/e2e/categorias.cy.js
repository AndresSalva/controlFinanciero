describe("mostrar categorias", () => {
    it("Muestra categoria gastos", () => {
      cy.visit("/");
      cy.get("#ver-categorias-btn").click();
      cy.get("#gastos-btn").click();
      cy.get('#imgGastos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    });
    it("Muestra categoria ingresos", () => {
        cy.visit("/");
        cy.get("#ver-categorias-btn").click();
        cy.get("#ingresos-btn").click();
        cy.get('#imgIngresos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    });
    it("Muestra categorias presionando ver categorias", () => {
      cy.visit("/");
      cy.get("#ver-categorias-btn").click();
      cy.get("#gastos-btn").click();
      cy.get('#imgGastos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
      cy.get("#ingresos-btn").click();
      cy.get('#imgIngresos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
  });
  });