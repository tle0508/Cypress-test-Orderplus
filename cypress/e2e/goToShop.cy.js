
import { goToShop,logout} from '../support/allFunction/generalFunction';

describe('goToShop test dev', () => {


  it('login  passes', () => {
    goToShop('dev')
    logout();
  });

});