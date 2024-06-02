// F-TASK:

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi

function findDoublers(str) {
  const test = {};
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    if (test[a]) {
      return true;
    }
    test[a] = 1;
  }
  return false;
}

console.log(findDoublers("hello"));
