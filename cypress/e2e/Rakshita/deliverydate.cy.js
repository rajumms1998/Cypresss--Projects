//<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()
describe('Display Delivery date',function(){

    it("add delivery date",function(){

        ms.login()
        cy.wait(2000)
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(7).click()
        cy.get('div[data-sd-event="displayDeliveryDate"]').eq(0).find('span').then(function($element)
        {
            length=$element.length
            if(length==1)
            {
                cy.log('disabled')

                cy.log(length)
                cy.get('div[data-sd-event="displayDeliveryDate"]').eq(0).click({force: true})
            }
        })
        cy.get('input[placeholder="Min value"]').eq(0).clear().type("05")
        cy.get('input[placeholder="Max value"]').eq(0).clear().type('08')

        cy.get('div[data-sd-event="displayDeliveryDate"]').eq(1).find('span').then(function($element)
        {
            length=$element.length
            if(length==1)
            {
                cy.log('disbaled 2')
                cy.get('div[data-sd-event="displayDeliveryDate"]').eq(1).click({force: true})
            }        
        })
        cy.get('input[placeholder="Min value"]').eq(1).clear().type("06")
        cy.get('input[placeholder="Max value"]').eq(1).clear().type('09')
        cy.wait(2000)

        cy.get('button[data-sd-event="saveWebsiteDisplayDelivery"]').click()
        
        cy.wait(2000)

    cy.log('website verification')
    cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/81FuB9Gn/MhZrnPru')
    cy.scrollTo(0,1000)
    cy.wait(1000)
    cy.get('p[class="css-13dsnc9"]').eq(0).should('have.text','Get it delivered in 6-9 days')
    cy.wait(2000)

    cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/wjufK5-i/qt6-3HQ1')
    cy.scrollTo(0,1000)
    cy.wait(1000)
    cy.get('p[class="css-13dsnc9"]').eq(0).should('have.text','Get it delivered in 5-8 days')
    cy.wait(3000)
    })

    it("delete delivery date",function(){

        ms.login()
        cy.wait(2000)
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(7).click()
        cy.get('div[data-sd-event="displayDeliveryDate"]').eq(0).find('span').then(function($element)
        {
            length=$element.length
            if(length==2)
            {
                cy.log('disabled')
                cy.log(length)
                cy.get('div[data-sd-event="displayDeliveryDate"]').eq(0).click()
            }
            else{
                cy.log('else disabled 1')
            } 
        })

        cy.get('div[data-sd-event="displayDeliveryDate"]').eq(1).find('span').then(function($element)
        {
            length=$element.length
            if(length==2)
            {
                cy.log('disbaled 2')
                cy.get('div[data-sd-event="displayDeliveryDate"]').eq(1).click()
            }  
            else{
                cy.log('else disabled 2')
            }      
        })
        cy.wait(2000)
        cy.get('button[data-sd-event="saveWebsiteDisplayDelivery"]').click()
        
        cy.wait(2000)

        cy.log('website verification')
        cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/81FuB9Gn/MhZrnPru')
        cy.scrollTo(0,1000)
        cy.get('p[class="css-13dsnc9"]').eq(0).should('not.have.text','Get it delivered in 6-9 days')
        cy.wait(2000)
/*
    cy.visit('http://testslacck.nushop.kaip.in/Preemie-Baby-Swing-Cradle-with-Mosquito-Net-Spring-and-Metal/catalogue/wjufK5-i/qt6-3HQ1')
    cy.scrollTo(0,1000)
    cy.get(':nth-child(1) > .css-7xhk2y > .css-uhgfle').should('not.exist')
*/
        })
        
    })
