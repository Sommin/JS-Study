function getTypeMessage(value) {
  let name;
  if (typeof value === "string") {
    name = "문자열";
  } else if (typeof value === "number") name = "숫자";
  else if (typeof value === "boolean") {
    name = "불리언";
  } else {
    name = "아직 확인하지 않는 자료형";
  }
  name += "입니다.";
  console.log(name);
}

getTypeMessage("JavaScript");
getTypeMessage(2026);
getTypeMessage(true);
getTypeMessage(undefined);
