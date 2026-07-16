/// <reference types='cypress' />

it("Capture the text of the parent", () => {
  cy.visit("/index25.html");
  cy.get("#make")
    .should("be.visible")
    .then((parent) => {
      const targetText = parent[0].childNodes[0].textContent.trim();
      console.log(targetText);
    });
});
