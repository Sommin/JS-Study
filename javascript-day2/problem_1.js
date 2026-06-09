function countOddNumbers(limitValue) {
  let value = Number(limitValue) || 0;
  value = value < 1 ? 0 : value;
  value = value % 1 === 0 ? value : 0;

  if (value) {
    return Math.floor((value + 1) / 2);
  } else return value;
}
console.log(countOddNumbers("7"));
console.log(countOddNumbers("10"));
console.log(countOddNumbers("abc"));
console.log(countOddNumbers("2.5"));
