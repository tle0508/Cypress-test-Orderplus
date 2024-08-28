
import { login, logout } from '../support/authFunctions';

describe('Login and logout test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login and logout passes', () => {
    
    login('0918517610', 'testtest');
    logout();
  });

});
