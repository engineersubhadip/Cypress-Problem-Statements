/// <reference types = 'cypress' />

it('How to work with input fields', () => {
	cy.visit('/index29.html');
	cy.get('#answer')
		.should('have.attr', 'value')
		.then((initialValue) => {
			cy.get('#answer').invoke('val').should('not.eql', initialValue);
		});
	cy.get('#answer').clear().type(42).should('have.value', 42);
});
