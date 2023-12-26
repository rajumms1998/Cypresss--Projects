
export class rando
 {
    customer_login_for_bumper;
    Coupon_Code;
    randomMobile;
    slack;
    
constructor()
         {
   this.Coupon_Code = this.Coupon_Code_generator();
   this. customer_login_for_bumper= this.generateMobileNUmber();
  // this.slack = this.sendSlackAlert();
      }

  generateMobileNUmber() {
    let startingNumber = [6, 7, 8, 9];
    const randomNumberUptoArrayLength = Math.floor(Math.random() * (4 - 1) + 1);
    let mobilenumber = startingNumber[randomNumberUptoArrayLength] + ''
    let restOfNumber = Math.floor(Math.random() * 1000000000)
    return mobilenumber + restOfNumber
  }
  Coupon_Code_generator () {
    //let startingNumber = [0,1];
    const randomNumberUptoArrayLength = Math.floor(Math.random() * (4 - 1) + 1);
    let mobilenumber =[randomNumberUptoArrayLength] + ''
    let restOfNumber = Math.floor(Math.random() * 100)
    return mobilenumber + restOfNumber
  }

  //  sendSlackAlert = (message) => cy.request('https://hooks.slack.com/services/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', {
  //   method: 'POST',
  //   body: JSON.stringify({ text: message }),
  //   headers: { 'Content-Type': 'application/json' }
  
  // })


        
}