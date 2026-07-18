/// <reference types = 'cypress' />

it('Table iteration', () => {
	cy.visit('/index30.html');
	let totalCount = 0;

	cy.get('tbody tr button')
		.each((currBtn) => {
			cy.wrap(currBtn).click();
			cy.wrap(currBtn)
				.parent('td')
				.next()
				.invoke('text')
				.should('not.be.empty')
				.then(parseInt)
				.then((currEle) => {
					totalCount += currEle;
				});
		})
		.should(() => {
			expect(totalCount).to.eql(18);
		});
});
