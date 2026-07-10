/// <reference types="cypress" />

it("Verifying list item increased by 1", () => {
  cy.visit("/index3.html");
  cy.get("#list > li").its("length").as("currentLength", { type: "static" });
  cy.get("#add").click();
  cy.get("@currentLength").then((oldLength) => {
    cy.get("#list > li").its("length").should("be.greaterThan", oldLength);
  });
});
