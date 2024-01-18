///<reference types="cypress"/>
it('Quantity updater check',()=>
{
cy.visit('https://rakbh79sa.shopdeck.com/Testcode002/catalogue/0cMCTJGb/CYfJpdM1')
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
cy.get('input[class="css-1vw8438"]').type('8660557408')
cy.get('button[class="css-1jt1w2w"]').click()
cy.get('input[autocomplete="name"]').type('Rakshitha Gowthami A C')
cy.get('input[autocomplete="postal-code"]').type('571401')
cy.get('input[autocomplete="off"]').eq(0).type('79')
cy.get('input[autocomplete="address-line1"]').type('3rd Floor, No. 259 and 276 Amarjyothi, Basaveshwara HBCS Layout, Domlur, Bengaluru - 560071, Karnataka, India')
cy.get('input[autocomplete="donotfill"]').type('testing input landmark')
cy.get('input[autocomplete="off"]').eq(1).type('8888899999')
cy.get('button[type="submit"]').click()
cy.get('span[class="css-1uf3vej"]').contains('Pay COD').click()
cy.get('svg[class="css-0"]').eq(1).click() 
//qty update in checkout
cy.wrap([1,2,3]).each((index) => {
    cy.get('span[class="css-1qien9y"]').eq(0).click()
    cy.wait(1000)
})

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