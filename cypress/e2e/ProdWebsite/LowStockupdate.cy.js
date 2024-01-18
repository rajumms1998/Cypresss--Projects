import { LoginPage } from "../Stage/DashPom.cy"

const ms = new LoginPage();

describe("Checking the low stock products and Updating its quantity", () => {
    it("Low stock Update", () => {
    
ms.loginnnnnn();
cy.visit("http://v2.nushop-dashboard.kaip.in/product/low-stock-products");
cy.get('.custom-selectpicker > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-value').click();
cy.get('body > div.rs-anim-fade.rs-anim-in.rs-picker-select-menu.rs-picker-menu.placement-left-start > div.rs-picker-select-menu.rs-picker-select-menu-items > div:nth-child(3)').click();
cy.get(':nth-child(1) > .LowStockProduct_number-label-group__zOupk > .InputNumber_input-group__4wC0i > .rs-input-number > .rs-input').click().clear().type("25");
cy.get('.rs-flex-box-grid-item > .Button_button-primary__9i0Rz').click()


    









    })
})