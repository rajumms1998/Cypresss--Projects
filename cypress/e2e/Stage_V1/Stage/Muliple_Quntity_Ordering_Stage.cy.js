///<reference types ="cypress"/>
///<reference types ="cypress-xpath"/>


//import { error } from "cypress/types/jquery"

// import { contains } from "cypress/types/jquery"


describe("PLACING_WEBSITE_ORDERS",function(){

    it ('Mutliple_Quantity',function() {
    
           cy.visit('http://lucky.nushop.kaip.in/',{failOnStatusCode:false}) 
           cy.get(':nth-child(2) > .css-1bkty0y').click()
         // cy.get(':nth-child(1) > .css-nfl1fu > .css-1gt500f > :nth-child(2) > a > .css-1l6x5qr').click()
          
           cy.get(':nth-child(2) > .css-1bkty0y').click()
           cy.get(':nth-child(1) > .css-ueb5fk > .css-chv9li > .css-bjn8wh > :nth-child(1) > .css-4crn7e').click()
           cy.wait(2000)
           cy.get('.css-1l8i684 > :nth-child(3)').click()
           
          cy.get('.css-1jt1w2w').click()
          cy.get('.css-1jt1w2w').click() 
          cy.get('.css-1vw8438').click().type("8309333478")
          cy.get('.css-1jt1w2w').click()
          cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
          cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
          cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
          cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
          cy.get('.css-1jt1w2w').click()
     
          cy.get('.css-w5g3vl')
       
    const Quanity_On_Bag = cy.get('.css-assxh2 > .css-1vspo5p > .css-2hndyu > .css-21njle > .css-1248chx > .css-dqxqq1 > .css-y7l8i8 > .css-1sguf2h > :nth-child(1) > .css-ydbmoz');
    cy.get(Quanity_On_Bag.contains('3'))
    cy.log("Quantity is Matched On Bag Page")
    cy.screenshot()
    cy.get('.css-1l968gz').click()
    cy.wait(3000)
    cy.get('#cod').click()
    cy.get('.css-1l968gz').click()
    cy.wait (2000)

    let i=1;
    while (i<=4){
    cy.get(':nth-child('+i+') > .css-tpv9t0').click().type("0");
    i++;
    } 

    cy.get('.css-1jt1w2w').click()
    // view bill page 
    cy.get('.css-19qf114').click() 
    cy.get('.css-ydbmoz').contains("3");
    cy.log("Quantity on View Bill Page is Equal and Verified");


         
     
    
    })
    
    
    
})  
