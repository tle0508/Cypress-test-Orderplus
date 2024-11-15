const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'awvpas',
  e2e: {
    setupNodeEvents(on, config) {
    },

  },
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,
});
