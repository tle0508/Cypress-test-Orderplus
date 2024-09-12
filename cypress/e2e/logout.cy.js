import {logout } from '../support/allFunction/generalFunction';

describe('Login test dev', () => {

  beforeEach(() => {
    cy. viewport(1290, 900);
  });

  it('login  passes', () => {
    logout();
    
  });

});