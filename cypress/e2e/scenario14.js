/// <reference types="cypress" />

it("How to handle infinite scrolling", () => {
  cy.visit("/index16.html");

  const arr1 = ["apples", "pears", "oranges", "kiwi", "watermelon"];
  cy.wrap(arr1).should("deep.equal", [
    "apples",
    "pears",
    "oranges",
    "kiwi",
    "watermelon",
  ]);
});
