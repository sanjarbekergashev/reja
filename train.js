//  G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}

console.log(getHighestIndex([10, 47, -63, 3, 63]));
