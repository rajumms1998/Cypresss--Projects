
import { loginpage } from "./pom.cy"
import 'cypress-file-upload'
describe('Web Config',function(){
const ms = new loginpage()
    it("web config",function(){
     ms.login()
     cy.wait(2000)
     cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
     cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
     cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
     cy.get('input[class="rs-input rs-input-md"]').eq(2).click()
     //web name field
     cy.get('input[class="rs-input rs-input-md"]').eq(0).then(($input) => {
        const oldvalue=$input.attr('value')
        cy.log(oldvalue)
        cy.get('input').eq(0).clear().type('Automation webname')

    //web desc field
    cy.get('textarea[class="rs-input rs-input-md"]').invoke('text').then((text) => {
        const olddescript=text
        cy.log(olddescript)
        cy.get('textarea[class="rs-input rs-input-md"]').clear().type('automation Description')
    
    //web prefix change 
    cy.get('input[class="rs-input rs-input-md"]').eq(7).then(($input) => {
        const oldprefix=$input.attr('value')
        cy.log(oldprefix)
        cy.get('input').eq(7).clear().type('automationweb')
    
    //website feature Butttons
    cy.get('div[class="Tooltip_tooltip-children-wrapper__n+g1q"] div').each(($el, index, $list) =>
        {
          length= $el.find('span').length
          cy.log(length)
            if(length==1)
            {
                cy.log('disabled')
                $el.click() 
                cy.wait(1000)
            }

        })

    //logo ,screen update
    cy.get('span[class="rs-uploader-file-item-btn-remove rs-btn-close"]').then($body => {
        if ($body.length > 0) {   
            $body.click()
        }
    });
    cy.get('input[type=file]').eq(0).click({force:true}).attachFile('logo.jpg')
    cy.get('input[type=file]').eq(1).click({force:true}).attachFile('favicon.png')
    cy.get('input[type=file]').eq(2).click({force:true}).attachFile('desktop_cover.jpg')
    cy.get('input[type=file]').eq(3).click({force:true}).attachFile('mobile_cover.jpg')
    cy.get('button[data-sd-event="saveWebsiteWebconfiguration"]').click()

//website verification
cy.wait(5000)
cy.visit('http://automationweb.nushop.kaip.in/')
cy.get('.css-5gxtus > a').click()
cy.get('input[class="css-5tfm2q"]').type('automation product')
cy.wait(1000)
cy.get('div[class="css-169inv6"]').eq(0).click()

//assertions
cy.url({ decode: true }).should('contain','automationweb')
//cy.get('span[class="css-qrlosd"]').eq(0).should('contain','Get this as low as')
cy.scrollTo(0,1000)
cy.wait(2000)
//cy.get('button[data-sd-event="productPageBuyNow"]').click() for prod site
cy.get('button[class="css-1jt1w2w"]').click()
cy.get('p[class="css-1w8jx56"]').should('contain','Select Size')
cy.get('.ReactModal__Overlay').click()
cy.wait(2000)
cy.scrollTo('bottom')
cy.get('.css-wfz8v5').should('contain',"Automation webname")
cy.get('.css-6ixo6n').should('contain',"automation Description")
 

//resettng values
    cy.visit('http://v2.nushop-dashboard.kaip.in/')
    cy.wait(2000)
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(6).click()
    cy.get(':nth-child(15) > :nth-child(2) > .Flexbox_flex-row__aKbHb > .Text_body1__jlAQm').click({ waitForAnimations: false })
    cy.get('a[href="/website/web-configuration"]',{timeout:20_000}).click(parent)
    cy.get('input[class="rs-input rs-input-md"]').eq(2).click()
    cy.get('input').eq(0).clear().type(oldvalue)
    cy.get('textarea[class="rs-input rs-input-md"]').clear().type(olddescript)
    cy.get('input').eq(7).clear().type(oldprefix)
    cy.get('button[data-sd-event="saveWebsiteWebconfiguration"]').click()
})
  

        })
    })
})
})
