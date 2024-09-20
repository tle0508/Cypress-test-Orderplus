const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add a task that logs messages to the terminal
      on('task', {
        log(message) {
          console.log(message); // Logs the message to the VSCode terminal
          return null;
        }
      });
    },
    // Other Cypress configurations...
  }
});
