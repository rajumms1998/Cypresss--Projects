

///<reference types="cypress"/>



describe('Customer_Journey',function() {
    it("Ordering the Bag Products",function() {
        cy.log("passsss")

        cy.visit('http://lucky.nushop.kaip.in',{failOnStatusCode:false}) 
        cy.wait(3000)
        cy.each([2,3,4]) ((index) => {
           // cy.xpath("//*[@id='main']/section[1]/div/div[2]/div/div[2]/div/a/div[2]/div/button").click()
           cy.get(':nth-child(1) > .css-nfl1fu > .css-1sf8q8u > .css-1timy0t > :nth-child(2) > .css-1bkty0y > .css-zejslb > .css-15luse1 > .css-y7l8i8').click()
           cy.xpath("/html/body/div[6]/div/div/div/div[2]/button").click()
            cy.xpath("/html/body/div[6]/div/div/div/div[2]/button").click();
            cy.wait(1000)
        })


          


        })

    })

        
        
        /*
        
        
        
        
        
        
       
        cy.get('.css-1jt1w2w').click()
        cy.get('.css-1vw8438').click().type(8309379000);
        cy.get('.css-1jt1w2w').click()
        cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu')
        cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423')
        cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101')
        cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Feiled ')
        cy.wait(3000)
        cy.get('.css-1jt1w2w').click() 
        cy.get('.css-1l968gz').click()
        cy.wait(3000)
        cy.get('#cod').click()
        cy.get('.css-1l968gz').click()
        let i=1;
        while (i<=4){
        cy.get(':nth-child('+i+') > .css-tpv9t0').click().type("0");
        i++;
        }
        cy.get('.css-1jt1w2w').click()

      */
    




    it.only("Ordering the Bag Products", function() {
        cy.log("passsss");

        cy.visit('http://lucky.nushop.kaip.in', { failOnStatusCode: false });
        cy.wait(3000);

        // Loop through each product in the array and add it to the cart
        [2, 3, 4].forEach(() => {
            // Click on the product to add it to the cart
            cy.get(':nth-child(1) > .css-nfl1fu > .css-1sf8q8u > .css-1timy0t > :nth-child(2) > .css-1bkty0y > .css-zejslb > .css-15luse1 > .css-y7l8i8').click();

            // Close any modal or overlay that might appear after adding the product
            cy.xpath("/html/body/div[6]/div/div/div/div[2]/button").click();
            cy.xpath("/html/body/div[6]/div/div/div/div[2]/button").click();
            cy.wait(1000);
        });

        // Your additional steps for filling out the checkout form and completing the order can be added here
        // For example:
        // cy.get('.css-1jt1w2w').click();
        // cy.get('.css-1vw8438').click().type(8309379000);
        // cy.get(':nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('rajuuu');
        // cy.get(':nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('517423');
        // cy.get(':nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q').type('101');
        // cy.get('.css-kkzpvp').type('Entering the Full Address in the Full Address Field');
        // cy.wait(3000);
        // cy.get('.css-1jt1w2w').click();
        // cy.get('.css-1l968gz').click();
        // cy.wait(3000);
        // cy.get('#cod').click();
        // cy.get('.css-1l968gz').click();
        // let i = 1;
        // while (i <= 4) {
        //     cy.get(':nth-child(' + i + ') > .css-tpv9t0').click().type("0");
        //     i++;
        // }
        // cy.get('.css-1jt1w2w').click();
    });




