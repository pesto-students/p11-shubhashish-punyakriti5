function getTemperatueForCity() {
  const cache = {};
  return function (city) {
    if (cache[city]) {
      console.log("Data coming from Cache");
      return cache[city];
    }
    const temperature = temperatureData[city];
    cache[city] = temperature;
    console.log("Data fetched from Api");
    return temperature;
  };
}
const temperatureData = {
  "New York": 20,
  "London": 18,
  "Paris" : 22,
  "Tokyo": 25,
  "Sydney": 28,
};

const temp = getTemperatueForCity();
const t1 = temp("Paris");
console.log(t1);
const t2 = temp("Paris");
console.log(t2);
const t3 = temp("London");
console.log(t3);
