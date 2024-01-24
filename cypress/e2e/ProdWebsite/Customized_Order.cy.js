it('CUSTOMISE ORDER PLACEMENT ',()=>
{
cy.visit("https://rajuprod.shopdeck.com/collection/all-products",{failOnStatusCode:false})
cy.scrollTo(0,1200)
// cy.get('div[class="css-bi55qy"]').eq(1).click()


cy.get('.css-mgeikb > .css-1iqd3x2').then(($el)=>{
// cy.contains("NAME CHANGED TO NEW") DUE TO CACHEE
cy.get(':nth-child(6) > .css-1bkty0y').click()
  
})
 

cy.get('.css-1jt1w2w').click();
cy.get('.css-f19f6l > :nth-child(2) > .css-1jt1w2w').click();
cy.wait(2000)
cy.get('.css-5tfm2q').click().type("NAME IS RAJUU");
cy.get('.css-uxj08 > .css-1jt1w2w').click()

cy.get('.css-1mnj8i4').click().type("8309333476");
            cy.wait(2000)
            cy.get('.css-1jt1w2w').click()
            cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
            cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
            cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type("101")
            cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
            cy.wait(3000)
            cy.get('.css-1jt1w2w').click() 
            cy.wait(4000)
            cy.get('#cod').click()
            cy.get('.css-1l968gz').click()
            cy.wait (15000)
            
            cy.get('.css-1jt1w2w').click()

});