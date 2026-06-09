function normalizeName(value) {
  let values = value ?? "이름없음";
  values = values.trim();
  values = values === "" ? "이름없음" : values;

  return values;
}

console.log(normalizeName(" 김하나 "));
console.log(normalizeName(""));
console.log(normalizeName(null));
console.log(normalizeName(undefined));
