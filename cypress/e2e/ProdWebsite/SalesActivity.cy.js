// const { contains } = require("cypress/types/jquery")

describe("Sales Activity Checking on Website ", function() {
    
    it.only("Placing the Order and Verifying in Sales Widget ",function(){

    cy.visit ("https://rajuprod.shopdeck.com/RAJU-SIZE/catalogue/ghq6SNlV/hVXrgLPd")

    
     cy.get('.css-1jt1w2w').click()
   
     cy.get('.css-1vw8438').click().type("8309333476");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('RAJU TESTING THE SALES ACTIVITY')
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

            cy.get('.css-emfhgx').click();

            cy.visit ("https://rajuprod.shopdeck.com/RAJU-SIZE/catalogue/ghq6SNlV/hVXrgLPd")
            cy.wait(1000)
            cy.scrollTo(0, 2300)
            cy.get('.slick-current > :nth-child(1) > .css-2hndyu > a > .css-1gyx74h > .css-bllqpf > .css-1q1z73q')
            .invoke('text')
            .then((value) => {
                cy.log(`Result: ${value}`);
            
             let x = " minutes ago"
             let y = "hours ago "

if (cy.contains(value)==x||y)


             // if (!x||y(contains(value))) 



            {
                cy.log(` Sales activity widget is visible and Validation is pass `);
            
                
          
              }
              
              
              else{
          
                cy.log('Sales Activity widget is Not visible and test is failed ')
              }





    })
})


})


