/// <reference types='cypress'/>

it("Verify the button class gets changed, once we click on it", () => {
  cy.visit("/index11.html");
  cy.get("#clickme").then(($btn) => {
    const currentClass = $btn.attr("class");
    cy.wrap($btn).click().should("not.have.class", currentClass);
  });
});
