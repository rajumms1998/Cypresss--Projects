///<reference types="cypress"/>
import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Timer tests',function(){

    it("add fake timer",function(){

        ms.login()
        cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
        cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
        cy.wait(1000)
        cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
        cy.wait(2000)
        cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(4).click()
        cy.get('div[class="Timer_show-timer-chipbutton-style__tqQmC"] div div span').then(function($element)
        {
            length=$element.length
            if(length==1)
            {
                $element.click()
            }
            cy.get('input[type="number"]').eq(0).clear().type('030')
            cy.get('input[type="number"]').eq(1).clear().type('keys.clear').type('090')
            cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
        })
        cy.wait(2000)
        cy.log('website verification')
        cy.visit('http://testslacck.nushop.kaip.in/')
    
        cy.get(':nth-child(5) > a > .css-e9tj27').click()
        cy.wait(2000)
        cy.get('div[class="css-t91x6f"]').eq(1).click()
        cy.scrollTo(0,1000)
       
        /**
          cy.get('p[class="css-icffg0"]').eq(0).then(($value)=>{
        const sep=$value.text().trim().replace(',',"").replace('₹',"")
        cy.log(sep)
          })
        
        cy.get('h3[class="css-af6l62"]').eq(0).then(($value)=>{
            const cop=$value.text().trim().replace(',',"").replace('₹',"")
            cy.log(cop)
            })
          
        **/
        cy.get('p[class="css-18kkggm"]').eq(0).should('have.text','01')
        cy.get('p[class="css-18kkggm"]').eq(1).should('have.text','29')
        cy.wait(2000)
        })

        it("verify timer for logged in website user",function(){
           cy.log('website verification')
            /*cy.visit('http://testslacck.nushop.kaip.in/')
            cy.get(':nth-child(5) > a > .css-e9tj27').click()
            cy.wait(2000)
            cy.get('div[class="css-t91x6f"]').eq(1).click()
            cy.scrollTo(0,1000)
            cy.get('p[class="css-18kkggm"]').eq(0).should('have.text','01')
            cy.get('p[class="css-18kkggm"]').eq(1).should('have.text','29')
            cy.wait(2000)*/
            cy.log('logged in user')
            cy.visit('http://testslacck.nushop.kaip.in/')
            cy.get('p[class="css-1tu2nel"]').eq(0).click()
            cy.get('input[class="css-r5asnw"]').type('9999000099')
            cy.get('.css-2f3j1g').click()
            cy.get('div[class="css-9zbeb5"]').each(($el, index, $list) =>
            {
                cy.get('div[class="css-9zbeb5"]').eq(index).type('0')
            })
            cy.get('div[class="css-2f3j1g"]').click()
            cy.wait(2000)
            cy.get(':nth-child(5) > a > .css-e9tj27').click()
            cy.wait(2000)
            cy.get('div[class="css-t91x6f"]').eq(1).click()
            cy.scrollTo(0,1000)
            cy.get('p[class="css-18kkggm"]').should('not.exist')
            cy.wait(2000)
        })

        it("disable timer",function(){

            ms.login()
            cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
            cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
            cy.wait(1000)
            cy.get('[href="/website/web-configuration"] > .Text_body2__0FftJ',{timeout:20_000}).click(parent)
            cy.wait(2000)
            cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(4).click()
            cy.get('div[class="Timer_show-timer-chipbutton-style__tqQmC"] div div span').then(function($element)
            {
                length=$element.length
                if(length==2)
                {
                    $element.click()
                }
                cy.get('.Card_card__DkrpZ > .Button_button-primary__9i0Rz').click()
            })
            cy.wait(2000)
            cy.log('website verification')
            cy.visit('http://testslacck.nushop.kaip.in/')
        
            cy.get(':nth-child(5) > a > .css-e9tj27').click()
            cy.wait(2000)
            cy.get('div[class="css-t91x6f"]').eq(0).click()
            cy.scrollTo(0,1000)
            cy.get('p[class="css-18kkggm"]').should('not.exist')
            cy.wait(2000)
            })

    })


