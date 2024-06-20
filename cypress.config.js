const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    supportFile: false,  // Disable the support file
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Update the spec pattern

  },
});

