import { createCategory } from '../support/allFunction/createCategory';
import { goToShop, logout } from '../support/allFunction/generalFunction';



describe('creates category', () => {

  it('create category', () => {
    goToShop('dev');
    
    createCategory();
    logout();
  });
});
