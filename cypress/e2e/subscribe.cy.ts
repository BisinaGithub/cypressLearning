describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.visit('http://localhost:3000');
      });
    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').
            type("vinicius.bisinoto@graodireto.com.br");
        cy.getByData('submit-button')
            .click();
        cy.getByData('success-message')
            .should('exist')
            .contains('has been successfully subscribed');
    });
    it('does NOT allow an invalid email address', () => {
        cy.getByData('email-input').type('bisina');
        cy.getByData('submit-button').click();
        cy.getByData('success-message').should('not.exist');
    });
    it('does NOT allow already subscribbed emails', () => {
        cy.getByData('email-input').type('john@example.com');
        cy.getByData('submit-button').click();
        cy.getByData('success-message').should('not.exist');
        cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different');
    });
});