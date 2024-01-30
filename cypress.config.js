const { defineConfig } = require("cypress");
//const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
 projectId: 'd7scqt',
 reporter:'cypress-mochawesome-reporter',   // html reports 
<<<<<<< HEAD
 
 reporterOptions: {
  reportDir: 'cypress/reports/html',
  code: false,
  charts: true,
  autoOpen: true,
=======
 // reporter: "cypress-multi-reporters",
 
 reporterOptions: {
  // reportDir: 'cypress/reports/html',
  reportDir: "cypress/report/mochawesome-report",
  code: false,
  charts: true,
  autoOpen: true,
  html: false,
>>>>>>> f59fca4ea75536994dbe6da1b93d8ac50c9c9f29
  overwrite: true,
  json: true,
  jsonFolder: ".jsons",
  jsonReportFilename: "mochawesome-report"
<<<<<<< HEAD
    // Add any additional Mochawesome reporter options here
},
=======
  // Add any additional Mochawesome reporter options here
},


>>>>>>> f59fca4ea75536994dbe6da1b93d8ac50c9c9f29
                                             
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
  