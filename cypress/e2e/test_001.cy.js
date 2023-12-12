
///<reference types="cypress"/>

 
// Buy now the Product 

it('Store_Search',function() { 
   
cy.visit('http://lucky.nushop.kaip.in/') ;
cy.wait(7000)
cy.get(':nth-child(1) > .css-nfl1fu > .css-1gt500f > :nth-child(2) > a > .css-1l6x5qr').click()
cy.get(':nth-child(2) > .css-1bkty0y').click()
cy.get('.css-1jt1w2w').click()
cy.get('.css-1jt1w2w').click() 
cy.get('.css-1vw8438').click().type("8309333478")
cy.get('.css-1jt1w2w').click()
cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
cy.get('.css-1jt1w2w').click()
cy.get('.css-1l968gz').click()
cy.wait(7000)
cy.get('#cod').click()
cy.get('.css-1l968gz').click()
cy.get(':nth-child(1) > .css-tpv9t0').click().type('0')
cy.get(':nth-child(2) > .css-tpv9t0').click().type('0')
cy.get(':nth-child(3) > .css-tpv9t0').click().type('0')
cy.get(':nth-child(4) > .css-tpv9t0').click().type('0')
cy.get('.css-1jt1w2w').click() 

})
