/// <reference types="cypress" />

describe("Test Suite", () => {
  it("Verify text change : Approach 1", () => {
    cy.visit("/index1.html");
    cy.get("#output")
      .invoke("text")
      .then((currentText) => {
        cy.get("#change").click();
        cy.get("#output").invoke("text").should("not.equal", currentText);
      });
  });

  it.only("Verify text change : Approach 2", () => {
    cy.visit("/index1.html");
    cy.get("#output").invoke("text").as("oldText", { type: "static" });
    cy.get("#change").click();
    cy.get("@oldText").then((oldText) => {
      cy.get("#output").invoke("text").should("not.equal", oldText);
    });
  });
});
