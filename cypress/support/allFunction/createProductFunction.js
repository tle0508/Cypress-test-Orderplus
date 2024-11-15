function generateRandomCategory() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter1 = letters.charAt(Math.floor(Math.random() * letters.length));// ฟังก์ชันสุ่มตัวอักษร A-Z 
  const randomLetter2 = letters.charAt(Math.floor(Math.random() * letters.length));
  const randomNumber = Math.floor(Math.random() * 1001); // สุ่ม 0-1000
  return `${randomLetter1}${randomLetter2}${randomNumber}`;
}




export function createProduct(p_name,p_detail,Category,Weight,p_quantity,CostPrice,p_price,productCount) {
  
  cy.contains('span', 'สินค้า').click();
  cy.wait(1000);
    for (let i = 0; i < productCount; i++) {
    const randomCategory = generateRandomCategory();
    cy.contains('li.el-menu-item', 'สร้างสินค้า').click();
    cy.wait(1500);
    
    cy.get('input[placeholder="ชื่อสินค้า"]').type(`${p_name}${i+1}`);  
    cy.wait(1500);

    cy.get('input[placeholder="รหัสสินค้า"]').type(randomCategory);  
    cy.wait(1500);

    cy.get('textarea[placeholder="รายละเอียดสินค้า"]').click().type(p_detail);
    cy.wait(1500);

    cy.contains('span','เลือกหมวดหมู่').click();
    cy.wait(1500);

    cy.contains('span',Category).click();
    cy.wait(1500);

    cy.get('input[placeholder="น้ำหนักสินค้า"]').first().type(`${Weight}`);
    cy.wait(1500);

    cy.get('input[placeholder="จำนวนสินค้า"]').first().type(`${p_quantity}`);
    cy.wait(1500);

    cy.get('input[placeholder="ราคาต้นทุน"]').first().type(`${CostPrice}`);
    cy.wait(1500);

    cy.get('input[placeholder="ราคาสินค้า"]').first().type(`${p_price}`);
    cy.wait(1500);

    cy.get('.el-button.btn-create').click();
    cy.wait(2000);
    }
  }