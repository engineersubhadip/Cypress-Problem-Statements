/// <reference types="cypress" />

it("Handle checkbox toogle", () => {
  cy.visit("/index7.html");
  cy.get("#done")
    .invoke("prop", "checked")
    .then((iniState) => {
      if (iniState === true) {
        cy.wait(1500);
        cy.get("#done").uncheck();
      } else {
        cy.wait(1500);
        cy.get("#done").check();
      }
    });
});

it("Click on the button, only if its visible", () => {
  cy.visit("/index8.html");
  //   * Approach 1 : Using the parent child selection [Best approach] :-
  cy.get("#output").then((parent) => {
    const status = parent.find("button").length > 0;
    if (status) {
      cy.wait(500);
      cy.wrap(parent).find("button").click();
    }
  });
  //   * Approach 2 : Directly targeting the child element, without parent's help
  cy.contains("button", "Click Me")
    .should(() => {})
    .then((parent) => {
      if (parent.length > 0) {
        cy.wrap(parent).click();
      }
    });
});

it.only("Click on the button if its not disabled", () => {
  cy.visit("/index9.html");
  cy.get("#btn").then((button) => {
    cy.wrap(button)
      .invoke("prop", "disabled")
      .then((status) => {
        if (status === true) {
          console.log("Button is disabled");
        } else {
          cy.wrap(button).click();
        }
      });
  });
});
