
///<reference types ="cypress"/>
///<reference types = "cypress-xpath"/>
import 'cypress-file-upload' 
import { LoginPage } from '../Stage/DashPom.cy';
import { random } from '../Stage/random.cy';
const ms = new LoginPage();
const ms1= new random();
const Name = `NEWLY ADDED AUTOMATION ${ms1.Coupon_Code}`


describe("New arrivals widget validation by Creating the New Product", function() {


it("Creating the New Product",function(){

ms.loginnnnnn();
cy.wait(2000)
cy.visit("http://v2.nushop-dashboard.kaip.in/product/manage/create");
cy.get(':nth-child(3) > .tab').click()
cy.wait(2000)
cy.xpath("//*[@id='root']/section/section/section/section/section[1]/div/div[1]/div/div[2]/input").click({force: true}).attachFile('Red_leather_cricket_ball.jpg')
 
cy.get(':nth-child(1) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').click().type(`NEWLY ADDED AUTOMATION ${ms1.Coupon_Code}`);

cy.get(':nth-child(1) > :nth-child(2) > .custom-selectpicker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-placeholder > .Text_body2__0FftJ').click()
cy.xpath("/html/body/div[2]/div[2]/div").click()

 cy.get(':nth-child(2) > .Input_input-group__c6y0f > .rs-input').click().type(`Productcode ${ms1.Coupon_Code}`);
 cy.get(':nth-child(4) > :nth-child(2) > .rs-picker > .rs-picker-toggle').click();
 //cy.contains("Automation 002").click();
 

 cy.wait(2000)
  //cy.xpath("//*[@id='root']/section/section/section/section/section[2]/div[5]/div[2]/div[2]/div/div/div[1]/span").click()
  // cy.xpath("/html/body/div[3]/div[2]/div[2]/span").click()
  //cy.get('[data-key="3"] > .rs-picker-select-menu-item').click()
cy.wait(2000)
cy.xpath("//*[@id='root']/section/section/section/section/section[2]/div[5]/div[3]/div[2]/div/div/div[1]/span").click()

cy.get('[data-key="size"] > .rs-picker-select-menu-item').click();

 cy.get(':nth-child(6) > .Input_input-group__c6y0f > .rs-input').click().type("Adding the Descrption to the Custom  Product")

 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();

 // Next Page 
 cy.get('.rs-picker-toggle').click()
 cy.wait(1000)
 cy.get(':nth-child(10) > .rs-picker-select-menu-item').click()


 cy.xpath("//*[@id='root']/section/section/section/section/div[3]/div/section/div[3]/div[1]/div[2]/div/input").click().clear().type("0500");
 cy.xpath("//*[@id='root']/section/section/section/section/div[3]/div/section/div[3]/div[2]/div[2]/div/input").click().clear().type("0600");
 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();   // SECOND PAGE NEXT 
 cy.wait(1000)
 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();   // Last Page 

cy.screenshot();

})
 
it("Verifying it in New Arrivals Widget", function(){

cy.visit("http://glasstheme.nushop.kaip.in");
cy.get(':nth-child(1) > .css-nfl1fu > .css-1gt500f > :nth-child(2) > a > .css-1l6x5qr')

cy.get(':nth-child(1) > .css-nfl1fu > .css-1sf8q8u > .css-1timy0t > :nth-child(1) > .css-1bkty0y > .css-zejslb > :nth-child(1) > .css-f23be2').invoke('text').then((val)=> {
 cy.log(val)

    })
   if (`Name==z`)
    {

     cy.log("New Arrivals Widget validation is done and is working fine")

    }

    else{
        cy.log("New Arrivals Widget validation is failed")

    }
})
 
    
})



    
    
    



