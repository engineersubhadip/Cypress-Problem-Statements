/// <reference types='cypress' />

it("Capture the text of the parent : Approach 1", () => {
  cy.visit("/index25.html");
  cy.get("#make")
    .should("be.visible")
    .then((parent) => {
      const targetText = parent[0].childNodes[0].textContent.trim();
      console.log(targetText);
    });
});

it.only("Capture the text of the parent : Approach 2", () => {
  cy.visit("/index25.html");
  cy.get("#make")
    .should("be.visible")
    .then((parent) => {
      let clonedParent = parent.clone();
      clonedParent.children().remove();
      const parentText = clonedParent.text().trim();
      console.log(parentText);
    });
});
