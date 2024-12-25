export function createOrder() {
  cy.contains("span", "คำสั่งซื้อ").click();
  cy.contains("li.el-menu-item", "สร้างออเดอร์").click();
  
  FillInAdress_easily();
  
  cy.contains("span", "เลือกสินค้า").click();
  cy.get(".el-checkbox__inner").eq(1).click();

  cy.contains("span", "ตกลง (1)").click();
  cy.get(".el-button.btn-create").click();
  cy.wait(2000);

  checkDialogRepeatOrders();

}

export function FillInAdress_easily() {
  cy.get("textarea")
  .first()
  .type(`sirun sununtasin 0921385471 aas32/332 10110`);
  cy.contains("button", "ยืนยัน").click();
}

export function checkDialogRepeatOrders() {
cy.get("body").then(($body) => {
    if ($body.find("p.header-txt:contains('แจ้งเตือนข้อมูลออเดอร์ซ้ำ')").length > 0) {
      cy.get(".el-dialog.el-dialog--center").contains("span", "ยืนยัน").click();
    }
  });
}

export function chooseProduct(choice) {
  if (choice) {
    
  }
  }