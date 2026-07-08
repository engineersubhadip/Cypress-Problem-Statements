/// <reference types="cypress" />

describe("Test Suite", () => {
<<<<<<< HEAD
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
=======
  it("Verify text change", () => {
    cy.visit("/index1.html");
    cy.get("#output").invoke("text").as("originalText", { type: "static" });
    cy.get("#change").click();
    cy.get("@originalText").then((text) => {
      cy.get("#output").invoke("text").should("not.equal", text);
>>>>>>> 0eecfceff0ddc03414a118f481fe3fdb46bddda8
    });
  });
});
