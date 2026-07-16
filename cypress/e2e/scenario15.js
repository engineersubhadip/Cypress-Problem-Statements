/// <reference types='cypress'/>

it("Validate multiplication value", () => {
  cy.visit("/index17.html");
  cy.get("#op1")
    .should("be.visible")
    .invoke("text")
    .as("op1", { type: "static" });
  cy.get("#op2")
    .should("be.visible")
    .invoke("text")
    .as("op2", { type: "static" });
  cy.get("#result")
    .should("be.visible")
    .invoke("text")
    .as("result", { type: "static" });

  cy.get("@op1").then((op1) => {
    cy.get("@op2").then((op2) => {
      cy.get("@result").then((result) => {
        expect(op1 * op2).to.eql(Number(result));
      });
    });
  });
});
