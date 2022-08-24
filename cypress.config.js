const { defineConfig } = require("cypress");
require('dotenv').config()
module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    baseUrl: 'https://dev.employers.klob.id/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    ENV_EMAIL_COMPANY: process.env.ENV_EMAIL_COMPANY,
    ENV_PASS_COMPANY: process.env.ENV_PASS_COMPANY
  }
});
