import { createOrder } from '../support/CreateOrder_Function/createOrder';
import { goToShop} from '../support/allFunction/generalFunction';
describe('creates order test dev', () => {
  it('creates orders with various transport methods', () => {
    
    goToShop('dev');
    createOrder();
 
  });
});