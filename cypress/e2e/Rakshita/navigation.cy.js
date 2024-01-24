///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Navigation tab tests',function(){

    it("create navigation",function(){

    ms.login()
    cy.wait(2000)
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
    cy.get('a[href="/website/navigation"]').click()
    cy.get('.rs-btn-toolbar > .button-loading-undefined').click()
    cy.get('input[class="rs-input rs-input-md"]').eq(0).type('automation navigation')
    cy.get('input[class="rs-input rs-input-md"]').eq(1).type('http://testslacck.nushop.kaip.in/Best-Sellers/collection/_m02YheX')
    cy.get('svg[class="rs-picker-toggle-caret rs-icon"]').click()
    cy.get('[data-key="_m02YheX"] > .rs-picker-select-menu-item').click()
    cy.get('.rs-modal-footer > .Button_button-primary__9i0Rz').click()
    cy.get('.Button_button-primary__9i0Rz.button-loading-false').click()
    cy.wait(2000)

    cy.log('website verification')
    cy.visit('http://testslacck.nushop.kaip.in')
    cy.get('p[class="css-1tu2nel"]').eq(1).click()
    cy.wait(2000)
    cy.get('span[class="css-yq6vv"]').eq(2).should('have.text','automation navigation')
    cy.get('span[class="css-yq6vv"]').contains('automation navigation').click()
    cy.wait(3000)   
    })
    it("Edit navigation",function(){

        ms.login()
        cy.wait(2000)
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
        cy.get('a[href="/website/navigation"]').click()
        cy.get('button[class="Button_button-primary__9i0Rz button-loading-undefined custom-button rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').eq(2).click({force:true})
        cy.get('input[class="rs-input rs-input-md"]').eq(0).clear().type('Edit automation navigate')
        cy.get('input[class="rs-input rs-input-md"]').eq(1).clear().type('http://testslacck.nushop.kaip.in/featured/new-arrivals')
        cy.get('.rs-modal-footer > .Button_button-primary__9i0Rz').click()
        cy.get('.Button_button-primary__9i0Rz.button-loading-false').click()
        cy.wait(2000)
    
        cy.log('website verification')
        cy.visit('http://testslacck.nushop.kaip.in')
        cy.get('p[class="css-1tu2nel"]').eq(1).click()
        cy.wait(2000)
        cy.get('span[class="css-yq6vv"]').eq(2).should('have.text','Edit automation navigate')
        cy.get('span[class="css-yq6vv"]').contains('Edit automation navigate').click()
        cy.wait(3000)
            
        })

        it("delete navigation",function(){
        ms.login()
        cy.wait(2000)
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
        cy.get('a[href="/website/navigation"]').click()
            cy.get('button[class="button-link button-loading-undefined custom-button rs-btn rs-btn-link rs-btn-red rs-btn-sm rs-btn-block"]').eq(5).click()
            cy.get('button[class="Button_button-primary__9i0Rz button-loading-undefined custom-button rs-btn rs-btn-primary rs-btn-red rs-btn-md"]').click()
            cy.get('button[data-sd-event="saveWebsiteNavigation"]').click()
            cy.wait(2000)
        
            cy.log('website verification')
            cy.visit('http://testslacck.nushop.kaip.in')
            cy.get('p[class="css-1tu2nel"]').eq(1).click()
            cy.wait(2000)
            cy.get('span[class="css-yq6vv"]').contains('Edit automation navigate').should('not.exist')
                
            })
})