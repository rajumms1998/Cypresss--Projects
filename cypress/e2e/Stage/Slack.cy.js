
/// <reference types ="cypress"/>
import * as file from '../reports/html/index.html'; 


const slackWebhookUrl = 'https://hooks.slack.com/services/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';

describe('Send message to Slack', () => {
  it('should send a message to Slack', () => {
    // Define the message payload
    const messagePayload = {
      text: 'Hello, this is a test message from Cypress!',
     
      
    
    };

    // Send a POST request to Slack webhook URL with the message payload
    cy.request({
      method: 'POST',
      url: slackWebhookUrl,
      body: messagePayload,
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      // Assuming Slack responds with a 200 OK status
      expect(response.status).to.equal(200);
      // You can add additional assertions if needed
    });
  });
});


/*
// cypress/support/commands.js

import 'cypress-slack-reporter';


it("Slack",function(){


   cy.visit("http://glassthe.nushop.kaip.in/");
   cy.log("passeed");
})

// This is optional, but you can customize the message sent to Slack
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.log(`Screenshot: ${screenshotFileName}`);
    cy.screenshot(screenshotFileName);
  }
});

 */












