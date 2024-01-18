import { loginpage } from "./pom.cy"
import 'cypress-file-upload'
describe('community creation',function(){
const ms = new loginpage()
    it("web config",function(){
     ms.login()
     cy.wait(2000)
     cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(8).click()
     cy.get(':nth-child(17) > :nth-child(2) > .Flexbox_flex-row__aKbHb').click()
     cy.get('[href="/settings/seller-community"] > .Flexbox_flex-row__aKbHb > .Text_body2__0FftJ').click()
     cy.get('button[data-sd-event="sellerCommunityCreateCommunity"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(0).click()
     cy.get('span[aria-placeholder="Whatsapp"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').click()
     cy.get('div[data-key="TRANSACT"]').click()
     cy.get('input[class="rs-input rs-input-md"]').eq(0).type('whatsapp trans automation')
     cy.get('input[class="rs-input rs-input-md"]').eq(1).type('https://rakbh79sa.shopdeck.com/collection/J08e18Hg')
     cy.get('button[data-sd-event="saveAndContinueSellerCommunity"]').click()

    
    })
})