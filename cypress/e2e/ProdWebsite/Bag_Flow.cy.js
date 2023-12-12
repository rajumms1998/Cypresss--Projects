
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>


describe('Customer_Journey',function() {
    it("Ordering the Bag Products",function() {

        cy.visit("https://rajuprod.shopdeck.com",{failOnStatusCode:false}) ;
        cy.wait(3000)
        
        cy.get('.css-1l6x5qr').click();
        cy.log("cliked the view all button from the all products Widget");
        cy.wait(2000)
        let i =2;
        while(i<=3){
           cy.get(`:nth-child(${i}) > .css-1bkty0y > .css-zejslb > .css-15luse1 > .css-y7l8i8`).click();
           cy.get('.css-19qf114').click();
           cy.get('.ReactModal__Overlay').click();
           cy.wait(2000)
           cy.get('.css-11zuei6').click();

           i++; 
    
        }
    cy.get('.css-k8ajg4 > .css-uxj08 > .css-zixo5y > .css-2f3j1g').click(); // click on bag/cart button
    cy.log("Added To Bag") 
    cy.get('.css-1jt1w2w').click(); // checkout button 

    
        cy.get('.css-1vw8438').click().type("8309333476");
        cy.get('.css-1jt1w2w').click()
        cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
        cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
        cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
        cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
        cy.wait(3000)
        cy.get('.css-1jt1w2w').click() 
        cy.get('.css-1l968gz').click()
        
    
        cy.get('.css-1l968gz').click()
        // Example with stubbing
      //cy.stub(window, 'prompt').returns('yourOTP');
      //cy.get('#submit-button').click(); // This assumes that OTP is entered via a prompt

        cy.wait (10000)
        cy.get('.css-1jt1w2w').click(); // verify otp button 


  });
});
  
        
          
          


    




