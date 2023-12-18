///<reference types="cypress"/>
it('search function in website',()=>
{

    
cy.visit('https://rajuprod.shopdeck.com/')
cy.get('input[class="css-1mu9ljd"]').click({force: true})
cy.get('.css-5tfm2q').type('raju')
cy.get('p[class="css-1i4jv5z"]').should('have.text','3 Items')
cy.wait(2000)
cy.get('div[class="css-169inv6"]').eq(2).click()
cy.wait(3000)

})