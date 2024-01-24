
it('size chart image check',()=>
{
//cy.visit('https://rajuprod.shopdeck.com/DW-4149-PRIYA-BLUE/catalogue/0Qjutf_m/xy80854V')
cy.visit('https://jerseykart.in/Paris-Saint-Germain-Home-23-24-Full-Sleeve-Jersey/catalogue/TtJioqrR/nODvn8tD')
// Using Cypress command to get an element by XPath
//cy.xpath('//*[@id="root"]/div/section/div/div/div[1]/div/div/div[1]/div/div[2]/div[1]/img').invoke('width').should('eq', '100');

//
  //Get and assert width
  //cy.wrap($element).invoke('width').focus
  cy.get('div[class="css-fd9tbh"]').each(($el, index, $list) =>
  {
    cy.get('.css-1fewev7').eq(index).then(($element) => {
    cy.wrap($element).invoke('height').should('eq', 96);
  })
  

  // Get and assert height
  
})
})
