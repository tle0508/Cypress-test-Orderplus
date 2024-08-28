
import { goToShop } from '../support/authFunctions';

describe('Login test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login  passes', () => {
    goToShop();
    
  });

});