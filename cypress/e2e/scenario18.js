/// <reference types = 'cypress'/>

it("Validate price within a range", () => {
  cy.visit("/index20.html");
  cy.get("#price")
    .invoke("text")
    .should("be.a", "string")
    .and((currEle) => {
      const value = Number(currEle.split("$")[1]);
      expect(value).to.be.within(10, 20);
    });
});
