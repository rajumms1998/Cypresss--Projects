
import { LoginPage } from "../../POM/DashPom.cy";
import { random } from "../../POM/random.cy";

const login = new LoginPage();
const ms1= new random();
it("Announcement bar Creation",function(){

login.loginnnnnn();

cy.visit("http://v2.nushop-dashboard.kaip.in/website/announcement-bar/add")
cy.get('.Flexbox_mb-sm__8zp99 > .rs-flex-box-grid-item > .Input_input-group__c6y0f').type("Extra 10% off")
cy.get('.Flexbox_mt-xs__eWLPX > .rs-flex-box-grid-item > .Input_input-group__c6y0f > .rs-input').type("https://rajuprod.shopdeck.com");
cy.get(':nth-child(1) > .Flexbox_flex-column__cNkZ2 > .rs-flex-box-grid-item-24 > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox').click().type("2024-02-20 12:00:00");
cy.get('.rs-picker-toolbar-right > .rs-btn').click()
cy.get(':nth-child(2) > .Flexbox_flex-column__cNkZ2 > .rs-flex-box-grid-item-24 > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox').click().type("2024-03-24 12:00:00");
cy.get('.rs-picker-toolbar-right > .rs-btn').click()
cy.get('.rs-flex-box-grid-item > .Button_button-primary__9i0Rz').click();
cy.log("Annnouncement bar has been created Successfully");

})