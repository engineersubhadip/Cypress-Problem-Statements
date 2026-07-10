/// <reference types="cypress" />

it("Getting the full list of classes", () => {
  const refFruits = [
    "apples",
    "bananas",
    "grapes",
    "watermelons",
    "coconuts",
    "mangoes",
  ];
  cy.visit("/index5.html");
  cy.get(".fruit").each((ele) => {
    const currFruit = ele.text().split(" ")[0].toLowerCase();
    expect(currFruit).to.be.oneOf(refFruits);
  });
});

it.only("Verify all the images have been loaded", () => {
  cy.visit("/index6.html");
  cy.get("img").each((currImg) => {
    expect(currImg).to.have.attr("alt").to.not.be.empty;
  });
});
