it('SINGLE ORDER PLACEMENT WITH COUPON',()=>
{
cy.visit("https://rajuprod.shopdeck.com/collection/all-products")
cy.scrollTo(0,1200)
// cy.get('div[class="css-bi55qy"]').eq(1).click()



// cy.contains("NAME CHANGED TO NEW") DUE TO CACHEE
cy.get(':nth-child(10) > .css-1bkty0y').click()

// buy Now 
cy.get('.css-1jt1w2w').click();
 
cy.get('.css-1vw8438').click().type("8309333476");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.get('.css-w5g3vl').click(); // Offers Part 
            cy.get('.css-8ethid > :nth-child(3) > :nth-child(2)').contains("APPLY").click()

            cy.wait(4000)
            cy.get('#cod').click()
            cy.get('.css-1l968gz').click()
            cy.wait (12000)
            
            cy.get('.css-1jt1w2w').click()

});