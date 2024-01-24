import { loginpage } from "./pom.cy"
describe('community creation',function(){
const ms = new loginpage()
    it("community creation",function(){
     ms.login()
     cy.wait(2000)
     cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(8).click()
     cy.get(':nth-child(17) > :nth-child(2) > .Flexbox_flex-row__aKbHb').click()
     cy.get('[href="/settings/seller-community"] > .Flexbox_flex-row__aKbHb > .Text_body2__0FftJ').click()
     //whats app
     cy.get('button[data-sd-event="sellerCommunityCreateCommunity"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(0).click()
     cy.get('div[data-key="whatsapp"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').click()
     cy.get('div[data-key="TRANSACT"]').click()
     cy.get('input[class="rs-input rs-input-md"]').eq(0).type('whatsapp trans automation')
     cy.get('input[class="rs-input rs-input-md"]').eq(1).type('https://rakbh79sa.shopdeck.com/collection/J08e18Hg')
     cy.get('button[data-sd-event="saveAndContinueSellerCommunity"]').click()
     //instagram
     cy.get('button[data-sd-event="sellerCommunityCreateCommunity"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(0).click()
     cy.get('div[data-key="instagram"]').click()
     cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').click()
     cy.get('div[data-key="TRANSACT"]').click()
     cy.get('input[class="rs-input rs-input-md"]').eq(0).type('instagram trans automation')
     cy.get('input[class="rs-input rs-input-md"]').eq(1).type('https://rakbh79sa.shopdeck.com/collection/J08e18Hg')
     cy.get('button[data-sd-event="saveAndContinueSellerCommunity"]').click()
      //whatsapp non trans
      cy.get('button[data-sd-event="sellerCommunityCreateCommunity"]').click()
      cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(0).click()
      cy.get('div[data-key="whatsapp"]').click()
      cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').click()
      cy.get('div[data-key="NON_TRANSACT"]').click()
      cy.get('input[class="rs-input rs-input-md"]').eq(0).type('whatsapp non trans automation')
      cy.get('input[class="rs-input rs-input-md"]').eq(1).type('https://rakbh79sa.shopdeck.com/collection/J08e18Hg')
      cy.get('button[data-sd-event="saveAndContinueSellerCommunity"]').click()
    //insta non trans
    cy.get('button[data-sd-event="sellerCommunityCreateCommunity"]').click()
    cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(0).click()
    cy.get('div[data-key="instagram"]').click()
    cy.get('div[class="rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').click()
    cy.get('div[data-key="NON_TRANSACT"]').click()
    cy.get('input[class="rs-input rs-input-md"]').eq(0).type('instagram non trans automation')
    cy.get('input[class="rs-input rs-input-md"]').eq(1).type('https://rakbh79sa.shopdeck.com/collection/J08e18Hg')
    cy.get('button[data-sd-event="saveAndContinueSellerCommunity"]').click()
    //visibility 
    cy.wrap([1,2,3,4]).each((index) => {
        cy.get('button[data-sd-event="sellerCommunityVisibility"]').eq(index).click()
        cy.wait(1000)
    })
    //delete
    cy.wrap([1,2,3,4]).each((index) => {
        cy.get('button[data-sd-event="sellerCommunityDeleted"]').eq(0).click()
        cy.get('button[data-sd-event="confirmationPopUp"]').eq(1).click()
        cy.wait(1000)
    })
    })
})