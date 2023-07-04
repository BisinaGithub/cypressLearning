describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('/');
    cy.clearAllCookies;
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
  });

  context('Page Info', () => {

    context('First Section: Hero', () => {
      it('the h1 contains the correct text', () => {
        cy.getByData("hero-heading").contains(
          "Testing Next.js Applications with Cypress"); //custom command criado
      })
      it('the features on the section are correct', () => {
        cy.get('dt')//retorna 3 objetos
        .eq(0)//especifica o primeiro do array a esquerda
        .contains(/4 courses/i); //notação REGEX para case insensitive
        cy.get('dt').eq(1).should('have.text',"25+ Lessons");
        cy.get('dt').eq(2).should('have.text','Free and Open Source');
      });  
    });

    context('Second Section: Learning', () => {
      it('the h1 contains the correct text', () => {
        cy.get('.features .mt-2').should('have.text',"What you'll learn");
      })
      it('the features on the section are correct', () => {
        cy.get('.grid .pt-6')
          .eq(0).find('h3').should('have.text',"Prepare your Testing Mindset");
        cy.get('.grid .pt-6')
          .eq(1).find('h3').should('have.text',"Learn What to Test");
        cy.get('.grid .pt-6')
          .eq(2).find('h3').should('have.text',"Debug Failing Tests Efficiently");
        cy.get('.grid .pt-6')
          .eq(3).find('h3').should('have.text',"Learn Database Initialization & Seeding");
        cy.get('.grid .pt-6')
          .eq(4).find('h3').should('have.text',"Understand Different Testing Types");
        cy.get('.grid .pt-6')
          .eq(5).find('h3').should('have.text',"Apply your Knowledge");
      });  
    });
  });
  context('Courses Routing', () => {
      
    it('First Course Routing', () => {
      cy.getByData('course-0')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/testing-your-first-application')
    });
    it('Second Course Routing', () => {
      cy.getByData('course-1')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/testing-foundations')
    });
    it('Third Course Routing', () => {
      cy.getByData('course-2')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/cypress-fundamentals')
    });
  });
  
})