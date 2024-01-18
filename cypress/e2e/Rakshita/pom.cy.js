export class loginpage {

    login(){

    cy.visit('http://v2.nushop-dashboard.kaip.in/',{failOnStatusCode:false}) 
    cy.get('.rs-input').type('7777799999')
    cy.get('span[class="rs-ripple-pond"]').click({force: true})
    //cy.wait(15000)
    cy.get('input[type="password"]').type('0000')
    cy.get('span[class="rs-ripple-pond"]').click({force: true})
    cy.wait(1000)

}


}