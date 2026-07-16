/// <reference types='cypress'/>

it("Find and click accordian with button", () => {
  cy.visit("/index22.html");
  cy.contains("div.panel", "I'm here").prev().click();
});
