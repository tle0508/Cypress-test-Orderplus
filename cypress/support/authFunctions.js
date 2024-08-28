
export function login(phoneNumber, password) {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.wait(2000);
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').click().type(phoneNumber);
    cy.wait(2000);
    cy.get('input[placeholder="รหัสผ่าน"]').click().type(password);
    cy.wait(2000);
    cy.get('button[data-v-cd9577da].el-button.login-btn').click();
    cy.wait(2000);
  }
  
  export function logout() {
    cy.get('i.el-icon.el-sub-menu__icon-arrow').click();
    cy.wait(3000);
    cy.get('li.el-menu-item.menu-logout')
      .contains('ออกจากระบบ')
      .click();
  }
  