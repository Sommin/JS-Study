let star = "";
function printStarts(maxLine) {
  for (let i = 1; i <= maxLine; i++) {
    star += "*";
    console.log(star);
  }
}

printStarts(4);
