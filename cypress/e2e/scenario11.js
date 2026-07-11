/// <reference types='cypress' />

it("Capture li which has text has Advanced", () => {
  cy.visit("/index14.html");
  cy.contains("li", "Advanced!");
});

it.only("Capture the top level parents", () => {
  cy.visit("/index14.html");
  cy.get("li").find(".label").parents("li");
});
