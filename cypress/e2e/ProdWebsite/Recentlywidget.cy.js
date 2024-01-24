
describe("Recently Viewed Activity", function() {
  it("Viewing the Product and Checking in the Recently Viewed Widget", function() {
    cy.visit("https://rajuprod.shopdeck.com");
    cy.wait(3000);

    // Clicking on elements to view a product
    cy.get('.css-1l6x5qr').click();
    cy.get(':nth-child(1) > .css-1bkty0y').click();
    cy.wait(3000);

    // Logging the result
    cy.get('.css-yxymeh')
      .invoke('text')
      .then((val) => {
        cy.log(`Result: ${val}`);
      

   cy.go('back');
   cy.go(-1);
   cy.wait(1000)
   cy.reload()
   
     // Clicking on another element
    cy.get('.css-1timy0t > :nth-child(1) > .css-1bkty0y').click();
    cy.wait(1000)

    cy.scrollTo(0, 2300)
    cy.get('.css-1sf8q8u > .css-1timy0t')
      .scrollIntoView()
      .should('be.visible')

    cy.get('.css-1wykz1u > .css-1bkty0y > .css-zejslb > :nth-child(1) > .css-f23be2')
      .invoke('text')
      .then((value) => {
      cy.log(`Result: ${value}`);
  

     //cross checking status code to move further with the code else stop it 
     if (val !== value) {
      cy.log(`Recently viewed widget is not visible`);
      //cy.wrap().should('have.property', 'length'); 
      //cy.then(() => this.skip()) 
      cy.then(() => {
          //throw new Error('Quitting test.');
          cy.fail(new Error('Quitting test'));
      })

    }else{

      cy.log('Recently viewed widget is visible and working fine')
    }

      })
      })
      

  
  });
});