///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
import 'cypress-file-upload';

const ms = new loginpage()

describe('ratings and reviews tab',function(){

    it("upload reviews",function(){

    ms.login()
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(5).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
    cy.get('a[href="/website/navigation"]').click()
    cy.get('a[href="/website/review-and-rating"]').click()
    cy.wait(1000)
    cy.get('input[type=file]').eq(0).click({force:true}).attachFile('ratingsheet.csv')
    cy.get('div[class="Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"] [class="RatingAndReviewItem_btn-wrapper__WHdxX rs-flex-box-grid-item rs-flex-box-grid-item-0"]').as('buttons').each(($el, index, $list) => //loo to all vuttons
 {  cy.get('@buttons').eq(index).as('buttontext').invoke('text').then((text) => //capture text from each button
 {
  if(text=='Disabled')
    {
      cy.get('div[class="ChipButton_chip-button__xXNaz ChipButton_md__wXNXM ChipButton_hoverable__WTVOV"]').eq(0).click({force: true})
    }
    else
    {
      cy.log('this is enabled')
    }
 })
 })
cy.wait(1000)
cy.get('.RatingAndReview_save-btn-wrapper__MRDF4 > .Button_button-primary__9i0Rz').click()
cy.wait(2000)
cy.log('website verification')
cy.viewport(1536, 864)
cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-and-Spring-Pink/catalogue/aXMTbGa5/pOOWkDC0')
cy.wait(2000)
cy.scrollTo(0,1500)
cy.get('p[class="css-l59mv7"]').should('have.text','Contact Us' )
cy.get('p[class="css-nkpr35"]').should('have.text','Get in touch directly on WhatsApp!')
//cy.get('.css-udcu0w > .css-2f3j1g').should('have.text',' contact CTA')
cy.get('.css-udcu0w > .css-2f3j1g').should($el => expect($el.text().trim()).to.equal('Start Chat'))
cy.wait(5000)
})
})