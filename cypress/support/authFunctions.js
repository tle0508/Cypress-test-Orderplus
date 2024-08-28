
export function login(phoneNumber, password) {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.wait(1000);
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').type(phoneNumber);
    cy.wait(1000);
    cy.get('input[placeholder="รหัสผ่าน"]').type(password);
    cy.wait(1000);
    cy.get('button[data-v-cd9577da].el-button.login-btn').click();
    cy.wait(1000);
  }
  
//   export function logout() {
//     cy.visit('https://app-dev.orderplus.me/login');
//     cy.get('i.el-icon.el-sub-menu__icon-arrow').click();
//     cy.wait(2000);
//     cy.get('li.el-menu-item.menu-logout').contains('ออกจากระบบ').click();
//   }

  export function goToShop() {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.get('.block-card').click();
    cy.wait(2000);
  }

  export function createOrder() {
    cy.visit('https://app-dev.orderplus.me/login');
    goToShop();
    cy.get('span[data-v-dfd9e572]').contains('คำสั่งซื้อ').click();
    cy.get('li[data-v-dfd9e572]').contains('สร้างออเดอร์').click();

    cy.wait(1000);
    cy.get('input[placeholder="ชื่อผู้รับ"]').type('dasdasd sdad');
    cy.wait(1000);
    cy.get('input[placeholder="เบอร์โทรศัพท์"]').type('0974858598');
    cy.wait(1000);
    cy.get('textarea#addressInput').click()
    .type('56หมู่ 2');
    cy.wait(1000);
    cy.contains('span', 'จังหวัด').click();
    cy.wait(1000);
    cy.get('li.el-select-dropdown__item')
    .contains('span', 'กรุงเทพ')
    .click();
    cy.contains('span', 'เขต/อำเภอ').click();
    cy.wait(1000);
    cy.get('li.el-select-dropdown__item')
    .contains('span', 'ดอนเมือง')
    .click();
    cy.contains('span', 'แขวง/ตำบล').parent().click();
    cy.wait(1000);
    cy.get('li.el-select-dropdown__item')
    .contains('span', 'สนามบิน')
    .click();
    cy.wait(2000);
    cy.get('input[placeholder="ราคาสินค้า"]').type('3000');
    cy.wait(1000);
    cy.get('button[data-v-b5ee3baf].el-button.btn-create').click();
    cy.wait(1000);


  }
 