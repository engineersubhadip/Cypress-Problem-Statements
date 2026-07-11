/// <reference types='cypress' />

it("Capture li which has text has Advanced", () => {
  cy.visit("/index14.html");
  cy.contains("li", "Advanced!");
});

it("Capture the top level parents", () => {
  cy.visit("/index14.html");
  cy.get("li").find(".label").parents("li");
});

it.only("Capture li which has warning tags", () => {
  cy.visit("/index15.html");
  cy.get("li").find(".badge.warning").parents("li");
});
