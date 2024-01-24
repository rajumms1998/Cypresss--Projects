import { loginpage } from "./pom.cy"
const ms = new loginpage()

describe('Global theme task',function(){

    it("upload reviews",function(){

    ms.login()
    cy.get('.SideNav_sidenav-iconholder__vuWmv').eq(5).click()
    cy.get('p[class="Text_body1__jlAQm Text_subtitles-colored__s5ggG Text_ml-lg__OZiJy"]').contains('Website').click({ waitForAnimations: false })
   // cy.get('',{timeout:20_000}).click(parent)
    cy.get('a[href="/website/navigation"]').click()
    cy.get('a[href="/website/global-theme"]').click({force:true})
    //basic theme
    cy.get('button[data-sd-event="websitePreset"]').eq(0).click()
    cy.get('button[data-sd-event="saveGlobalThemeWebsitePresets"]').click()
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click({force:true})
    cy.wait(4000)
    cy.get('div[class="FullScreenToggle_btn-container__LB5WS"]').click()
    cy.get('div[class="FullScreenToggle_display-button__MxW6o FullScreenToggle_preview-visible-button__u0sIO"] span svg').click()
    cy.wait(3000)
    cy.get('.FullScreenToggle_preview-full-screen-button__JFn6e').click()
    cy.wait(2000)
    //Line theme
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click()
    cy.get('button[data-sd-event="websitePreset"]').eq(1).click()
    cy.get('button[data-sd-event="saveGlobalThemeWebsitePresets"]').click()
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click({force:true})
    cy.wait(4000)
    cy.get('div[class="FullScreenToggle_btn-container__LB5WS"]').click()
    cy.get('div[class="FullScreenToggle_display-button__MxW6o FullScreenToggle_preview-visible-button__u0sIO"] span svg').click()
    cy.wait(3000)
    cy.get('.FullScreenToggle_preview-full-screen-button__JFn6e').click()
    cy.wait(2000)
    //cy.get('/html/body/span[2]/script/text()').contains('basic')
    //Cosmetic theme
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click()
    cy.get('button[data-sd-event="websitePreset"]').eq(2).click()
    cy.get('button[data-sd-event="saveGlobalThemeWebsitePresets"]').click()
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click({force:true})
    cy.wait(4000)
    cy.get('div[class="FullScreenToggle_btn-container__LB5WS"]').click()
    cy.get('div[class="FullScreenToggle_display-button__MxW6o FullScreenToggle_preview-visible-button__u0sIO"] span svg').click()
    cy.wait(3000)
    cy.get('.FullScreenToggle_preview-full-screen-button__JFn6e').click()
    cy.wait(2000)
    
    //Glass theme
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click()
    cy.get('button[data-sd-event="websitePreset"]').eq(2).click()
    cy.get('button[data-sd-event="saveGlobalThemeWebsitePresets"]').click()
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click({force:true})
    cy.wait(4000)
    cy.get('div[class="FullScreenToggle_btn-container__LB5WS"]').click()
    cy.get('div[class="FullScreenToggle_display-button__MxW6o FullScreenToggle_preview-visible-button__u0sIO"] span svg').click()
    cy.wait(3000)
    cy.get('.FullScreenToggle_preview-full-screen-button__JFn6e').click()
    cy.wait(2000)
    //reset to Line theme
    cy.get('h5[class="heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').click()
    cy.get('button[data-sd-event="websitePreset"]').eq(1).click()
    cy.get('button[data-sd-event="saveGlobalThemeWebsitePresets"]').click()
        
    })
    })
