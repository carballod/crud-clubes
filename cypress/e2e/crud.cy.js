

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

      cy.get('.h1-detailsTeam').should('contain', 'Details Team');
      cy.get('.h2-detailsTeam').should('contain', 'Arsenal FC');
      cy.get('.button-container').should('exist');
      cy.get('.button-container .edit-button').should('exist');
      cy.get('.button-container .delete-button').should('exist');
      cy.get('.button-container .edit-button').click();
    })

    it("Edit a team", () => {
      cy.visit(URL);

      cy.get('.teams-container section ul li a[href^="/update-team/"]').first().click();
      cy.url().should('include', '/update-team/');

      cy.get('.h1-update').should('contain', 'Edit Team');
      cy.get('.h2-update').should('contain', 'Arsenal FC');
      cy.get('.form-input-name').should('have.value', 'Arsenal FC');
      cy.get('.form-input-country').should('have.value', 'England');
      cy.get('.form-input-founded').should('have.value', 1886);
      cy.get('.form-btn-save').should('exist');
      cy.url().should('include', URL);
    })

    it("Create a new team", () => {
      cy.visit(URL);

      cy.get('.teams-container .create-button').first().click();

      cy.get('.form-input-name').type('New Team');
      cy.get('.form-input-country').type('Country');
      cy.get('.form-input-shortName').type('NT');
      cy.get('.form-input-tla').type('NTLA');
      cy.fixture('../../public/uploads/images/Escudo_del_C_A_River_Plate.svg.png', 'base64').then((fileContent) => {
        const blob = Cypress.Blob.base64StringToBlob(fileContent);
        const file = new File([blob], 'Escudo_del_C_A_River_Plate.svg.png', { type: 'image/png' });

        cy.get('.form-input-image').then((input) => {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          input[0].files = dataTransfer.files;
          cy.wrap(input).trigger('change', { force: true });
        });
      });
      cy.get('.form-input-address').type('Address');
      cy.get('.form-input-phone').type('123456789');
      cy.get('.form-input-website').type('http://www.newteam.com');
      cy.get('.form-input-email').type('newteam@example.com');
      cy.get('.form-input-founded').type('2000');
      cy.get('.form-input-clubColors').type('Blue, White');
      cy.get('.form-input-venue').type('New Stadium');
      cy.get('.form-btn-create').click();
    });

    it("Delete a team", () => {
      cy.visit(URL);

      cy.get('.teams-container section ul li').its('length').then((initialLength) => {
        cy.get('.teams-container section ul li a[href^="/delete-team/"]').last().click();
        cy.url().should('include', '/delete-team/');

        cy.get('.h1-delete').should('contain', 'Delete');
        cy.get('.delete-button').should('exist');
        cy.get('.delete-button').click();

        cy.get('.teams-container section ul li').should('have.length', initialLength - 1);
        
    });

    })

});