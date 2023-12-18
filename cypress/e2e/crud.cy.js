

describe("CRUD TEST", () => {

    const URL = 'http://localhost:8080/'

    before(() => {
        cy.visit(URL);
    })

    it("Show a list of teams", () => {
      cy.visit(URL);
      // la lista de equipos tiene al menos un elemento
      cy.get('.teams-container section ul li').should('have.length.greaterThan', 0);
      // tiene un link a details-team
      cy.get('.teams-container section ul li a[href^="/details-team/"]').should('exist');
    })

    it("Show a team", () => {
      cy.visit(URL);
      // el primer equipo de la lista tiene un link a details-team
      cy.get('.teams-container section ul li a[href^="/details-team/"]').first().click();
      cy.url().should('include', '/details-team/');

      cy.get('h1').should('contain', 'Details Team');
      cy.get('h2').should('contain', 'Arsenal FC');
      cy.get('.button-container').should('exist');
      cy.get('.button-container .edit-button').should('exist');
      cy.get('.button-container .delete-button').should('exist');
      cy.get('.button-container .edit-button').click();
    })

    it("Edit a team", () => {
      cy.visit(URL);

      cy.get('.teams-container section ul li a[href^="/update-team/"]').first().click();
      cy.url().should('include', '/update-team/');

      cy.get('h1').should('contain', 'Edit Team');
      cy.get('h2').should('contain', 'Arsenal FC');
      cy.get('form input[name="name"]').should('have.value', 'Arsenal FC');
      cy.get('form input[name="country"]').should('have.value', 'England');
      cy.get('form input[name="founded"]').should('have.value', 1886);
      cy.get('form button[type="submit"]').should('exist');
      cy.url().should('include', URL);
    })

    it("Delete a team", () => {
      cy.visit(URL);

      cy.get('.teams-container section ul li a[href^="/delete-team/"]').first().click();
      cy.url().should('include', '/delete-team/');

      cy.get('h1').should('contain', 'Delete Arsenal FC');
      cy.get('p').should('contain', 'Do you want to delete');
      cy.get('form button[type="submit"]').should('exist');
      cy.get('form button[type="submit"]').click();
      cy.url().should('include', URL);
    })

});