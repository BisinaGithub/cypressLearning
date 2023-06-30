describe('home page', () => {
  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('http://localhost:3000');
  });

  context('Hero section', () => {
    it('the h1 contains the correct text', () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"); //custom command criado
    })
    it('the features on the homepage are correct', () => {
      cy.get('dt')//retorna 3 objetos
      .eq(0)//especifica o primeiro do array a esquerda
      .contains(/4 courses/i); //notação REGEX para case insensitive
      cy.get('dt').eq(1).contains("25+ Lessons");
      cy.get('dt').eq(2).contains(/free and open source/i);
    });
  });
  context('Courses section', () => {
      
    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/testing-your-first-application')
    });
    it('Course: Testing Foundations', () => {
      cy.getByData('course-1')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/testing-foundations')
    });
    it('Course: Cypress Fundamentals', () => {
      cy.getByData('course-2')
        .find('a')
        .contains('Get started')
        .click();
      cy.location('pathname').should('equal','/cypress-fundamentals')
    });
  });
  
})