///<reference types='cypress' />

it("Confirm input field value", () => {
  cy.visit("/index24.html");
  cy.get("#dynamic")
    .invoke("prop", "value")
    .should("be.a", "string")
    .and("have.length.at.least", 1)
    .then((val) => {
      console.log(val);
    });
});
