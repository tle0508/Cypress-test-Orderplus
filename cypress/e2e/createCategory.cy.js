
import { createCategory } from '../support/allFunction/createCategory';
import { goToShop,logout} from '../support/allFunction/generalFunction';

describe('creates category', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('create category', () => {
    
    goToShop('dev');
    createCategory('ddddqr');
    logout();
  });
});