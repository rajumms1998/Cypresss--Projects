it('SINGLE ORDER PLACEMENT WITH COUPON',()=>
{
cy.visit("http://lucky.nushop.kaip.in/collection/all-products")
cy.scrollTo(0,1200)
// cy.get('div[class="css-bi55qy"]').eq(1).click()



// cy.contains("NAME CHANGED TO NEW") DUE TO CACHEE
cy.get(':nth-child(1) > .css-1bkty0y').click()

// buy Now 
cy.get('.css-1jt1w2w').click();
 
cy.get('.css-1vw8438').click().type("8309333475");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.get('.css-w5g3vl').click(); // Offers Part 
            cy.get(':nth-child(3) > .css-wgrz69 > .css-eqtcji').click()
            cy.wait(1000)
            cy.get('.css-1l968gz').click
            cy.wait(4000)
            cy.get('#cod').click()
            
            cy.get('.css-1l968gz').click()
            cy.wait (2000)
            for (let i = 1; i <= 4; i++) {
                cy.get(`:nth-child(${i}) > .css-tpv9t0`).click().type('0');
            }
            
            
            cy.get('.css-1jt1w2w').click()

});