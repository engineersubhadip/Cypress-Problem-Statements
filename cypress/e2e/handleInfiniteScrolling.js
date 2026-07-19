/// <reference types = 'cypress' />

let resultFromAPI = [];
let resultFromUI = [];
let currCounter = 0;

function fetchDataFromAPI(data) {
	for (let i = 0; i < data.length; i++) {
		const currQuote = data[i].quote;
		resultFromAPI.push(currQuote);
	}
}

function fetchDataFromUI() {
	if (currCounter > 0 && currCounter % 10 == 0) {
		return;
	}
	cy.get('.quotes .quote')
		.eq(currCounter)
		.and((currRow) => {
			if (currRow.length == 0) {
				return;
			} else {
				const currQuote = currRow[0].childNodes[2].textContent.trim();
				expect(currQuote).to.not.eql(undefined);
				expect(currQuote).to.have.length.above(0);
				resultFromUI.push(currQuote);
				currCounter += 1;
			}
		})
		.then(() => fetchDataFromUI());
}

it('How to handle infinite scrolling', () => {
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
	fetchDataFromUI();
});
