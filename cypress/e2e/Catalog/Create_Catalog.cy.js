///<reference types ="cypress"/>
///<reference types = "cypress-xpath"/>
import 'cypress-file-upload' 

import { LoginPage } from "../DashPom.cy"



const ms = new LoginPage();

describe("Catalog_Products Tab",function(){
    it('Catalog_Creation', () => {
        ms.loginnnnnn();
        cy.wait(2000)
        cy.visit("http://43.205.92.177/product/manage/upload");
        cy.xpath("//*[@id='root']/section/section/section/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div[1]/input").click({force: true}).attachFile('catalogupload.csv')
        cy.get('.button-link').click();
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_align-middle__-J0b5.rs-flex-box-grid-center > :nth-child(1)').type("0")
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_align-middle__-J0b5.rs-flex-box-grid-center > :nth-child(2)').type("0")
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_align-middle__-J0b5.rs-flex-box-grid-center > :nth-child(3)').type("0")
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_align-middle__-J0b5.rs-flex-box-grid-center > :nth-child(4)').type("0")
        cy.get('.rs-modal-footer > .Button_button-primary__9i0Rz').click();

        // cy.get('.ButtonGroup_buttongroup-container__Q\+BiA > :nth-child(2)').click();
       cy.contains("Reports").click();


       })
    
    })


    it.only('Test 2 ', () => {
    cy.log("Case 2 in catalog creation file");

    })




