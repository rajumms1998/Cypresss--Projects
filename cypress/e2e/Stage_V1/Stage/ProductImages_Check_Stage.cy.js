

  it('Product images check',function(){

  cy.visit('https://rajuprod.shopdeck.com/DW-4149-PRIYA-BLUE/catalogue/0Qjutf_m/xy80854V')
  
    cy.get('div[class="css-fd9tbh"]').each(($el, index, $list) =>
       {
      cy.get('.css-1fewev7').eq(index).then(($element) => {
        cy.scrollTo(0.1000)
      cy.wrap($element).invoke('height').should('eq', 96);
     
         })
   
      })

    });
  

   


