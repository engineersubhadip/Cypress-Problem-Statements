/// <reference types = 'cypress' />

let resultFromAPI = [];
let resultFromUI = [];
let currCounter = 0;

function fetchDataFromAPI(data) {
	for (let i = 0; i < data.length; i++) {
		const currQuote = data[i].quote.trim();
		resultFromAPI.push(currQuote);
	}
}

function fetchDataFromUI(runCount) {
	if (runCount > 9) {
		return;
	}
	cy.get('.quotes .quote')
		.eq(currCounter)
		.and((currRow) => {
			if (currRow.length == 0) {
				return;
			}
			const currQuote = currRow[0].childNodes[2].textContent.trim();
			expect(currQuote).to.not.eql(undefined);
			expect(currQuote).to.have.length.above(0);
			resultFromUI.push(currQuote);
			currCounter += 1;
		})
		.then(() => fetchDataFromUI(runCount + 1));
}

function interactWithInfiniteLoadingTable() {
	cy.intercept('GET', '**/v1/quotes/*').as('targetAPI');
	cy.window().scrollTo('bottom');
	cy.get('.loader').should('be.visible');
	cy.get('.loader').should('not.be.visible');
	cy.wait('@targetAPI')
		.should((interception) => {
			expect(interception.response.statusCode).to.eql(200);
		})
		.then((interception) => {
			const currentResponseLength = interception.response.body.data.length;
			if (currentResponseLength < 10) {
				// * Now we are good to fetch data from API
				fetchDataFromAPI(interception.response.body.data);
				// * Now we are good to fetch data from UI
				fetchDataFromUI(0);
			} else {
				expect(interception.response.body.data.length).to.eql(10);
				// * Now we are good to fetch data from API
				fetchDataFromAPI(interception.response.body.data);
				// * Now we are good to fetch data from UI
				fetchDataFromUI(0);
				interactWithInfiniteLoadingTable();
			}
		});
}

it('How to handle infinite scrolling', () => {
	// * On landing behaviour
	cy.intercept('GET', '**/v1/quotes/*').as('quoteAPI');
	cy.visit('/InfiniteScrolling.html');
	cy.get('.loader').should('be.visible');
	cy.get('.loader').should('not.be.visible');
	cy.wait('@quoteAPI').should((interception) => {
		expect(interception.response.statusCode).to.eql(200);
		expect(interception.response.body.data.length).to.eql(10);
		// * Now we are good to fetch data from API
		fetchDataFromAPI(interception.response.body.data);
	});
	// * Now we are good to fetch data from the UI
	fetchDataFromUI(0);

	// * Now we need to recursively do the above behaviours
	interactWithInfiniteLoadingTable();

	cy.wrap(resultFromAPI).should('deep.equal', resultFromUI);
});
