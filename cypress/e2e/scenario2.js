/// <reference types="cypress" />

it("Validate the number gets incremented by 1", () => {
  cy.visit("/index2.html");
  cy.get("#count").invoke("text").as("oldVal", { type: "static" });
  cy.get("#add").click();
  cy.get("@oldVal").then((oldVal) => {
    cy.get("#count").invoke("text").should("not.equal", oldVal);
    cy.get("#count")
      .invoke("text")
      .should((currNum) => {
        const oldNumber = Number(oldVal);
        const newNumber = Number(currNum);
        expect(newNumber).to.be.greaterThan(oldNumber);
        expect(newNumber).to.be.equal(oldNumber + 1);
      });
  });
});

it.only("Validate the number gets incremented by 1", () => {
  cy.visit("/index2.html");
  cy.get("#count").invoke("text").as("oldVal", { type: "static" });
  cy.get("#add-x").click();
  cy.get("@oldVal").then((oldVal) => {
    cy.get("#count").invoke("text").should("not.equal", oldVal);
    cy.get("#count")
      .invoke("text")
      .should((currNum) => {
        const oldNumber = Number(oldVal);
        const newNumber = Number(currNum);
        const diff = newNumber - oldNumber;
        expect(newNumber).to.be.greaterThan(oldNumber);
        expect(newNumber).to.be.equal(oldNumber + diff);
      });
  });
});
