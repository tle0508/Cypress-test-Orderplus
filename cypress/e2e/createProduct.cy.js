
import { createProduct } from '../support/allFunction/createProductFunction';
import { goToShop,logout} from '../support/allFunction/generalFunction';


describe('create product test dev', () => {
  it('create product pass', () => {
    goToShop('dev');
    createProduct('ff','ของดีจากนครนายก','ทั่วไป',60,16,50,13555,5);
    logout();
  });
  

});