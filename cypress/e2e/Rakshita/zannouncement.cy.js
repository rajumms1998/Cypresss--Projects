///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Navigation tab tests',function(){

    it("create navigation",function(){

    ms.login()
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(5).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
    cy.wait(2000)
    cy.get('a[href="/website/announcement-bar"]').click()
    cy.wait(1000)
    cy.get('.Text_primary-colored__qnpSF > .tab').click()
    cy.get('.Text_subtitles-colored__s5ggG > .tab').click()
    cy.wait(1000)
    cy.get('div[class="Input_input-group__c6y0f undefined rs-input-group"]').eq(0).type('automation announcement title')
    cy.get('.Flexbox_mt-xs__eWLPX > .rs-flex-box-grid-item > .Input_input-group__c6y0f > .rs-input').type('http://testslacck.nushop.kaip.in/featured/new-arrivals')
    cy.get('svg[aria-label="calendar"]').eq(0).click()
    cy.get('div[class="rs-calendar-table-cell"]').eq(7).click()
    cy.get('button[class="rs-btn rs-btn-primary rs-btn-sm"]').click()
    cy.get('svg[aria-label="calendar"]').eq(1).click()
    cy.get('div[class="rs-calendar-table-cell"]').eq(7).click()
    cy.get('button[class="rs-btn rs-btn-primary rs-btn-sm"]').click()
    cy.get('button[class="Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-sm"]').eq(1).click()    

    })
})