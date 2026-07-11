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
  editUserName("60", "ruben@gmail.com");
});
