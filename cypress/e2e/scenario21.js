/// <reference types='cypress' />

it("Confirm text", () => {
  cy.visit("/index23.html");
  cy.get("#current-date")
    .invoke("text")
    .should("be.a", "string")
    .then((currentText) => {
      cy.get("#message").should((ele) => {
        const targetText = ele[0].childNodes[1].textContent.trim();
        expect(targetText).to.eql(currentText);
      });
    });
});
