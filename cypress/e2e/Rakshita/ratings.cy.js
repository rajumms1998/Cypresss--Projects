///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
import 'cypress-file-upload';

const ms = new loginpage()

describe('ratings and reviews tab',function(){

    it("create",function(){

    ms.login()
    cy.wait(2000)
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
    cy.get('a[href="/website/navigation"]').click()
    cy.get('a[href="/website/review-and-rating"]').click()
    cy.wait(1000)
    cy.get('input[type=file]').eq(0).click({force:true}).attachFile('ratings.csv')
    cy.get('div[class="Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"] [class="RatingAndReviewItem_btn-wrapper__WHdxX rs-flex-box-grid-item rs-flex-box-grid-item-0"]').as('buttons').each(($el, index, $list) => //loop to all buttons
 {
  cy.get('@buttons').eq(index).as('buttontext').invoke('text').then((text) => //capture text from each button
 {
  if(text=='Disabled')
    {
      cy.get('div[data-sd-event="rating&Review"][class="ChipButton_chip-button__xXNaz ChipButton_md__wXNXM ChipButton_hoverable__WTVOV custom-chip-button"]').eq(0).click({force: true})
    }
    else
    {
      cy.log('this is enabled')
    }
 })
 })
 /** download report
 cy.get('.RatingAndReview_save-btn-wrapper__MRDF4 > .Button_button-primary__9i0Rz').click()
 cy.get('button[data-sd-event="downloadReviewRating&Review"]').click()
 cy.get('a[href="/analytics/reports/downloads"]').click()
 cy.wait(1000)
 cy.get('button[data-sd-event="downloadReport"]').eq(0).click()
cy.wait(1000)
*/
cy.wait(2000)
cy.log('website verification')
cy.viewport(1536, 864)
cy.visit('http://testslacck.nushop.kaip.in/Automation-Product/catalogue/IHq5kfEG/dsq_BjhN')
cy.wait(2000)
cy.scrollTo(0,500)
cy.wait(5000)

//button[data-sd-event="viewAllReviews"] // view all
})
})