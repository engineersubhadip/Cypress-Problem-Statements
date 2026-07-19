/// <reference types = 'cypress' />

it('Calculate California prices', () => {
	cy.visit('/index31.html');
	let totalSum = 0;
	cy.get('tbody')
		.find('tr:contains(CA)')
		.find('td:last-child')
		.each((currEle) => {
			cy.wrap(currEle)
				.invoke('text')
				.should('have.length.at.least', 1)
				.then((currPrice) => {
					const finalPrice = Number(
						currPrice.trim().split(' ')[1].split('$')[1],
					);
					totalSum += finalPrice;
				});
		})
		.then(() => {
			cy.log('Total Price -> ', totalSum);
		});
});
