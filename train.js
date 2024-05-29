// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

function checkContent(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const test1 = a.split("").sort().join();
  const test2 = b.split("").sort().join();

  return test1 === test2;
}

console.log(checkContent("mitgroup", "gmtiprou"));
