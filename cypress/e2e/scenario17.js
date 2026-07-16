/// <reference types='cypress' />

it("Lets validate the presence of an element in a list", () => {
  cy.visit("/index19.html");
  cy.get("#save").then((parent) => {
    const arr = parent[0].childNodes;
    const parentText = arr[0];
    console.log(parentText);
  });
});
