///<reference types="cypress"/>

import { LoginPage } from "./DashPom.cy"
const ms = new LoginPage();
    

describe('integration testing',function(){
    
    
    it("login into dashboard",function(){

    ms.loginnnnnn();
    cy.wait(3000)
    cy.visit("http://v2.nushop-dashboard.kaip.in/settings/coupons")
    //cy.get('.heading5 Text_primary-colored__qnpSF Text_mr-lg__egpT+').click();
    cy.wait(3000)
     const x = cy.get(':nth-child(3) > .tab').invoke('text').then((text) =>{
      cy.log(text);

  // coupons offers page  
    /*
    cy.get(".css-8ethid > :nth-child(3)").then(($element) => {
      const text = $element.text();
      cy.log(text);
      if (text.includes(`couponcode${ms1.Coupon_Code}`)) {
        cy.get(":nth-child(3) > .css-wgrz69 > .css-eqtcji").click();
        cy.log("if statement is executed");

      } else {
        cy.log("else statement is executed");
        console.error();
      }
    });
*/
    
   
   
   
   
   
   
    //cy.screenshot()
   // Check if the button exists
   
    //cy.get('.ChipButton_chip-button__xXNaz > span').should('exist').then(($button) => {
      //if ($button.text() === 'Disabled') {
        // Perform actions if the button text is as expected
       // cy.log('Button text is as expected.');

        // You can perform additional actions here
     // } else {
        // Perform actions if the button text is not as expected
        //cy.log('Button text is not as expected.');
        // You can perform alternative actions here
     //  }
    


    
    // https://www.interviewbit.com/markdown-cheat-sheet/ -- good for customize the logs 
    // in table form 

    // cy.log(<table>The quick brown fox jumps over the lazy dog </table>);

     //cy.log ('`The quick brown fox jumps over the lazy dog`')




    // cy.visit("http://v2.nushop-dashboard.kaip.in/website/web-configuration")
   //  cy.get(':nth-child(6) > .tab').click()

 

    // Select the button
    //cy.get('.ChipButton_chip-button__xXNaz').should('be.visible').click()
    // cy.get(':nth-child(1) > .InputNumber_input-group__4wC0i > .rs-input-number > .rs-input').should('be.checked')
    // cy.contains("Show Timer").click();

    //cy.get('.ChipButton_chip-button__xXNaz').check().should('be.checked');
        cy.log(x);
      
    })
})
});
