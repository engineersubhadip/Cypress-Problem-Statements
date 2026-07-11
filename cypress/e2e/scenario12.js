/// <reference types='cypress' />

it("Check if the image has fully loaded in the UI", () => {
  cy.visit("/index16.html");
  // Make sure the image has been fully loaded in the UI
  cy.get("#loads").invoke("prop", "naturalWidth").should("be.greaterThan", 0);
});
