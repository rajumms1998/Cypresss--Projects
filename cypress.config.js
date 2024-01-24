const { defineConfig } = require("cypress");
//const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
 projectId: 'd7scqt',
 reporter:'cypress-mochawesome-reporter', // html reports 
 
  e2e: { 
    watchForFileChanges:false,
    //video: true,
    // multiple: true, 
    chromeWebSecurity:false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      
       screenshotOnRunFailure=true;
       trashAssetsBeforeRuns =true;
          //require('cypress-mochawesome-reporter/plugin') (on); // for html reports 
          //allureWriter(on, config);
          //return config;

      // implement node event listeners he  re
    },
     experimentalRunAllSpecs:true, 
    

  },


});
  