/// <reference types='cypress'/>

it("Lets capture all the input fields value and return it as on object", () => {
  cy.visit("/index12.html");
  const finalResult = [];
  cy.get("form input")
    .each(($ele, index, list) => {
      return cy
        .wrap($ele)
        .should("exist")
        .invoke("attr", "value")
        .and("have.length.at.least", 1) // make sure the attribute value is not empty
        .then((currentValue) => {
          finalResult.push(currentValue);
        });
    })
    .then(() => {
      console.log(finalResult);
    });
});
