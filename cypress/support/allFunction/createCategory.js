export function createCategory() {
    cy.contains('span', 'สินค้า').click();
    cy.wait(1000);
    cy.contains('li.el-menu-item', 'สร้างหมวดหมู่').click();
    cy.wait(1500);
    
  }