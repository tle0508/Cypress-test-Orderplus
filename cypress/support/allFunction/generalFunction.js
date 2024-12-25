export function goToShop(server) {
  if (server === 'dev') {
    cy.visit('https://app-dev.orderplus.me/login');

    checkpathAndKey('0918517610', 'testtest');
    checkDialog();

    cy.contains('.block-card', '[Test] TT_Shop')
      .should('be.visible')
      .click();
  } else {
    login('prod');
    cy.visit('https://web.orderplus.me/login');
    checkpathAndKey('0951385471', 'testtest');
    checkDialog();
    cy.contains('.block-card', 'ร้านขายเสื้อ by DUCK [TEST]')
      .should('be.visible')
      .click();
  }
}


export function checkpathAndKey(username,password){
  cy.wait(2000);
  cy.location('pathname').then((pathname) => {
  if (pathname === '/login') {
  cy.get('input[placeholder="หมายเลขโทรศัพท์"]').should('be.visible').type(username);
  cy.get('input[placeholder="รหัสผ่าน"]').should('be.visible').type(password);
  cy.contains('span', 'เข้าสู่ระบบ').should('be.visible').click();
  }
});
}


export function checkDialog() {
  cy.get('.el-dialog.el-dialog--center', { timeout: 10000 })
  .should('be.visible') 
  .within(() => {
    cy.contains('span', 'ปิดหน้าต่าง').should('be.visible').click();
  });
}


