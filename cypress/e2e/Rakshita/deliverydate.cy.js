//<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()
describe('Display Delivery date',function(){

    it("add delivery date",function(){

        ms.login()
        cy.wait(2000)
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.wait(1000)
        cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(7).click()
        cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(0).find('span').then(function($element)
        {
            length=$element.length
            if(length==1)
            {
                cy.log('disabled')

                cy.log(length)
                cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(0).find('span').click()
            }
        })
        cy.get('input[placeholder="Min value"]').eq(0).clear().type("05")
        cy.get('input[placeholder="Max value"]').eq(0).clear().type('08')

        cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(1).find('span').then(function($element)
        {
            length=$element.length
            if(length==1)
            {
                cy.log('disbaled 2')
                cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(1).find('span').click()
            }        
        })
        cy.get('input[placeholder="Min value"]').eq(1).clear().type("06")
        cy.get('input[placeholder="Max value"]').eq(1).clear().type('09')
        cy.wait(2000)

        cy.get(':nth-child(2) > .Button_button-primary__9i0Rz').click()
        
        cy.wait(2000)

    cy.log('website verification')
    cy.visit('http://testslacck.nushop.kaip.in/')
    cy.get(':nth-child(5) > a > .css-e9tj27').click()
    cy.wait(2000)
    cy.get('div[class="css-t91x6f"]').eq(1).click()
    cy.scrollTo(0,1000)
    cy.get(':nth-child(1) > .css-7xhk2y > .css-uhgfle').should('have.text','Get it delivered in 6-9 days')
    cy.wait(2000)

    cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/wjufK5-i/qt6-3HQ1')
    cy.scrollTo(0,1000)
    cy.get(':nth-child(1) > .css-7xhk2y > .css-uhgfle').should('have.text','Get it delivered in 5-8 days')
    cy.wait(3000)
    })

    it("delete delivery date",function(){

        ms.login()
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.wait(1000)
        cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
        cy.wait(2000)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(7).click()
        cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(0).find('span').then(function($element)
        {
            length=$element.length
            if(length==2)
            {
                cy.log('disabled')

                cy.log(length)
                cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(0).click()
            }
        })

        cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(1).find('span').then(function($element)
        {
            length=$element.length
            if(length==2)
            {
                cy.log('disbaled 2')
                cy.get('div[class="DisplayDelivery_margin-top__yF4T1"] div').eq(1).click()
            }        
        })

        cy.get(':nth-child(2) > .Button_button-primary__9i0Rz').click()
        
        cy.wait(2000)

    cy.log('website verification')
    cy.visit('http://testslacck.nushop.kaip.in/')
    cy.get(':nth-child(5) > a > .css-e9tj27').click()
    cy.wait(2000)
    cy.get('div[class="css-t91x6f"]').eq(1).click()
    cy.scrollTo(0,1000)
    cy.get(':nth-child(1) > .css-7xhk2y > .css-uhgfle').should('not.exist')
    cy.wait(2000)
/*
    cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/wjufK5-i/qt6-3HQ1')
    cy.scrollTo(0,1000)
    cy.get(':nth-child(1) > .css-7xhk2y > .css-uhgfle').should('not.exist')
*/
        })
        
    })
