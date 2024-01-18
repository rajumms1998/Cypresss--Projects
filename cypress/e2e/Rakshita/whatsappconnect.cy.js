///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('whats app connect',function(){

    it("enable custom whats app connect",function(){
    ms.login()
    cy.wait(2000)
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(1).click()
    cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').then(($value)=>{
    length=$value.length
    if(length==1)
    {
        cy.log('disabled')
        cy.wait(1000)
        cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').click()
    }
            cy.wait(2000)
            cy.get('.ChipButton_chip-button__xXNaz').click()
            cy.get('.Text_primary-colored__qnpSF > .tab').click()
            cy.log("Element is Clicked")
            cy.get(':nth-child(2) > .Input_input-group__c6y0f > .rs-input').clear().type('contact us title')
            cy.get(':nth-child(3) > .Input_input-group__c6y0f > .rs-input').clear().type('get in touch in whats app')
            cy.get(':nth-child(4) > .Input_input-group__c6y0f > .rs-input').clear().type('contact CTA')
          // verification of page checkbox
          cy.get('input[type="checkbox"]').eq(0).then(($input) => {
          length=  $input.attr('aria-checked').length
            if(length==5){
              cy.get(':nth-child(2) > .rs-checkbox-checker > label > .rs-checkbox-wrapper').click()
            }
        })
        cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
        cy.wait(2000)
  
cy.log('website verification')
cy.viewport(1536, 864)
cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-and-Spring-Pink/catalogue/aXMTbGa5/pOOWkDC0')
cy.wait(2000)
cy.scrollTo(0,1500)
cy.get('p[class="css-l59mv7"]').should('have.text','contact us title' )
cy.get('p[class="css-nkpr35"]').should('have.text','get in touch in whats app')
//cy.get('.css-udcu0w > .css-2f3j1g').should($el => expect($el.text().trim()).to.equal('contact CTA'))
cy.wait(5000)
})
    })

it("default whats app connect",function(){

  ms.login()
  cy.wait(2000)
  cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
  cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
  cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
  cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(1).click()
  cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').then(($value)=>{
    length=$value.length
    if(length==2)
    {
        cy.log('disabled')
        cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div span').click()
        cy.wait(2000)
        cy.get('.ChipButton_chip-button__xXNaz').click()
    }
    else{
      cy.wait(2000)
      cy.get('.ChipButton_chip-button__xXNaz').click()

    }
    cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
})
cy.wait(2000)
cy.log('website verification')
cy.viewport(1536, 864)
cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-and-Spring-Pink/catalogue/aXMTbGa5/pOOWkDC0')
cy.wait(2000)
cy.scrollTo(0,1500)
cy.get('p[class="css-l59mv7"]').should('have.text','Contact Us' )
cy.get('p[class="css-nkpr35"]').should('have.text','Get in touch directly on WhatsApp!')
//cy.get('.css-udcu0w > .css-2f3j1g').should($el => expect($el.text().trim()).to.equal('Start Chat'))
cy.wait(5000)


})

it("disable whats app connect",function(){

  ms.login()
  cy.wait(2000)
  cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
  cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
  cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
  cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(1).click()
  cy.wait(2000)

          cy.get('input[type="checkbox"]').each(($el, index, $list) =>
          {
             
              $el.click()
             })
            
          cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()

  cy.wait(2000)
cy.log('website verification')
cy.viewport(1536, 864)
cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-and-Spring-Pink/catalogue/aXMTbGa5/pOOWkDC0')
cy.wait(2000)
cy.scrollTo(0,1500)
cy.get('p[class="css-l59mv7"]').should('not.exist')
cy.wait(5000)

    })
  })

