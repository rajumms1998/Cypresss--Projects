///<reference types="cypress"/>

it('description presence',()=>
{
cy.visit('https://rakbh79sa.shopdeck.com/Testcode002/catalogue/0cMCTJGb/CYfJpdM1')
cy.scrollTo(0,1100)
cy.wait(2000)
cy.get('p[class="css-13dsnc9"]').eq(0).should('have.text','Get it delivered in 6-9 days')
cy.get('p[class="css-13dsnc9"]').eq(2).should('have.text','3 days Return (Wrong/damaged items only)')
cy.get('p[class="css-5p2svx"]').click()
cy.get('button[class="css-1jt1w2w"]').contains('GO BACK').click()
cy.get('.css-wmtjfi').should('have.text',"Product Description")
cy.scrollTo(0,100)
cy.get('button[class="css-1jt1w2w"]').contains('GO BACK').should('be.exist')
cy.wait(1000)


})