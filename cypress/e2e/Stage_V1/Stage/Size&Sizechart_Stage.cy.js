///<reference types="cypress"/>

it('size chart image check',()=>
{
cy.visit('http://lucky.nushop.kaip.in/DW-4149-PRIYA-PINK/catalogue/XBI9SVMC/UnrenQtc')
cy.get('.css-1l6x5qr').click();
cy.get(':nth-child(1) > .css-1bkty0y > .css-zejslb > :nth-child(1)').click();
cy.scrollTo(0,500)
cy.get('.css-w5rzls').click()
cy.get('img[class="css-1pg6f89"][style="opacity: 1;"]').should('be.exist')
cy.wait(2000)
cy.get('div[class="css-ixe3sm"]').click()
cy.log("Size Chart is Verified and it is Present")
cy.wait(1000)
});


it('Size picker check',()=>
{
cy.visit('http://lucky.nushop.kaip.in/DW-4149-PRIYA-PINK/catalogue/XBI9SVMC/UnrenQtc')
cy.scrollTo(0,1200)
cy.get('div[class="css-bi55qy"]').eq(1).click()
cy.get('div[class="css-10furzh"]').each(($el, index, $list) =>
 {
    cy.get('div[class="css-10furzh"]').eq(index).click()
    cy.get('div[class="css-bi55qy"]').eq(1).click()
    cy.scrollTo(0,1500)
})
cy.get('button[class="css-1jt1w2w"]').click()
})