
import { createProduct } from '../support/allFunction/createProductFunction';
import { goToShop } from '../support/allFunction/generalFunction';

describe('create product test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('create product pass', () => {
    goToShop('กุ่กกุ่กกั่กกั่กกั้กกั่กกุ้กกุ้ก');
    createProduct('ff','a_','ของดีจากนครนายก','ทั่วไป',60,16,50,13555,5);
  });
  

});