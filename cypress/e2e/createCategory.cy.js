
import { createCategory } from '../support/allFunction/createCategory';
import { goToShop } from '../support/allFunction/generalFunction';
describe('creates prder test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('create category', () => {
    goToShop();
    createCategory('ffff');
  });
});