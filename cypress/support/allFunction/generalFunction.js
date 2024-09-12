export function login(phoneNumber, password) {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.wait(1000);
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').type(phoneNumber);
    cy.wait(1000);
    cy.get('input[placeholder="รหัสผ่าน"]').type(password);
    cy.wait(1000);
    cy.contains('span','เข้าสู่ระบบ').click();
    cy.wait(1000);
  }
  
  export function logout() {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.get('i.el-icon.el-sub-menu__icon-arrow').click();
    cy.wait(2000);
    cy.get('li.el-menu-item.menu-logout').contains('ออกจากระบบ').click();
  }

  export function goToShop() {
    cy.visit('https://app-dev.orderplus.me/login');
    cy.get('.block-card').contains('กุ่กกุ่กกั่กกั่กกั้กกั่กกุ้กกุ้ก').click();
    cy.wait(2000);
  }

