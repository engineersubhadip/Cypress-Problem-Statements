/// <reference types="cypress" />

describe("Test Suite", () => {
  it("Verify text change", () => {
    cy.visit("/index1.html");
    cy.get("#output")
      .invoke("text")
      .then((currentText) => {
        cy.get("#change").click();
        cy.get("#output").invoke("text").should("not.equal", currentText);
      });
  });
});
