/// <reference types='cypress' />
let flag = false;

function editUserName(userID, targetUserName) {
  cy.get("tbody tr")
    .each((row, rowIdx) => {
      cy.wrap(row)
        .should("exist")
        .find("td")
        .eq(1)
        .should("exist")
        .then((col) => {
          const currID = col.text();
          if (currID == userID) {
            console.log("Found it at row -> ", rowIdx + 1);
            console.log("Edit is in progress ...");
            cy.wrap(row)
              .find("td")
              .eq(0)
              .find("a.ng2-smart-action-edit-edit")
              .click();

            cy.wrap(row)
              .find("td")
              .eq(5)
              .find("input")
              .clear()
              .type("test123@test.com");

            cy.wrap(row)
              .find("td")
              .eq(0)
              .find("a.ng2-smart-action-edit-save")
              .click();
            cy.wrap(row)
              .find("td")
              .eq(5)
              .invoke("text")
              .should("eql", "test123@test.com");

            console.log("Edit has been completed !");

            flag = true;
          }
        });
    })
    .then(() => {
      if (flag) {
        console.log("Element found in the page...");
        return;
      } else {
        cy.get('a[aria-label="Next"]')
          .parent("li")
          .invoke("attr", "class")
          .then((incState) => {
            if (incState.includes("disabled")) {
              throw new Error(
                `Sorry but the userID, you were looking for -> ${userID} does not exist`,
              );
            } else {
              cy.get('a[aria-label="Next"]')
                .click()
                .then(() => editUserName(userID, targetUserName));
            }
          });
      }
    });
}

it("Lets edit the username", () => {
  cy.visit("https://playground.bondaracademy.com/pages/tables/smart-table");
  flag = false;
  editUserName("28", "ruben@gmail.com");
});
