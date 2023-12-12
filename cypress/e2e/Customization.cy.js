
import 'cypress-file-upload'
import { LoginPage } from "./DashPom.cy"




const ms= new LoginPage()

describe("customization flow",function(){

    it ("Adding the Custom add and Creating the Customized Product and Verifying in the Website ",function(){

    ms.loginnnnnn();
    cy.wait(3000)
    
    cy.visit("http://v2.nushop-dashboard.kaip.in/website/customisation-flow")
    cy.get('.Text_subtitles-colored__s5ggG > .tab').click();
    cy.get('.rs-input').click().type("Automation 001");
    // cy.get('.rs-uploader-trigger > .Flexbox_flex-column__cNkZ2').click() 
    cy.xpath("//*[@id='root']/section/section/div[2]/div/section/section/div[1]/div[2]/div/div[2]/div/div[1]/input").click({force: true}).attachFile({filePath:'Red_leather_cricket_ball.jpg',fileName:'myfile'})
    cy.get('.ChipButton_chip-button__xXNaz').click()
    
    //cy.get('.rs-flex-box-grid-item > .Button_button-primary__9i0Rz').click() // creating the custom flow 
    cy.xpath("//*[@id='root']/section/section/div[1]/div/h5[2]/span").click()
    cy.get('.rs-picker-toggle').click();
    
   cy.xpath("/html/body/div[2]/div/div[4]/span").click();
   //cy.get('.Flexbox_flex-column__cNkZ2').should('be.contain','Automation001');
   cy.log ("Custom flow is created ");
  // //*[@id="root"]/section/section/div[2]/div/section/div[1]/div[2]/div/div[3]/div/button important 
   // //*[@id='root']/section/section/div[2]/div/section/div[1]/div[2]/div/div/p
  
  const nam = cy.xpath("//*[@id='root']/section/section/div[2]/div/section/div[1]/div[2]/div")
 
if (nam.should('include.text','Automation 001')){

    cy.xpath('//*[@id="root"]/section/section/div[2]/div/section/div[1]/div[2]/div/div[3]/div/button').last().click();
       
    cy.log("pass")
}
cy.get('.ButtonGroup_selected__sK6Jj').click()
cy.wait(3000);
cy.contains("Add Template").click();
// TEXT 
cy.get('.Text_body3__jmTqb').click();
cy.wait(2000)
cy.contains("TEXT").click();
cy.get(':nth-child(2) > .Flexbox_flex-row__aKbHb > .rs-flex-box-grid-item-10 > .Input_input-group__c6y0f > .rs-input').click().type("Enter Your Text");
cy.get(':nth-child(3) > .Flexbox_flex-row__aKbHb > .rs-flex-box-grid-item-10 > .Input_input-group__c6y0f').click().type("Please Enter the Text RAJU..etc")
cy.get('.rs-input-number > .rs-input').click() .type("100");
cy.get('.ChipButton_chip-button__xXNaz > span').click();
cy.get('.rs-flex-box-grid-center > .rs-flex-box-grid-item > .rs-btn').click();

// NUMBER 
cy.wait(2000)
cy.xpath('//*[@id="root"]/section/section/div[2]/div/section/div[1]/div[2]/div/div[3]/div/button').last().click();
cy.contains("Add Template").click();
cy.get('.Text_body3__jmTqb').click();
cy.wait(2000)
cy.contains("NUMBER").click();
cy.get(':nth-child(2) > .Flexbox_flex-row__aKbHb > .rs-flex-box-grid-item-10 > .Input_input-group__c6y0f > .rs-input').click().type("Enter Your NUMBER");
cy.get(':nth-child(3) > .Flexbox_flex-row__aKbHb > .rs-flex-box-grid-item-10 > .Input_input-group__c6y0f').click().type("Please Enter the Text Eg:10..etc")
cy.get('.rs-input-number > .rs-input').click() .type("100");
cy.get('.ChipButton_chip-button__xXNaz > span').click();
cy.get('.rs-flex-box-grid-center > .rs-flex-box-grid-item > .rs-btn').click();


// Making them Live 
cy.reload()
cy.xpath('//*[@id="root"]/section/section/div[2]/div/section/div[1]/div[2]/div/div[3]/div/button').last().click();

cy.contains("Reorder Template").click()
cy.contains("Live").click().click()
cy.xpath("//*[@id='root']/section/section/div[2]/div/section[2]/div[1]/div[1]/section/div/div[3]/div/div[1]/button").click();
cy.wait(3000)
cy.xpath("//*[@id='root']/section/section/div[2]/div/section[2]/div[1]/div[2]/section/div/div[3]/div/div[1]/button").click();
cy.get('.Flexbox_flex-row__aKbHb > .Button_button-primary__9i0Rz').click();
cy.screenshot();
cy.log("Customization Flow Has Created Successfully");
});

// Adding Custom flow to the Product

it("Creating the Catalog With added Customization",function(){
 cy.visit("http://v2.nushop-dashboard.kaip.in/product/manage/list");
 cy.get(':nth-child(3) > .tab').click()
 cy.wait(2000)
 cy.xpath("//*[@id='root']/section/section/section/section/section[1]/div/div[1]/div/div[2]/input").click({force: true}).attachFile('Red_leather_cricket_ball.jpg')
 
 cy.get(':nth-child(1) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input').click().type("Customization Testing");
 cy.get(':nth-child(1) > :nth-child(2) > .rs-picker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-placeholder > .Text_body2__0FftJ')
 cy.get(':nth-child(1) > :nth-child(2) > .rs-picker > .rs-picker-toggle').click();
 cy.get('[data-key="637340803382d6329810a9c8"] > .rs-picker-select-menu-item').click();
 cy.get(':nth-child(2) > .Input_input-group__c6y0f > .rs-input').click().type("custom001");
 cy.get(':nth-child(4) > :nth-child(2) > .rs-picker > .rs-picker-toggle').click();
 cy.contains("Automation002").click();
 cy.wait(2000)
 cy.xpath("//*[@id='root']/section/section/section/section/section[2]/div[5]/div[2]/div[2]/div/div/div[1]/span").click()
// cy.xpath("/html/body/div[3]/div[2]/div[2]/span").click()
cy.get('[data-key="3"] > .rs-picker-select-menu-item').click()
cy.wait(2000)
cy.xpath("//*[@id='root']/section/section/section/section/section[2]/div[5]/div[3]/div[2]/div/div/div[1]/span").click()

cy.get('[data-key="size"] > .rs-picker-select-menu-item').click();

 cy.get(':nth-child(6) > .Input_input-group__c6y0f > .rs-input').click().type("Adding the Descrption to the Custom  Product")

 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();

 // Next Page 
 cy.get('.rs-picker-toggle-placeholder > .Text_body2__0FftJ').click()
 cy.wait(1000)
 cy.get(':nth-child(1) > .rs-picker-select-menu-item').click()


 cy.xpath("//*[@id='root']/section/section/section/section/div[3]/div/section/div[3]/div[1]/div[2]/div/input").click().clear().type("0500");
 cy.xpath("//*[@id='root']/section/section/section/section/div[3]/div/section/div[3]/div[2]/div[2]/div/input").click().clear().type("0600");
 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();   // SECOND PAGE NEXT 
 cy.wait(1000)
 cy.get('.rs-btn-toolbar > .Button_button-primary__9i0Rz').click();   // Last Page 

cy.screenshot();

     })
     

it("Verifying the Create Catalog Through Search and Placing the Order with Custom Prices",function(){

cy.visit("http://lucky.nushop.kaip.in")
//cy.xpath("//*[@id='page-header']/div[2]/div/div[1]/a/div/div/input").click().type("CUSTOMIZATION");
cy.get('.css-5gxtus').click();
cy.get('.css-5tfm2q').type("CUSTOMIZATION");
cy.wait(2000)
cy.screenshot()
cy.get('.css-169inv6').click();




    })

})






