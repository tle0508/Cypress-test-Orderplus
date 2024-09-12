
import { createOrderAllProvinces,createOrderByNum } from '../support/allFunction/createOrders';
import { goToShop } from '../support/allFunction/generalFunction';
describe('creates prder test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('creates orders with various transport methods', () => {
    
    goToShop('กุ่กกุ่กกั่กกั่กกั้กกั่กกุ้กกุ้ก');
    createOrderAllProvinces('sirun sununtasin', '0951385471', '57 หมู่ 2','Kerry',false,  '3000');
   //createOrderByNum('sirun sununtasin', '0951385471', '57หมู่2', 'กรุงเทพ', 'ดอนเมือง', 'ดอนเมือง', 'DHL', '3000',50)
  });
});