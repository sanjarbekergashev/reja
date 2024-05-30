// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(a) {
  const test = a.split("").reverse().join("");
  console.log(test);
}
getReverse("hello");
