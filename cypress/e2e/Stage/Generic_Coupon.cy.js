import { slowCypressDown } from "cypress-slow-down";
import { LoginPage } from "../Stage/DashPom.cy";
import { rando } from "../Stage/random.cy";

const ms = new LoginPage();
const ms1 = new rando(); //// work on it
 // slowCypressDown(1000)   

    describe("Creating thr Generic Coupon and its validation on website", () => {
    
    it("Coupon_Creation from Dashboard ", () => {

    ms.loginnnnnn();
    
    cy.wait(2000);
    cy.visit("http://v2.nushop-dashboard.kaip.in/offers"); 
    cy.wait(2000);

    cy.get(".Text_subtitles-colored__s5ggG > .tab").click();

    cy.get("input[placeholder='Enter title']").click().type("CouponTitle");
    cy.log(ms1.Coupon_Code);
    cy.get("input[placeholder='Enter subtitle']").click().type("subtitle");
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .Input_input-group__c6y0f > .rs-input')
    .type(`couponcode${ms1.Coupon_Code}`);

    cy.xpath(
      "//*[@id='root']/section/section/div[2]/div/section/div[2]/div[2]/div/div[2]"
    ).click(); // for dropdown click

    cy.get(
      ".rs-picker-select-menu-item.rs-picker-select-menu-item-active.rs-picker-select-menu-item-focus"
    ).click();

    cy.get(
      ":nth-child(3) > .rs-flex-box-grid-item > .Input_input-group__c6y0f > .rs-input"
    )
      .click()
      .type("50");

    cy.get("input[placeholder='dd-mm-yyyy']").click().type("27-10-2024");

    cy.get("input[value='1']").click().clear().type("100");

    cy.get(".rs-picker-toggle-placeholder > .Text_body2__0FftJ").click();

    cy.xpath("/html/body/div[2]/div[2]/div[3]/span").click();
    cy.get(".Flexbox_flex-row__aKbHb > .Button_button-primary__9i0Rz").click();

    cy.log("Coupon Creation is Successfully Done");
    cy.screenshot()
      });

     it("Validating the Created Coupon and apply the coupon", function () {
    cy.visit("http://glasstheme.nushop.kaip.in/", { failOnStatusCode: false });
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .css-nfl1fu > .css-1gt500f > :nth-child(2) > a > .css-1l6x5qr"
    ).click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .css-1bkty0y").click();
    cy.get(".css-1jt1w2w").click();
    cy.get(".css-1jt1w2w").click();
    cy.get(".css-1vw8438").click().type("8309333678");
    cy.get(".css-1jt1w2w").click();
    cy.get(":nth-child(2) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q").type(
      "rajuuu"
    );
    cy.get(":nth-child(3) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q").type(
      "517423"
    );
    cy.get(":nth-child(4) > .css-pqx7va > .css-1mnj8i4 > .css-5tfm2q").type(
      "101"
    );
    cy.get(".css-kkzpvp").type(
      "Entering the Full Address in the Full Address Feiled "
    );
    cy.wait(3000);
    cy.get(".css-1jt1w2w").click();
    cy.get(".css-18gqd4h").click(); // offers Page
    cy.get(".css-8ethid");
    cy.get('.css-ql9309').click().type(`couponcode${ms1.Coupon_Code}`)
    
    cy.get('.css-elnhgp').click(); // apply button 

    cy.get(".css-7yd8vv > :nth-child(4)").then(($text) => {
      const offrestext = $text.text();    // getting the text in payment page 
      cy.log(offrestext);
      cy.screenshot()
    });

    cy.get(".css-1l968gz").click();
    cy.wait(4000);
    cy.get("#cod").click();
    cy.wait(2000)
    cy.get(".css-1l968gz").click();
    cy.wait(2000);
    let i = 1;
    
    while (i <= 4) {
      cy.get(":nth-child(" + i + ") > .css-tpv9t0")
        .click()
        .type("0");
      i++;
    }
      cy.get(".css-1jt1w2w").click();

      cy.get(".css-19qf114").click();
      cy.get(":nth-child(4) > .css-1d16uxs").then(($element) => {
      const view = $element.text();
      cy.log(view);
      cy.screenshot();
    });
  });
});
