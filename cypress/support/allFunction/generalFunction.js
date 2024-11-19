  export function login(server) {
    if(server == 'dev'){
      cy.visit('https://app-dev.orderplus.me/login');
      cy.wait(1000);
      checkpathAndKey('0918517610','testtest');
    }else{
      cy.visit('https://web.orderplus.me/login');
      cy.wait(1000);
      checkpathAndKey('0951385471','testtest');
    }
  }

  export function checkpathAndKey(username,password){
    cy.location('pathname').then((pathname) => {
      if (pathname === '/login') {
        cy.get('input[placeholder="หมายเลขโทรศัพท์"]').type(username);
        cy.wait(1000);
        cy.get('input[placeholder="รหัสผ่าน"]').type(password);
        cy.wait(1000);
        cy.contains('span','เข้าสู่ระบบ').click();
        cy.wait(1000);
      }
    });
  }

  
  export function logout() {
    cy.get('.custom-line').first().click();
    cy.wait(2000);
    cy.get('li.el-menu-item.menu-logout').contains('ออกจากระบบ').click();
  }

  export function goToShop(server) {
    if(server == 'dev'){
      login('dev');
      cy.get('.block-card').contains('กุ่กกุ่กกั่กกั่กกั้กกั่กกุ้กกุ้ก').click();
      cy.wait(2000);
    }else{
      login('prod');
      cy.get('.block-card').contains('ร้านขายเสื้อ by DUCK [TEST]').click();
      cy.wait(2000);
    }
    
  }

