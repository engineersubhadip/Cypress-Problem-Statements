/// <reference types = 'cypress' />

it('Element hides', () => {
	cy.visit('/index28.html');
	cy.get('#away').should('be.visible').click();
	cy.get('#away').should('have.class', 'half');
	cy.get('#away').should('not.exist');
});
