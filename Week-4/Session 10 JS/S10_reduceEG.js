function calcWordFrequencies() {
  let sentence = prompt(" Enter any sentence");
  const arr = sentence.split(" ");
  let calculate = arr.reduce(function (acc, curr) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, []);

  console.log(calculate);
}

calcWordFrequencies();
