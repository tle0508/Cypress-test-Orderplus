import { goToShop } from '../support/allFunction/generalFunction';
import { pickUpRequest } from '../support/allFunction/pickUpRequest';

describe('Login test dev', () => {

  beforeEach(() => {
    cy.viewport(1290, 900);
  });

  it('login  passes', () => {
    goToShop('กุ่กกุ่กกั่กกั่กกั้กกั่กกุ้กกุ้ก');
    pickUpRequest('Thailand Post','tle','0951389574','4','ดีครับ');
    
  });

});