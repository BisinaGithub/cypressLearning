describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('/');
    cy.clearAllLocalStorage();
  });

  context('Page Info', () => {

    context('First Section: Hero', () => {
      it('Title contains the correct text', () => {
        cy.getByData("hero-heading")
          .contains(
          "Testing Next.js Applications with Cypress"); //custom command criado
      })
      it('Subtitle contains the correct text', () => {
        cy.getByData('hero-heading')
          .next()
          .should('have.text',
          "Using this Next.Js Application to train my cypress knowledge inside an existing project");
      });
      it('the features on the section are correct', () => {
        cy.get('dt')//retorna 3 objetos
        .eq(0)//especifica o primeiro do array a esquerda
        .contains(/4 courses/i); //notação REGEX para case insensitive
        cy.get('dt').eq(1).should('have.text',"25+ Lessons");
        cy.get('dt').eq(2).should('have.text','Free and Open Source');
      });  
    });

    context('Second Section: Learning', () => {
      it('Title contains the correct text', () => {
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

    context('Third Section: Course 0', () => {
      it('Title contains the correct text', () => {
        cy.getByData('course-0').find('[data-test=course-title]')
          .should('have.text',"Testing Your First Next.js Application")
      });
      it('Subtitle contains the correct text', () => {
        cy.getByData('course-0').find('[data-test=course-description]')
          .should('have.text',
          "How to test a Next.js e-commerce app with Cypress.");
      });
      it('the features in the section are correct', () => {
        cy.getByData('course-0')
        .find('[data-test=lesson-0]')
        .should('have.text',"App Install and Overview")
        .next()
        .should('have.text',"Installing Cypress and writing our first test")
      });
    });
    context('Fourth Section: Course 1', () => {
      
    });
    context('Fifth Section: Course 2', () => {
      
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