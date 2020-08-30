describe('Test pythogoras theoerm illustraTION', function () {
  it('Test correct number of grey dots on  first screen', function () {
    cy.viewport(1920, 949);

    cy.visit('http://localhost:3000/?a=3&b=4&c=5');

    cy.get('body').contains('5 dots');
    cy.get('.Home_grey__152cm').should('have.length', 5);

    cy.get('.Home_four__2tDGD a').click();
  });

  it('Test second screen has square of black dots', function () {
    cy.get('.Home_black__3OZ5X ').should('have.length', 9);

    cy.get('.Home_four__2tDGD a').click();
  });

  it('Test third screen has restart and correct hypotenuse', function () {
    cy.get('.Home_four__2tDGD a').contains('Restart?');

    cy.get('.Home_grey__152cm').should('have.length', 5);
  });
});
