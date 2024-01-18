

///<reference types="cypress"/>

describe('Customer_Journey',function() {
    it.skip("Ordering the Bag Products",function() {
        cy.log("passsss")

        cy.visit('http://lucky.nushop.kaip.in',{failOnStatusCode:false}) 
        cy.wait(3000)
        cy.get(':nth-child(1) > .css-nfl1fu > .css-1sf8q8u > .slick-slider > .slick-list > .slick-track > [data-index="1"] > :nth-child(1) > .css-1ikn04e > .css-1bkty0y > .css-zejslb > .css-15luse1 > .css-y7l8i8').click()
        cy.wait(2000)
        cy.get('.css-19qf114 > .css-2f3j1g').click();
        cy.get('.ReactModal__Overlay').click()
        
        cy.get('.css-19qf114 > .css-2f3j1g').click({multiple: true })
        cy.get('.css-hdm7wy > .css-uxj08').click()
        cy.screenshot().log("Added to Bag");
        cy.get('.css-1jt1w2w').click()
        cy.get('.css-1vw8438').click().type("8309333478");
        cy.get('.css-1jt1w2w').click()
        cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
        cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
        cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
        cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
        cy.wait(3000)
        cy.get('.css-1jt1w2w').click() 
        cy.get('.css-1l968gz').click()
        cy.wait(3000)
        cy.get('#cod').click()
        cy.get('.css-1l968gz').click()
        let i=1;
        while (i<=4){
        cy.get(':nth-child('+i+') > .css-tpv9t0').click().type("0");
        i++;
        }
        cy.get('.css-1jt1w2w').click()

      
    
    })

})


