
import { createOrderAllProvinces,createOrderByNum,createOrderAllTransports } from '../support/allFunction/createOrders';
import { goToShop,logout} from '../support/allFunction/generalFunction';
describe('creates order test dev', () => {

 
  it('creates orders with various transport methods', () => {
    
    goToShop('dev');
    //createOrderAllTransports('sirun sununtasin', '0951385471', '57หมู่2', 'กรุงเทพ', 'ดอนเมือง', 'สนามบิน', '3000');
    //createOrderAllProvinces('sirun sununtasin', '0951385471', '57 หมู่ 2','Kerry',false,  '3000');
    createOrderByNum('sirun sununtasin', '0951385471', '57หมู่2', 'กรุงเทพ', 'ดอนเมือง', 'สนามบิน',3)
    logout();
  });
});
