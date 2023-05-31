class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
class ScientificCalculator extends Calculator {
  sqaure(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
}
const operation = new ScientificCalculator();
console.log(operation.add.call(operation, 10, 5));

console.log(operation.subtract.apply(operation, [10, 5]));

const multipleOf2 = operation.multiply.bind(operation, 2);
console.log(multipleOf2(5));

function powerOfThree(a) {
  return Math.pow(a, 3);
}
const powerOf3 = powerOfThree.bind(operation);
console.log(powerOf3(2));
