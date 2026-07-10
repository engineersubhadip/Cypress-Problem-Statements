/// <reference types="cypress" />

it("Verify the item list length, after deleting an item", () => {
  cy.visit("/index4.html");
  cy.get("#list > li").its("length").as("initialCount", { type: "static" });
  cy.get("#del").click();
  cy.get("@initialCount").then((iniCount) => {
    cy.get("#list > li").its("length").should("be.lessThan", iniCount);
  });
});
