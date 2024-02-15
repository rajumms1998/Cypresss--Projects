
 
import { LoginPage } from "../../POM/DashPom.cy";
const ms = new LoginPage();


describe('Creating the Collections', () => {
 
    it('Creating the Manual collections ', () => {
 
    ms.loginnnnnn()
    cy.wait(2000)

    // cy.visit ('https://pro.shopdeck.com/website/collection/create-collection')
      cy.visit("http://v2.nushop-dashboard.kaip.in/website/collection/create-collection");
      cy.wait(3000)
      cy.contains("Select Products").click();
      for (let i = 1; i <= 3; i++) {
        cy.get(`:nth-child(${i}) > .CatalogueSelectorCard_card-wrapper__GF4rc > .Button_button-primary__9i0Rz`).click();
      }
      
        cy.get('.Input_input-group__c6y0f > .rs-input').type("Collections Testing")
    
       //  cy.get('.Flexbox_mt-lg__HQln6 > .Button_button-primary__9i0Rz').click();
      
        cy.log("Collections Has been Created Successfully");


       
           cy.visit("http://v2.nushop-dashboard.kaip.in/website/collection/collection-list")
          //cy.visit("https://rajuprod.shopdeck.com/Collections-Testing/collection/")
        
             cy.get(':nth-child(1) > .rs-col-xl-5.rs-col-md-5 > .Text_body2__0FftJ').invoke('text')
             .then((val)=>{

            cy.log(val);

            cy.visit("http://glasstheme.nushop.kaip.in/Collections-Testing/collection/")
            cy.url().then((url) => {
             const newUrl = url + val;
             cy.visit(newUrl);


                 });
             })
  
                })
    
         });
    
  



    
  


