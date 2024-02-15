describe('Check images on a website', () => {
    it('Should have images on the page', () => {
      // Visit the website
      cy.visit('http://lucky.nushop.kaip.in/Silver-Toned---silver-Oxidised-Contemporary-Drop-Earrings/catalogue/2PDK5PUf/fi36XQ0-');
  
      // Get all images on the page
     //  cy.get('#root > div > section > div > div > div.css-z930b2-CatalogueCoreElements > div > div > div.css-bjn8wh > div > div:nth-child(2) > div.css-fd9tbh > img').should('exist');
cy.xpath("//*[@id='root']/div/section/div/div/div[1]/div/div/div[1]").should("exist") ;
   // You can also check the number of images
      cy.xpath("//*[@id='root']/div/section/div/div/div[1]/div/div/div[1]").should('have.length.gt', 0);
    });
  });
  