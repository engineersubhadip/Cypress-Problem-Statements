/// <reference types='cypress'/>

it("Confirm text presence : Approach 1", () => {
  cy.visit("/index26.html");
  cy.get("#current-date")
    .invoke("text")
    .should("be.a", "string")
    .and("have.length.at.least", 1)
    .as("refData", { type: "static" });

  cy.get("#message")
    .should("be.visible")
    .then((parent) => {
      const targetText = parent[0].childNodes[1].textContent.trim();
      cy.get("@refData").then((refData) => {
        expect(refData).to.eql(targetText);
      });
    });
});

it.only("Confirm text presence : Approach 2", () => {
  cy.visit("/index26.html");
  cy.get("#current-date")
    .invoke("text")
    .should("be.a", "string")
    .and("have.length.at.least", 1)
    .as("refData", { type: "static" });

  cy.get("#message")
    .should("be.visible")
    .then((parent) => {
      const expectedText = parent.children(".note")[0].textContent.trim();
      cy.get("@refData").then((refData) => {
        expect(refData).to.eql(expectedText);
      });
    });
});
