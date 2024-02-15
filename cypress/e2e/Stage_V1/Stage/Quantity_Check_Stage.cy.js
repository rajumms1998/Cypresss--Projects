
///<reference types="cypress"/>
it('Quantity updater check',()=>
{
cy.visit('http://lucky.nushop.kaip.in/DW-4149-PRIYA-PINK/catalogue/XBI9SVMC/UnrenQtc')
cy.scrollTo(0,1200)
cy.get('div[class="css-bi55qy"]').eq(0).click()
cy.get('div[class="css-10furzh"]').each(($el, index, $list) =>
 {
    cy.get('div[class="css-10furzh"]').eq(index).click()
    cy.get('div[class="css-bi55qy"]').eq(0).click()  
    cy.wait(1000)
    cy.scrollTo(0,1200)
})
cy.get('button[class="css-1jt1w2w"]').click()
//cy.get('button[data-sd-event="sizePickerContinue"]').click()
cy.get('.css-1mnj8i4').click().type("8309333476");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.get('.css-1l968gz').click()
            cy.wait(2000)
            cy.get('#cod').click()
            cy.get('.css-1l968gz').click()
            cy.wait (1000)
            for (let i = 1; i <= 4; i++) {
                cy.get(`:nth-child(${i}) > .css-tpv9t0`).click().type('0');
            }
            cy.get('.css-1jt1w2w').click();
   //qty update in checkout
   //cy.wrap([1,2,3]).each((index) => {
     // cy.get('span[class="css-1qien9y"]').eq(0).click()
    //cy.wait(1000)


cy.get('span[class="css-1qien9y"]').eq(1).click()
cy.get('button[class="css-1jt1w2w"]').click()
cy.wait(1000)
cy.get('button[class="css-1l968gz"]').click()
cy.wait(20000)
cy.get('.css-1jt1w2w').click()
//cancel ordered item
cy.get('.css-19qf114').click()
cy.get('.css-19qf114 > .css-2f3j1g').click()
cy.get('#found_better_price_for_same_product').click()
cy.get(':nth-child(2) > .css-1jt1w2w > .css-2f3j1g').click()

})
