describe('website grouping',function(){

    it("verify grouping is present",function(){
    cy.visit('https://rakbh79sa.shopdeck.com/New-WomenS-Ready-To-Wear-Yellow-Floral-Georgette-Top-Bottom/catalogue/WQBY8jIV/zeimk2Nb')
    cy.scrollTo(0,200)
    if(cy.get('div[class="css-m24al9"]').should('be.exist')==true)
    {
        cy.get('div[class="css-m24al9"] [class="css-owp4sx"]').each(($el, index, $list) =>{
            cy.get('div[class="css-m24al9"] [class="css-owp4sx"]').eq(index).click() 
            cy.wait(5000)

        })
    }
    
    })
})