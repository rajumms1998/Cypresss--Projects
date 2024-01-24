import { LoginPage } from "../Stage/DashPom.cy";
import { slowCypressDown } from "cypress-slow-down";
const raju = new LoginPage()

it ("Testimonials Creation and Product image validation",function(){
//slowCypressDown(2000)
raju.prodlogin()
cy.wait(3000)
cy.visit ('https://pro.shopdeck.com/website/testimonials/list')
cy.wait(5000)
cy.get('.Text_subtitles-colored__s5ggG > .tab').click()

const sequentialValues = ['001', '002', '003', '004'];

cy.get(':nth-child(2) > .rs-input').each((inputField, index) => {
    
    const Testimonialname = cy.wrap(inputField).type("Testimonial"+sequentialValues[1]);

    cy.get(':nth-child(12) > .rs-input').click().type("3")
    cy.get(':nth-child(14) > .rs-input').click().type("In conclusion, thank you for creating such a fantastic product. I'm genuinely impressed, and I look forward to exploring more ...")
    
    
    
   cy.get('.Flexbox_flex-row__aKbHb > .Button_button-primary__9i0Rz').click()
  
    });
});

  it("Verifying it from Website", function(){
  cy.visit("https://rajuprod.shopdeck.com")
  cy.get('.css-j4o0ms').click()
  const x = cy.get('.css-e8nt7k > .css-1iqd3x2')
    // Access the element and perform assertions or conditions
    if (x.contains("Womens Clothing ")){
      cy.log('Element is visible');
    } else {
    cy.log('Element is not visible');
    }





  })





  