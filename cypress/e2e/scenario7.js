/// <reference types="cypress" />

it("Click on a random element", () => {
  cy.visit("/index10.html");
  cy.get("#items").find("li").eq(2).should("be.visible").click();
});
