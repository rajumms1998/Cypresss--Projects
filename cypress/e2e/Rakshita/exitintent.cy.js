///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Exit Intent',function(){

   it("create exit intent",function(){

    ms.login()
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(5).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.wait(1000)
    cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
    cy.wait(2000)
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(2).click()
    cy.get(':nth-child(1) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').clear().type('get all products with 20% off')
    cy.get(':nth-child(1) > :nth-child(2) > .Input_input-group__c6y0f > .rs-input').clear().type('join our community')
    cy.get(':nth-child(2) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').clear().type('join CTA text')
    cy.get(':nth-child(2) > :nth-child(2) > .Input_input-group__c6y0f > .rs-input').clear().type('you are successfully subscribed')
    cy.get(':nth-child(3) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').clear().type('success welcome')
    cy.get('.rs-picker-toggle-value').click()
    cy.get('div[role="option"]').eq(1).click()
    cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').then(($value)=>{
        length=$value.length
        if(length==1)
        {
            cy.log('disabled')
            cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').click()
        }

    })
    cy.get('.rs-flex-box-grid-item-14 > .Button_button-primary__9i0Rz').click()
//verification in website

cy.wait(2000)
cy.log('website verification')
cy.visit('http://testslacck.nushop.kaip.in/')
cy.wait(11000)
cy.get('.css-34fd1f').should('have.text','get all products with 20% off' )
cy.get('.css-4gwyng').should('have.text','join our community')
cy.get('.css-1drl8p8').should('have.text','join CTA text')
cy.get('.css-r5asnw').type('test@test.in')
cy.wait(1000)
cy.get('button[class="css-8n6y7a"]').click()
cy.wait(1000)
cy.get('p[class="css-34fd1f"]').should('have.text','you are successfully subscribed')
cy.wait(2000)

})

it.only("disable exit intent",function(){
    ms.login()
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(5).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.wait(1000)
    cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
    cy.wait(2000)
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(2).click()
        cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').then(($value)=>{
            length=$value.length
            if(length==2)
            {
                cy.log('enabled')
                cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').eq(1).click()
            }
    
        })
        cy.wait(1000)
        cy.get('.rs-flex-box-grid-item-14 > .Button_button-primary__9i0Rz').click()
        cy.wait(1000)
        
    cy.log('website verification')
    cy.visit('http://testslacck.nushop.kaip.in/')
    cy.wait(12000)
    cy.log('exit intent disabled')
    
        })
    })


