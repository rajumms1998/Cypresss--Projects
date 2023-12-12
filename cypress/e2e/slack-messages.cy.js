// slack-messages.js


module.exports = {
    success: (runResults) => {
      return {
        text: `Cypress tests passed successfully! :tada:`,
        attachments: [
          {
            color: "good",
            title: "Test Run Results",
            fields: [
              {
                title: "Total Tests",
                value: runResults.totalTests,
                short: true,
              },
              {
                title: "Passed",
                value: runResults.totalPassed,
                short: true,
              },
            ],
          },
        ],
      };
    },
    failure: (runResults) => {
      return {
        text: `Cypress tests failed! :x:`,
        attachments: [
          {
            color: "danger",
            title: "Test Run Results",
            fields: [
              {
                title: "Total Tests",
                value: runResults.totalTests,
                short: true,
              },
              {
                title: "Failed",
                value: runResults.totalFailed,
                short: true,
              },
            ],
          },
        ],
      };
    },
  };
  