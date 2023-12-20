
export class LoginPage {


    number;
    constructor()
         {
    this.number = "9876543211";
    }
    
    loginnnnnn(){
    
    cy.visit("http://43.205.92.177",{failOnStatusCode:false})
    cy.wait(2000)
    cy.get('.rs-input').type(this.number)
    cy.get('.Button_button-primary__9i0Rz').click()
    cy.xpath('//*[@id="root"]/main/div/div/div/div[2]/div[1]/input').click().type("0000")
    cy.get('.Button_button-primary__9i0Rz').click()
    
   }



   }


