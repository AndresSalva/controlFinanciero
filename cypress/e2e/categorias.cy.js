describe("mostrar categorias", () => {
    it("Muestra categoria gastos", () => {
      cy.visit("/");
      cy.get("#gastos-btn").click();
      cy.get('#imgGastos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    });
    it("Muestra categoria ingresos", () => {
        cy.visit("/");
        cy.get("#ingresos-btn").click();
        cy.get('#imgIngresos').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0)
    });
  });