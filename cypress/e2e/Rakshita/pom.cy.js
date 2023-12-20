export class loginpage {

    login(){

    cy.visit('https://dashboard.preprod.blitzshopdeck.in/',{failOnStatusCode:false}) 
    cy.get('.rs-input').type('8892049515')
    cy.get('span[class="rs-ripple-pond"]').click({force: true})
    cy.wait(15000)
    //cy.get('input[type="password"]').type('0000')
    cy.get('span[class="rs-ripple-pond"]').click({force: true})
    cy.wait(1000)

}


}