///<reference types='cypress'/>

it("Validate count of clicks", () => {
  cy.visit("/index21.html");
  var refCount = 0;
  cy.get("ul li button").each((currButton) => {
    cy.wrap(currButton).should("be.visible").and("not.be.disabled");
    cy.wrap(currButton)
      .click()
      .then(() => {
        refCount += 1;
        cy.get("#count")
          .invoke("text")
          .should("be.a", "string")
          .then(parseInt)
          .and("eql", refCount);
      });
  });
});
