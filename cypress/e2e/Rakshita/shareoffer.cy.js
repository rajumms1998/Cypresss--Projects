import { loginpage } from "./pom.cy"
describe('community coupons creation',function(){
const ms = new loginpage()
    it("create offer,share and verify offer applied on productpage",function(){
     ms.login()
     cy.wait(2000)
     cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(8).click()
     cy.get(':nth-child(17) > :nth-child(2) > .Flexbox_flex-row__aKbHb').click()
     cy.get('[href="/settings/seller-community"] > .Flexbox_flex-row__aKbHb > .Text_body2__0FftJ').click()
     cy.get('.Table_card-container-header__9xhmg > :nth-child(5)').click() //click to hide bar
     cy.get('button[data-sd-event="sellerCommunity"]').eq(1).click()
     cy.get('button[data-sd-event="sellerCommunityCreateOffer"]').click()
     cy.get('input[class="rs-input"]').eq(0).type('automation')
     cy.get('button[class="rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
     cy.get('button[data-sd-event="addCatalogueSelector"]').eq(0).click()
     cy.get('input[class="rs-input rs-input-md"]').type('automationcode')
     cy.get('div[role="combobox"]').eq(1).click()
     cy.get('div[data-key="fixed"]').click()
     cy.get('div[role="combobox"]').eq(2).click()
     cy.get('div[data-key="both"]').click()
     cy.get('div[role="combobox"]').eq(3).click()
     cy.get('button[class="rs-calendar-header-forward rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-subtle rs-btn-xs"]').click()
     cy.get('div[class="rs-calendar-table-cell-content"]').eq(34).click()
     cy.get('button[class="rs-btn rs-btn-primary rs-btn-sm"]').click()
     cy.get('input[class="rs-input"]').eq(1).clear().type('100')
     cy.get('input[class="rs-input"]').eq(2).clear().type('100')
     cy.get('input[class="rs-input"]').eq(3).clear().type('10')
     cy.get('button[data-sd-event="applyOfferFormChanges"]').click()
     //share on whats app
     cy.get('button[data-sd-event="sellerCommunityShareButtonAction"]').click()
     cy.get('input[placeholder="XXXXX XXXXX"]').type('8892049515')
     cy.get('button[data-sd-event="getOffer"]').click()
     //verify in link
     cy.get('a[href="http://testslacck.nushop.kaip.in/catalogue/IHq5kfEG/dsq_BjhN?coupon_code=automationcode&utm_source=community"]').invoke('removeAttr','target').click()
     cy.get('p[class="css-1gslnd8"]').should('have.text',"OFFER APPLIED: EXTRA Rs. 100 OFF! | Limited Time Offer")
     cy.get('p[class="css-w7209m"]').then(($value)=>{
        const sep=$value.text().trim().replace(',',"").replace('₹',"")
        cy.log(sep)
        const numberValue1 = Number(sep)
          const costp=sep-100
          cy.log(costp)
          cy.get('p[class="css-ls75c0"]').should('contain',costp)
          })
          /*delete coupon
      cy.visit('http://v2.nushop-dashboard.kaip.in/settings/seller-community?tab=1') 
      cy.visit('button[class="Button_button-default__NeJ4p button-loading-undefined custom-button rs-btn rs-btn-default rs-btn-sm"]').eq(0).click()
      cy.visit('button[data-sd-event="confirmationPopUp"]').eq(0).click()
      */

    })
})