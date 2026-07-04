const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/**/*.{js,cy.js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
