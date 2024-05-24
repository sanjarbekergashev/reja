// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(string) {
  let Count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "0" && string[i] <= "9") {
      Count++;
    }
  }
  return Count++;
}

const result = "ad2a54y79wet0sfgb9";
console.log(countDigits(result));

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi

// function countLetter(a, b) {
//   const arr1 = b.split("");
//   const arr2 = arr1.filter((ele, index) => {
//     return ele === a ? ele : null;
//   });
//   const result = arr2.length;
//   console.log(result);
// }

// countLetter("e", "engieer");

// callback function

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", // 0 -20
//   "togri boshliq tanlang va koproq hato qiling", // 20 - 30
//   "ozingizni ishingizni boshlang", // 30 - 40
//   "siz kuchli bolgan narsalarni qiling", // 40 - 50
//   "yoshlarga ivestitsiya qiling", // 50 -60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a < 30) callback(null, list[1]);
//   else if (a > 30 && a < 40) callback(null, list[2]);
//   else if (a > 40 && a < 50) callback(null, list[3]);
//   else if (a > 50 && a < 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// console.log("passed here 1");

// =========================================

// ASYNC FUNCTION

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a >= 20 && a <= 30) return list[1];
//   else if (a >= 30 && a <= 40) return list[2];
//   else if (a >= 40 && a <= 50) return list[3];
//   else if (a >= 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }
//  Call then/catch

// maslahatBering(61)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

//  Call asyn/await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);

//   javob = await maslahatBering(30);
//   console.log(javob);

//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
