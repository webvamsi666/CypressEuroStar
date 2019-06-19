/// <reference types="Cypress" />

describe("Testing of Eutostar", () => {

    it("login application", () => {

        cy.visit("https://www.eurostar.com/uk-en");
        cy.contains("Login").click();
        cy.url().should("include", "/login");
        cy.get('#form-username').type("vv@cc.com");
        cy.get('#form-password').type("password");
        cy.get('.form__container--inner.form__action--wrapper > .form__action').click();
        cy.get('.global__feedback').should("include", "/Sorry, we don't recognise that username")

    } )

})