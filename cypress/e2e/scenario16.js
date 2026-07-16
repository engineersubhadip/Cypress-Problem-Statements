/// <reference types='cypress'/>

it("How to convert yielded string to number and pass it along", () => {
  cy.visit("/index18.html");
  cy.get("#people")
    .invoke("text")
    .should("be.a", "string")
    .then(parseInt)
    .should("be.a", "number");
});
