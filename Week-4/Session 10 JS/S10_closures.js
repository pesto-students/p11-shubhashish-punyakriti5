function counter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment;
}

let firstCounter = counter();
let firstValues = [];

firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

let secondValues = [];
let secondCounter = counter();
secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log(firstValues, secondValues);
