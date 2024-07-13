const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    "video": false,
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout": 10000,
    //"ignoreTestFiles": ["*.js", "*.md"]
    specPattern: "cypress/e2e/Features/*.feature"


  },
});
