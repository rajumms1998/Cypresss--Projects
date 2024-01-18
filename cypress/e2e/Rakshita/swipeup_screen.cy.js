///<reference types="cypress">
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Swipe Up Screen',function(){

    it("add swipe up screen",function(){

      ms.login()
      cy.wait(2000)
      cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
      cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
      cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(3).click()
        cy.get('input[placeholder="Fashion Store"]').clear()
        Cypress.on('uncaught:exception', (err, runnable, promise) => {
            if (promise) {
              return false
            }
          })
          cy.get('input[placeholder="Fashion Store"]').type('website title text')
        cy.get(':nth-child(2) > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-value').click()
        cy.get('[data-key="right"] > .rs-picker-select-menu-item').click()
        cy.get(':nth-child(1) > .rs-picker > .rs-picker-toggle').click()
        cy.get('div[role="option"]').eq(2).click()
        cy.get(':nth-child(2) > .Input_input-group__c6y0f > .rs-input').click()
        cy.get('div[class="Flexbox_flex-row__aKbHb Flexbox_mt-lg__HQln6 Flexbox_mb-lg__yO5tf Flexbox_gutter-lg__kVhG3 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]  div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div')
        .each(($el, index, $list) =>
        {
          // length= $el.index.find('span').length
          length= $el.find('span').length
          cy.log(length)
            if(length==1)
            {
                cy.log('disabled')
                $el.click() 
                cy.wait(1000)
            }

        })
            cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
            cy.wait(2000)
            ///website verification
            cy.visit('http://testslacck.nushop.kaip.in/')
            cy.wait(2000)
            cy.get('.css-6p6ddy').should("have.text","website title text")
        })

        it("disable swipe up screen",function(){

          ms.login()
          cy.wait(2000)
          cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
          cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
          cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
            cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(3).click()
            cy.get('input[placeholder="Fashion Store"]').clear()
            Cypress.on('uncaught:exception', (err, runnable, promise) => {
                if (promise) {
                  return false
                }
              })
              cy.get('input[placeholder="Fashion Store"]').type('website title text')
            cy.get(':nth-child(2) > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-value').click()
            cy.get('[data-key="right"] > .rs-picker-select-menu-item').click()
            cy.get(':nth-child(1) > .rs-picker > .rs-picker-toggle').click()
            cy.get('div[role="option"]').eq(2).click()
            cy.get(':nth-child(2) > .Input_input-group__c6y0f > .rs-input').click()
            cy.get('div[class="Flexbox_flex-row__aKbHb Flexbox_mt-lg__HQln6 Flexbox_mb-lg__yO5tf Flexbox_gutter-lg__kVhG3 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]  div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div')
            .each(($el, index, $list) =>
            {
              // length= $el.index.find('span').length
              length= $el.find('span').length
              cy.log(length)
                if(length>1)
                {
                    cy.log('disabled')
                    $el.click() 
                    cy.wait(1000)
                }
    
            })
                cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
                cy.wait(2000)
                ///website verification
                cy.visit('http://testslacck.nushop.kaip.in/')
                cy.get('.css-6p6ddy').should('not.exist')
            })
        

    })
