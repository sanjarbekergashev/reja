// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");

class Shop {
  non;
  lagmon;
  cola;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    return `hozirda ${moment().format("hh:mm")}  ${this.non}  ta non  ${
      this.lagmon
    }  ta lagmon  ${this.cola}  ta cola mavjud `;
  }

  sotish(mahsulot, qiymat) {
    if (this.non >= qiymat) {
      this.non -= qiymat;
      console.log(`${mahsulot},  ${qiymat}  `);
    }
  }

  qabul(mahsulot, qiymat) {
    this.cola += qiymat;
    console.log(`${mahsulot}, ${qiymat} `);
  }
}

const shop = new Shop(4, 5, 2);
const result = shop.qoldiq();
console.log(result);
shop.sotish("non", 3);
shop.qabul("cola", 4);
const result2 = shop.qoldiq();
console.log(result2);
