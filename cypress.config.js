const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o8bhvp',
 reporter:'cypress-mochawesome-reporter', // html reports 

  e2e: { 
    watchForFileChanges:false,
    video: true,
    multiple: true, 
    
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
       screenshotOnRunFailure=true;
       trashAssetsBeforeRuns =true;
          require('cypress-mochawesome-reporter/plugin') (on); // for html reports 

      // implement node event listeners he  re
    },
     experimentalRunAllSpecs:true, 
    

  },
});
  