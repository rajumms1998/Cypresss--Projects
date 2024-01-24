
 
import { LoginPage } from "./DashPom.cy"
const ms = new LoginPage();
const daterange = "2024-01-19 20:40:05 ~ 2024-11-24 19:40:05"

describe('Lucky_Store', () => {
 
    it('SaleEventCreation', () => {
 
  ms.prodlogin()
     cy.wait(2000)
      cy.visit ('https://pro.shopdeck.com/website/sales-event/add-sale-event')
      cy.wait(3000)
      
      
      
      //cy.get('.rs-radio-group > .Flexbox_mt-lg__HQln6').should.contains("Prime Day Sale Final").click()
        
        
      cy.xpath('//*[@id="root"]/section/section/div[2]/div/section/div[1]/div[2]/div/div/div[16]/div[1]/p').scrollIntoView().then(()=>{
      cy.get(':nth-child(16) > .Flexbox_flex-row__aKbHb > .rs-radio > .rs-radio-checker > .rs-radio-wrapper > input').click()
      cy.get(':nth-child(6) > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox').click().type(daterange);
      cy.log('**Date Selection is Failed**');
      cy.get('.rs-picker-toolbar-right > .rs-btn').click()
      cy.get(':nth-child(7) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').type('Banner Text')
      cy.get(':nth-child(7) > :nth-child(2) > .Input_input-group__c6y0f > .rs-input').type("Banner Strip Text")

      cy.get(':nth-child(8) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').type("Announcement Title")
      cy.get(':nth-child(9) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').type("Timer Text ")
      cy.get(':nth-child(9) > :nth-child(2) > .Input_input-group__c6y0f > .rs-input').type('100') // fake timer 
      cy.get(':nth-child(1) > .rs-radio > .rs-radio-checker > label > .rs-radio-wrapper > input').click() // real Discount 
      cy.get(':nth-child(14) > .rs-picker > .rs-picker-toggle').click()
      cy.get('[aria-selected="false"] > .rs-picker-select-menu-item').click()
      cy.get('.Flexbox_align-top__Nx4Aj.Flexbox_mb-lg__yO5tf > .rs-flex-box-grid-item > .Input_input-group__c6y0f > .rs-input').clear().type("100");
      
      cy.get('.AddSaleEvent_margin-top__eHK3k > .Button_button-primary__9i0Rz').click();
      
      cy.screenshot();
    
    
    
    })
  
      })
    })


