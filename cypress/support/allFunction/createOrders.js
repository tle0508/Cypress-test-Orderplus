


  export function createOrderAllProvinces(name, phoneNumber, address,transport,insurance, price) {
   

    const provinces = [
      "กรุงเทพ", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น",
      "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร",
      "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก", "นครปฐม",
      "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส",
      "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี",
      "ปัตตานี", "พระนครศรีอยุธยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก",
      "เพชรบุรี", "เพชรบูรณ์", "แพร่", "พะเยา", "ภูเก็ต", "มหาสารคาม",
      "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง",
      "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย",
      "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ", "สมุทรสงคราม",
      "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี",
      "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อุดรธานี",
      "อุทัยธานี", "อุตรดิตถ์", "อุบลราชธานี", "อำนาจเจริญ"
    ];
    function getDistrictAndSubDistrict(province) {
      switch (province) {
          case "กรุงเทพ":
              return { district: "คลองเตย", subDistrict: "คลองตัน" };
          case "กระบี่":
              return { district: "เมืองกระบี่", subDistrict: "ปากน้ำ" };
          case "กาญจนบุรี":
              return { district: "เมืองกาญจนบุรี", subDistrict: "ท่ามะขาม" };
          case "กาฬสินธุ์":
              return { district: "เมืองกาฬสินธุ์", subDistrict: "ไผ่" };
          case "กำแพงเพชร":
              return { district: "เมืองกำแพงเพชร", subDistrict: "ในเมือง" };
          case "ขอนแก่น":
              return { district: "เมืองขอนแก่น", subDistrict: "บ้านเป็ด" };
          case "จันทบุรี":
              return { district: "เมืองจันทบุรี", subDistrict: "ตลาด" };
          case "ฉะเชิงเทรา":
              return { district: "เมืองฉะเชิงเทรา", subDistrict: "คลองหลวง" };
          case "ชลบุรี":
              return { district: "เมืองชลบุรี", subDistrict: "บ้านสวน" };
          case "ชัยนาท":
              return { district: "เมืองชัยนาท", subDistrict: "ในเมือง" };
          case "ชัยภูมิ":
              return { district: "เมืองชัยภูมิ", subDistrict: "ในเมือง" };
          case "ชุมพร":
              return { district: "เมืองชุมพร", subDistrict: "ท่าตะเภา" };
          case "เชียงราย":
              return { district: "เมืองเชียงราย", subDistrict: "รอบเวียง" };
          case "เชียงใหม่":
              return { district: "เมืองเชียงใหม่", subDistrict: "ศรีภูมิ" };
          case "ตรัง":
              return { district: "เมืองตรัง", subDistrict: "ทับเที่ยง" };
          case "ตราด":
              return { district: "เมืองตราด", subDistrict: "บางพระ" };
          case "ตาก":
              return { district: "เมืองตาก", subDistrict: "ระแหง" };
          case "นครนายก":
              return { district: "เมืองนครนายก", subDistrict: "บ้านใหญ่" };
          case "นครปฐม":
              return { district: "เมืองนครปฐม", subDistrict: "สนามจันทร์" };
          case "นครพนม":
              return { district: "เมืองนครพนม", subDistrict: "ในเมือง" };
          case "นครราชสีมา":
              return { district: "เมืองนครราชสีมา", subDistrict: "ในเมือง" };
          case "นครศรีธรรมราช":
              return { district: "เมืองนครศรีธรรมราช", subDistrict: "ในเมือง" };
          case "นครสวรรค์":
              return { district: "เมืองนครสวรรค์", subDistrict: "ปากน้ำโพ" };
          case "นนทบุรี":
              return { district: "เมืองนนทบุรี", subDistrict: "สวนใหญ่" };
          case "นราธิวาส":
              return { district: "เมืองนราธิวาส", subDistrict: "บางนาค" };
          case "น่าน":
              return { district: "เมืองน่าน", subDistrict: "ในเวียง" };
          case "บึงกาฬ":
              return { district: "เมืองบึงกาฬ", subDistrict: "หอคำ" };
          case "บุรีรัมย์":
              return { district: "เมืองบุรีรัมย์", subDistrict: "ในเมือง" };
          case "ปทุมธานี":
              return { district: "เมืองปทุมธานี", subDistrict: "บางปรอก" };
          case "ประจวบคีรีขันธ์":
              return { district: "เมืองประจวบคีรีขันธ์", subDistrict: "เกาะหลัก" };
          case "ปราจีนบุรี":
              return { district: "เมืองปราจีนบุรี", subDistrict: "หน้าเมือง" };
          case "ปัตตานี":
              return { district: "เมืองปัตตานี", subDistrict: "ปะนาเระ" };
          case "พระนครศรีอยุธยา":
              return { district: "เมืองพระนครศรีอยุธยา", subDistrict: "ท่าเรือ" };
          case "พังงา":
              return { district: "เมืองพังงา", subDistrict: "ตะกั่วป่า" };
          case "พัทลุง":
              return { district: "เมืองพัทลุง", subDistrict: "เขาเจียก" };
          case "พิจิตร":
              return { district: "เมืองพิจิตร", subDistrict: "ในเมือง" };
          case "พิษณุโลก":
              return { district: "เมืองพิษณุโลก", subDistrict: "ในเมือง" };
          case "เพชรบุรี":
              return { district: "เมืองเพชรบุรี", subDistrict: "ท่าคอย" };
          case "เพชรบูรณ์":
              return { district: "เมืองเพชรบูรณ์", subDistrict: "เขาค้อ" };
          case "แพร่":
              return { district: "เมืองแพร่", subDistrict: "หนองม่วง" };
          case "พะเยา":
              return { district: "เมืองพะเยา", subDistrict: "แม่ใจ" };
          case "ภูเก็ต":
              return { district: "เมืองภูเก็ต", subDistrict: "ตลาดใหญ่" };
          case "มหาสารคาม":
              return { district: "เมืองมหาสารคาม", subDistrict: "เมืองมหาสารคาม" };
          case "มุกดาหาร":
              return { district: "เมืองมุกดาหาร", subDistrict: "มุกดาหาร" };
          case "แม่ฮ่องสอน":
              return { district: "เมืองแม่ฮ่องสอน", subDistrict: "แม่สะเรียง" };
          case "ยโสธร":
              return { district: "เมืองยโสธร", subDistrict: "เมืองยโสธร" };
          case "ยะลา":
              return { district: "เมืองยะลา", subDistrict: "ยะลา" };
          case "ร้อยเอ็ด":
              return { district: "เมืองร้อยเอ็ด", subDistrict: "ในเมือง" };
          case "ระนอง":
              return { district: "เมืองระนอง", subDistrict: "ระนอง" };
          case "ระยอง":
              return { district: "เมืองระยอง", subDistrict: "ตะพง" };
          case "ราชบุรี":
              return { district: "เมืองราชบุรี", subDistrict: "ดำเนินสะดวก" };
          case "ลพบุรี":
              return { district: "เมืองลพบุรี", subDistrict: "เมืองลพบุรี" };
          case "ลำปาง":
              return { district: "เมืองลำปาง", subDistrict: "สวนดอก" };
          case "ลำพูน":
              return { district: "เมืองลำพูน", subDistrict: "เมืองลำพูน" };
          case "เลย":
              return { district: "เมืองเลย", subDistrict: "เมืองเลย" };
          case "ศรีสะเกษ":
              return { district: "เมืองศรีสะเกษ", subDistrict: "ศรีสะเกษ" };
          case "สกลนคร":
              return { district: "เมืองสกลนคร", subDistrict: "เมืองสกลนคร" };
          case "สงขลา":
              return { district: "เมืองสงขลา", subDistrict: "หาดใหญ่" };
          case "สตูล":
              return { district: "เมืองสตูล", subDistrict: "สตูล" };
          case "สมุทรปราการ":
              return { district: "เมืองสมุทรปราการ", subDistrict: "บางปู" };
          case "สมุทรสงคราม":
              return { district: "เมืองสมุทรสงคราม", subDistrict: "สมุทรสงคราม" };
          case "สมุทรสาคร":
              return { district: "เมืองสมุทรสาคร", subDistrict: "สมุทรสาคร" };
          case "สระแก้ว":
              return { district: "เมืองสระแก้ว", subDistrict: "เมืองสระแก้ว" };
          case "สระบุรี":
              return { district: "เมืองสระบุรี", subDistrict: "ในเมือง" };
          case "สิงห์บุรี":
              return { district: "เมืองสิงห์บุรี", subDistrict: "สิงห์บุรี" };
          case "สุโขทัย":
              return { district: "เมืองสุโขทัย", subDistrict: "เมืองสุโขทัย" };
          case "สุพรรณบุรี":
              return { district: "เมืองสุพรรณบุรี", subDistrict: "ในเมือง" };
          case "สุราษฎร์ธานี":
              return { district: "เมืองสุราษฎร์ธานี", subDistrict: "บางใหญ่" };
          case "สุรินทร์":
              return { district: "เมืองสุรินทร์", subDistrict: "สุรินทร์" };
          case "หนองคาย":
              return { district: "เมืองหนองคาย", subDistrict: "หนองคาย" };
          case "หนองบัวลำภู":
              return { district: "เมืองหนองบัวลำภู", subDistrict: "หนองบัวลำภู" };
          case "อ่างทอง":
              return { district: "เมืองอ่างทอง", subDistrict: "อ่างทอง" };
          case "อุดรธานี":
              return { district: "เมืองอุดรธานี", subDistrict: "ในเมือง" };
          case "อุทัยธานี":
              return { district: "เมืองอุทัยธานี", subDistrict: "อุทัยธานี" };
          case "อุตรดิตถ์":
              return { district: "เมืองอุตรดิตถ์", subDistrict: "อุตรดิตถ์" };
          case "อุบลราชธานี":
              return { district: "เมืองอุบลราชธานี", subDistrict: "ในเมือง" };
          case "อำนาจเจริญ":
              return { district: "เมืองอำนาจเจริญ", subDistrict: "อำนาจเจริญ" };
          default:
              return { district: "เขตทั่วไป", subDistrict: "ตำบลทั่วไป" };
      }
  }
  
  for (let i = 0; i < provinces.length; i++) {
      cy.contains('span', 'คำสั่งซื้อ').click();
      cy.wait(1000);
      cy.contains('li.el-menu-item', 'สร้างออเดอร์').click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ชื่อผู้รับ"]').type(`${name} ${i + 1}`);
      cy.wait(1000);
      cy.get('input[placeholder="เบอร์โทรศัพท์"]').type(phoneNumber);
      cy.wait(1000);
      cy.get('textarea#addressInput').click().type(address);
      cy.wait(1000);
  
      cy.contains('span', 'จังหวัด').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', provinces[i]).click();
      cy.wait(1000);
  
      const { district, subDistrict } = getDistrictAndSubDistrict(provinces[i]);
  
      cy.contains('span', 'เขต/อำเภอ').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', district).click();
      cy.wait(1000);
  
      cy.contains('span', 'แขวง/ตำบล').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', subDistrict).click();
      cy.wait(1000);
  
      cy.contains('span', 'Thailand Post').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('div', transport).click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ราคาสินค้า"]').type(price);
      cy.wait(1000);
  
      if (insurance === true) {
          cy.get('.el-switch__action').eq(1).click();
          cy.wait(1000);
      }
      cy.get('.el-button.btn-create').click();
      cy.wait(2000);
  
      cy.get('body').then(($body) => {
          if ($body.find('.el-dialog.el-dialog--center').length > 0) {
              cy.get('.el-dialog.el-dialog--center').contains('span', 'ยืนยัน').click();
          } else {
              // Dialog not found, so skip the confirmation step
              cy.log('No confirmation dialog appeared, skipping...');
          }
      });
      cy.wait(3000);
  }
  
  }
  export function createOrderByNum (name, phoneNumber, address, province, district, subDistrict, transport, price,orderCount) {
   
    for (let i = 0; i < orderCount; i++) {
      cy.contains('span', 'คำสั่งซื้อ').click();
      cy.wait(1000);
      cy.contains('li.el-menu-item', 'สร้างออเดอร์').click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ชื่อผู้รับ"]').type(`${name} ${i + 1}`);  
      cy.wait(1000);
      cy.get('input[placeholder="เบอร์โทรศัพท์"]').type(phoneNumber);
      cy.wait(1000);
      cy.get('textarea#addressInput').click().type(address);
      cy.wait(1000);
  
      cy.contains('span', 'จังหวัด').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', province).click();
      cy.wait(1000);
  
      cy.contains('span', 'เขต/อำเภอ').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', district).click();
      cy.wait(1000);
  
      cy.contains('span', 'แขวง/ตำบล').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', subDistrict).click();
      cy.wait(1000);
  
      cy.contains('span', 'Thailand Post').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('div', transport).click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ราคาสินค้า"]').type(price);
      cy.wait(1000);
      cy.get('.el-button.btn-create').click();
      cy.wait(2000);
  
      cy.get('body').then(($body) => {
        if ($body.find('.el-dialog.el-dialog--center').length > 0) {
          cy.get('.el-dialog.el-dialog--center').contains('span', 'ยืนยัน').click();
        } else {
          // Dialog not found, so skip the confirmation step
          cy.log('No confirmation dialog appeared, skipping...');
        }
      });
      cy.wait(3000);  
    }
  }
  export function createOrderAllTransports (name, phoneNumber, address, province, district, subDistrict, transport, price,orderCount) {
    const transports = ['Flash', 'Kerry', 'Thailand Post', 'Shopee', 'DHL'];
    for (let i = 0; i < transports.length; i++) {
      cy.contains('span', 'คำสั่งซื้อ').click();
      cy.wait(1000);
      cy.contains('li.el-menu-item', 'สร้างออเดอร์').click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ชื่อผู้รับ"]').type(`${name} ${i + 1}`);  
      cy.wait(1000);
      cy.get('input[placeholder="เบอร์โทรศัพท์"]').type(phoneNumber);
      cy.wait(1000);
      cy.get('textarea#addressInput').click().type(address);
      cy.wait(1000);
  
      cy.contains('span', 'จังหวัด').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', province).click();
      cy.wait(1000);
  
      cy.contains('span', 'เขต/อำเภอ').click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', district).click();
      cy.wait(1000);
  
      cy.contains('span', 'แขวง/ตำบล').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('span', subDistrict).click();
      cy.wait(1000);
  
      cy.contains('span', 'Thailand Post').parent().click();
      cy.wait(1000);
      cy.get('li.el-select-dropdown__item').contains('div', transports[i]).click();
      cy.wait(1000);
  
      cy.get('input[placeholder="ราคาสินค้า"]').type(price);
      cy.wait(1000);
      cy.get('.el-button.btn-create').click();
      cy.wait(2000);
  
      cy.get('body').then(($body) => {
        if ($body.find('.el-dialog.el-dialog--center').length > 0) {
          cy.get('.el-dialog.el-dialog--center').contains('span', 'ยืนยัน').click();
        } else {
          // Dialog not found, so skip the confirmation step
          cy.log('No confirmation dialog appeared, skipping...');
        }
      });
      cy.wait(3000);  
    }
  }

 