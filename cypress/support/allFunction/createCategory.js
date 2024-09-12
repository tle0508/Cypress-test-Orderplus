export function createCategory(name) {
    cy.contains('span', 'สินค้า').click();
    cy.wait(1000);
    cy.contains('li.el-menu-item', 'หมวดหมู่').click();
    cy.wait(1500);
    cy.contains('span', 'เพิ่มหมวดหมู่').click();
    cy.wait(1000);
    cy.get('input.el-input__inner').eq(1).type(name);
    cy.wait(1000);
    cy.get('div[role="dialog"]').contains('button', 'เพิ่ม').click(); 
    cy.wait(2000);
  }