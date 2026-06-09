function sumBetween(startValue, endValue) {
  let start = checkNum(startValue);
  let end = checkNum(endValue);
  let num = 0;

  if (start && end) {
    for (let i = start; i <= end; i++) num += i;
  }
  return num;
}

function checkNum(nums) {
  let num = Number(nums) || 0;
  num = num % 1 === 0 ? num : 0;
  return num;
}

console.log(sumBetween("1", "5"));
console.log(sumBetween("3", "3"));
console.log(sumBetween("5", "1"));
console.log(sumBetween("1.5", "3"));
