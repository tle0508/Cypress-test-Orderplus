
import {createOrderByYourSelf } from '../support/allFunction/createOrders';
import { goToShop} from '../support/allFunction/generalFunction';
describe('creates order test dev', () => {
  it('creates orders with various transport methods', () => {
    
    goToShop('dev');
    createOrderByYourSelf('sirun sununtasin', '0951385471', '57หมู่2', 'กรุงเทพ', 'ดอนเมือง', 'สนามบิน', '3000',1)
   
  });
});