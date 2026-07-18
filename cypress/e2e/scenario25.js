/// <reference types = 'cypress'/>

it('Capture Sort by Discounted price', () => {
	cy.visit('/index27.html');
	let finalArrayPrice = [];
	cy.get('#fruits > li .price')
		.each((currPrice, index) => {
			if (index == 0) {
				finalArrayPrice = [];
			}
			const currChildLength = currPrice[0].childNodes.length;
			if (currChildLength == 1) {
				const runPrice = currPrice[0].childNodes[0].textContent.trim();
				finalArrayPrice.push(runPrice);
			} else {
				const runPrice = currPrice[0].childNodes[2].textContent.trim();
				finalArrayPrice.push(runPrice);
			}
		})
		.should(() => {
			const priceArr = finalArrayPrice.map((ele) => {
				return Number(ele.split('$')[1]);
			});
			const sortedArr = structuredClone(priceArr);
			sortedArr.sort((a, b) => a - b);
			expect(priceArr).to.deep.equal(sortedArr);
		});
});
