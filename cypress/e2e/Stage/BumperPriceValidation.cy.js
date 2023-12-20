
import { LoginPage } from "./DashPom.cy";
import { rando } from "./random.cy"



const stage_login = new LoginPage();
const user_number = new rando();

describe("BUMPER_CUPON", function() {
  
  it("BUMPER COUPON VALIDATION", () => {
    stage_login.loginnnnnn();
    cy.visit("http://v2.nushop-dashboard.kaip.in/settings/coupons");
    cy.wait(3000)
    cy.get(":nth-child(3) > .tab").click();

    const display_text = cy.get(".ChipButton_chip-button__xXNaz > span");
    cy.log(display_text);
  
    cy.get('.ChipButton_chip-button__xXNaz > span').then(($element) => {
      const text = $element.text();
           if (text.includes('Enabled')) {
                cy.log("if statement is executed")
                // cy.get(':nth-child(10) > .Button_button-primary__9i0Rz').click()
                cy.get(':nth-child(8) > .Button_button-primary__9i0Rz');
               } 
           
           else {

            cy.get('.ChipButton_chip-button__xXNaz').click()
            cy.log("else statement is executed")

            cy.get('.rs-picker-toggle').click()
            cy.get('[data-key="fixed"] > .rs-picker-select-menu-item').click();
            cy.xpath('//*[@id="root"]/section/section/div[2]/div/section/div[4]/div[2]').clear().type("100");
            cy.get(':nth-child(1) > .InputNumber_input-group__4wC0i > .rs-input-number > .rs-input').clear().type("120");
            cy.get(':nth-child(2) > .InputNumber_input-group__4wC0i > .rs-input-number > .rs-input').clear().type("10");
            
            cy.get(':nth-child(7) > .ChipButton_chip-button__xXNaz').click()
            cy.screenshot();
         }

          }) 
  });
 
   it("Verifying the Bumper Coupon is activation after First Order",function() {

            cy.visit('http://lucky.nushop.kaip.in/',{failOnStatusCode:false}) 
            cy.wait(2000)
            cy.get(':nth-child(1) > .css-nfl1fu > .css-1gt500f > :nth-child(2) > a > .css-1l6x5qr').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .css-1bkty0y').click()
            cy.get('.css-1jt1w2w').click()
            cy.get('.css-1jt1w2w').click() 
            cy.get('.css-1vw8438').click().type(user_number.customer_login_for_bumper);
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.get('.css-1l968gz').click()
            cy.wait(4000)
            cy.get('#cod').click()
            cy.get('.css-1l968gz').click()
            cy.wait (2000)
            cy.get(':nth-child(1) > .css-tpv9t0').click().type('0')
            cy.get(':nth-child(2) > .css-tpv9t0').click().type('0')
            cy.get(':nth-child(3) > .css-tpv9t0').click().type('0')
            cy.get(':nth-child(4) > .css-tpv9t0').click().type('0')
            cy.get('.css-1jt1w2w').click() 
           
            
            
            // Bumper Offer Page 
            //  cy.get('.css-1eu3kd4 > .css-1udy5o0').then(($element) =>{
              cy.wait(2000)
              cy.screenshot();
              const text2 = cy.get('.css-1eu3kd4 > .css-1udy5o0');
           
              if (text2.contains("BUMPER")) {
                cy.log("Bumper is Activated") 
                cy.log(text2);
                cy.wait(14000)
                cy.get('.css-mpc6xq').click() // Start Shopping Button 
                cy.get('.css-16h0kxh > :nth-child(3)').click() // click from Best Sellers Page 
                cy.wait(2000)

                const text3 = cy.get('.css-1eu3kd4 > .css-1udy5o0')
                cy.get (text3.contains("BUMPER"))
                cy.log(text3)
                cy.log("Assertion is passed");
                cy.get('.css-1jt1w2w')

          
                cy.get('.css-1jt1w2w').click() 
                cy.reload();

                cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
                cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
                cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
                cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Filled ')
                cy.wait(3000)
                cy.get('.css-1jt1w2w').click()
                
                // cy.get('.css-19qf114').click() // i want to order more 

                const Bumper_offer_applied = cy.get('.css-7yd8vv > :nth-child(4)');
                cy.log(Bumper_offer_applied);

                cy.get('.css-1l968gz').click()
                cy.wait(4000)
                cy.get('#cod').click()
                cy.get('.css-1l968gz').click()

                cy.get('.css-19qf114').click();


                cy.log("Bumper Validation Test is Passed ") 
                // const y = cy.get(':nth-child(4) > .css-1d16uxs > .css-xhrcwe');
                
              }
              else {

                  cy.log("Bumper is Not Activated");
                }
                  
                  
        
              })  
                  })
      
          
        
        