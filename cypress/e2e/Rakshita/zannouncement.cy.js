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
    cy.get('a[href="/website/announcement-bar"]').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > :nth-child(1) > .Flexbox_flex-row__aKbHb > .Text_body3__jmTqb').click()
    cy.get('.Text_primary-colored__qnpSF > .tab').click(parent)
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
    cy.get('button[data-sd-event="saveAndContinueAnnouncementBar"]').click() 
    //delete announcement
    cy.wait(2000)
    cy.get('button[data-sd-event="announcementBarList"]').contains('Delete').eq(0).click()
    
    

    })
})