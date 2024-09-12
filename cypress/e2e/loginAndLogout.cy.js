
import { login, logout }  from '../support/allFunction/generalFunction';

describe('Login and logout test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login and logout passes', () => {
    
    login('0918517610', 'testtest');
    logout();
  });

});
