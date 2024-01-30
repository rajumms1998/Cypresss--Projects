const { defineConfig } = require("cypress");
//const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
 projectId: 'd7scqt',
 reporter:'cypress-mochawesome-reporter',   // html reports 
 // reporter: "cypress-multi-reporters",
 
 reporterOptions: {
  // reportDir: 'cypress/reports/html',
  reportDir: "cypress/report/mochawesome-report",
  code: false,
  charts: true,
  autoOpen: true,
  html: false,
  overwrite: true,
  json: true,
  jsonFolder: ".jsons",
  jsonReportFilename: "mochawesome-report"
  // Add any additional Mochawesome reporter options here
},


                                             
  e2e: { 
    watchForFileChanges:false,
    //video: true,
    // multiple: true, 
    chromeWebSecurity:false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      
       screenshotOnRunFailure=true;
       trashAssetsBeforeRuns =true;
          require('cypress-mochawesome-reporter/plugin') (on); // for html reports 
          //allureWriter(on, config);
          //return config;

      // implement node event listeners he  re
    },
     experimentalRunAllSpecs:true, 
    

  },


});
  