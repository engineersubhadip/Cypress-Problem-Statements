/// <reference types='cypress'/>

it("Find and click accordian with button : Approach 1", () => {
  cy.visit("/index22.html");
  //   cy.get("div.panel:has(button)").prev().click();
  cy.get("div.panel").each((currEle, index) => {
    const status = currEle.find("button").length > 0;
    if (status) {
      cy.wrap(currEle).prev().click();
      return false;
    }
  });
});

it("Find and click accordian with button : Approach 2", () => {
  cy.visit("/index22.html");
  cy.get("div.panel").find("button:contains('here')").parent().prev().click();
});

it.only("Find and click accordian with button : Approach 3 [Best Approach]", () => {
  cy.visit("/index22.html");
  cy.get("div.panel:has(button)").prev().click();
});
