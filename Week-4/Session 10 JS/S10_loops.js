function drawTriangle(triangleSize) {
  for (let i = 1; i <= triangleSize; i++) {
    var line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
drawTriangle(5);
