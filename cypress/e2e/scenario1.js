/// <reference types="cypress" />

describe("Test Suite", () => {
  it("Verify text change", () => {
    cy.visit("/index1.html");
    cy.get("#output").invoke("text").as("originalText", { type: "static" });
    cy.get("#change").click();
    cy.get("@originalText").then((text) => {
      cy.get("#output").invoke("text").should("not.equal", text);
    });
  });
});
