/// <reference types='cypress' />

let finalArr = [];

function captureAllRowDetails(currentCounter) {
  if (currentCounter > 4) {
    return;
  }
  cy.get("body tbody")
    .should("exist")
    .then(($parent) => {
      const rowStatus = $parent.find("tr").length > 0;
      if (rowStatus) {
        cy.wrap($parent)
          .find("tr")
          .eq(currentCounter)
          .should("be.visible")
          .invoke("text")
          .should("have.length.at.least", 1)
          .then((capturedText) => {
            finalArr.push(capturedText);
          })
          .then(() => captureAllRowDetails(currentCounter + 1));
      } else {
        cy.wait(200).then(() => captureAllRowDetails(currentCounter));
      }
    });
}

it("Capturing data in async fashion", () => {
  cy.visit("/index13.html");
  finalArr = [];
  captureAllRowDetails(0);
  cy.log(finalArr);
});
