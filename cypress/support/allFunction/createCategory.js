function generateRandomCategory() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter1 = letters.charAt(Math.floor(Math.random() * letters.length));// ฟังก์ชันสุ่มตัวอักษร A-Z 
  const randomLetter2 = letters.charAt(Math.floor(Math.random() * letters.length));
  const randomNumber = Math.floor(Math.random() * 1001); // สุ่ม 0-1000
  return `${randomLetter1}${randomLetter2}${randomNumber}`;
}

export function createCategory() {
  const randomCategory = generateRandomCategory();
    cy.contains('span', 'สินค้า').click();
    cy.wait(1000);
    cy.contains('li.el-menu-item', 'หมวดหมู่').click();
    cy.wait(1000);
    cy.contains('span', 'เพิ่มหมวดหมู่').click();
    cy.wait(1000);
    cy.get('input.el-input__inner').eq(1).type(randomCategory);
    cy.wait(1000);
    cy.get('div[role="dialog"]').contains('button', 'เพิ่ม').click(); 
    cy.wait(2000);
  }