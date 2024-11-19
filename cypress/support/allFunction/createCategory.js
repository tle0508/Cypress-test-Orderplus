function generateRandomCategory() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // สุ่มตัวอักษร A-Z สองรอบแล้วรวมกัน
  const randomLetter2 = Array.from({ length: 2 }, () => 
    letters.charAt(Math.floor(Math.random() * letters.length))
  ).join('');
  // สุ่มตัวเลข 0-9 จำนวน 4 รอบ และรวมเป็น String เดียว
  const randomNumber = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
  return `${randomLetter2}${randomNumber}`;
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