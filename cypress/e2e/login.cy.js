import { login } from '../support/authFunctions';

describe('Login test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login  passes', () => {
    login('0918517610', 'testtest');
    
  });

});