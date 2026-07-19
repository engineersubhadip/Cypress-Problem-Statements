/// <reference types = 'cypress' />

it('Validate elements with data attribute has href attribute as well', () => {
	cy.visit('/index32.html');
	cy.get('ul li').each((currRow) => {
		console.log(currRow[0].getAttributeNames().includes('data'));
	});
	// cy.get('ul li[data-price]');
});
