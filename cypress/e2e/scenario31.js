/// <reference types = 'cypress' />

it('Interacting with form fields : Approach 1', () => {
	cy.visit('https://practice-automation.com/form-fields/');
	cy.get('#email').type('test@test.com', { scrollBehavior: 'center' });
});

it(
	'Interacting with form fields : Approach 2',
	{
		scrollBehavior: 'center',
	},
	() => {
		cy.visit('https://practice-automation.com/form-fields/');
		cy.get('#email').type('test@test.com');
	},
);
