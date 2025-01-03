
export function pickUpRequest(name,phoneNumber,quantity,note) {
    cy.contains('span', 'เรียกรถเข้ารับ').click();
    cy.wait(1000);
    cy.contains('button', 'เรียกรถ').click();
    cy.wait(1000);
    
   
    cy.get('input.el-input__inner').first().type(name);
    cy.wait(1000);
    cy.get('input.el-input__inner').eq(1).type(phoneNumber);
    cy.wait(1000);
    cy.get('input.el-input__inner').eq(2).clear().type(quantity);
    cy.wait(1000);
    cy.get('textarea[placeholder="หมายเหตุ"]').type(note);
    cy.wait(1000);
    cy.contains('button', 'ยืนยัน').click();
    cy.wait(1000);
  }