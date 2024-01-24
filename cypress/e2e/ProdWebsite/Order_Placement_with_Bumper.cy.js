
describe("BUMPER_CUPON", function() {
    
   it("Verifying the Bumper Coupon is activation after First Order",function(){

            cy.visit('https://rajuprod.shopdeck.com/collection/all-products',{failOnStatusCode:false}) 
            cy.wait(2000)
            cy.get(':nth-child(2) > .css-1bkty0y').click()
            cy.get('.css-1jt1w2w').click()
            
            cy.get('.css-1vw8438').click().type("8309333476");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.wait(4000)
            cy.get('#cod').click()
            cy.get('.css-1l968gz').click()
            cy.wait (12000)
            
            cy.get('.css-1jt1w2w').click() 
 
            // Bumper Offer Page 
            
              cy.wait(2000)
              cy.screenshot();
              cy.wait(3000)
            // const text2 = cy.get('.css-l1s0up > .css-ralhn6')
           
              
                cy.log("Bumper is Activated") 
                
                cy.wait(16000)
                cy.get('.css-1sqpwkb').click() // Start Shopping Button 
                cy.get(':nth-child(1) > .css-1bkty0y').click() // click from Best Sellers Page 
                cy.wait(2000)
               
                const text3 = cy.get('.css-1eu3kd4 > .css-1de26uq')
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
                })

     })
          
              
        
        