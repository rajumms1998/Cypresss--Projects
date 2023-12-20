it ("Prod",function(){

cy.visit("https://rajuprod.shopdeck.com/collection/all-products");
// Assuming you want to get the list inside the div tag
cy.xpath('//*[@id="root"]/div/section/div/div[4]/div')
  

  .invoke('attr', 'class')
  .then((classes) => {
    // 'classes' will contain a string with all class names
    // Split the string to get an array of individual class names
    const classList = classes.split(' ');

    // Log or perform actions with the class names
    classList.forEach((className) => {
      cy.wait(2000)
      cy.scrollTo("bottom")
      //cy.scrollIntoView(CSSLayerBlockRule)
      cy.log(className.length);
      cy.log(classList.length)
      
      // You can perform further actions with each class name if needed
    });
  });






})