import { login } from '../support/allFunction/generalFunction';

describe('Login test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login  passes', () => {
    login('0918517610', 'testtest');
    
  });

});