
import { goToShop,logout} from '../support/allFunction/generalFunction';

describe('goToShop test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login  passes', () => {
    goToShop('dev')
    logout();
  });

});