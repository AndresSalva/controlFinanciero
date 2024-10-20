describe("mostrar categorias", () => {
    it("Muestra categoria gastos", () => {
      cy.visit("/");
      cy.get("#gastos-btn").click();
      cy.get('#imgGastos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    });
    
  });