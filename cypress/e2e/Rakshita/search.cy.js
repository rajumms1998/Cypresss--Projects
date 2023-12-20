///<reference types="cypress"/>

it('search function in website',()=>
{
cy.visit('https://rakbh79sa.shopdeck.com/')
cy.get('input[class="css-1mu9ljd"]').click({force: true})
cy.get('.css-5tfm2q').type('corrupted')
//cy.wait(10000)
cy.get('div[class="css-1hwavc7"] [class="css-f23be2"]').then(($value)=>
{
    length=$value.length
    const productsvalue=length+""
    cy.log("the products listing in serach is "+productsvalue)
    cy.get('p[class="css-1i4jv5z"]').should('have.text', productsvalue+' Items')
})


cy.wait(2000)
cy.get('div[class="css-169inv6"]').eq(2).click()
cy.wait(3000)
})

