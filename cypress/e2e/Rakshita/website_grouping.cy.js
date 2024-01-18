describe('website grouping',function(){

    it("verify grouping is present",function(){
    cy.visit('https://rakbh79sa.shopdeck.com/New-WomenS-Ready-To-Wear-Yellow-Floral-Georgette-Top-Bottom/catalogue/WQBY8jIV/zeimk2Nb')
    cy.scrollTo(0,1000)
    //if(cy.get('div[class="css-m24al9"]').should('be.exist')==true)
    //{
        cy.get('div[class="css-m24al9"] div img').each(($el, index, $list) =>{
            cy.log('iterating')
            $el.click({force:true}) 
            cy.wait(5000)
      //  })
    })
})
})
        
 