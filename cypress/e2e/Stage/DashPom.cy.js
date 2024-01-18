
export class LoginPage {

    prodnumber;
    number;
    constructor()
         {
    this.number = "9876543211";
    this.prodnumber="8309333476";
    }
    
    loginnnnnn(){
    
    cy.visit("http://v2.nushop-dashboard.kaip.in",{failOnStatusCode:false})
    
    cy.wait(2000)
    cy.get('.rs-input').type(this.number)
    cy.get('.Button_button-primary__9i0Rz').click()
    cy.xpath('//*[@id="root"]/main/div/div/div/div[2]/div[1]/input').click().type("0000")
    cy.get('.Button_button-primary__9i0Rz').click()
    
   }

prodlogin(){

     cy.visit("https://pro.shopdeck.com",{failOnStatusCode:false})
    
     cy.wait(2000)
     cy.get('.rs-input').type(this.prodnumber)
     cy.get('.Button_button-primary__9i0Rz').click()

    // cy.xpath('//*[@id="root"]/main/div/div/div/div[2]/div[1]/input').click().type("0000")
    cy.wait (15000)
     cy.get('.Button_button-primary__9i0Rz').click()






}

   }


