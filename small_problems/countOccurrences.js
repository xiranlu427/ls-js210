function countOccurrences(arr) {
  const counter = {};

  for (let i = 0; i < arr.length; i += 1) {
    counter[arr[i]] = counter[arr[i]] || 0;
    counter[arr[i]] += 1;
  }

  for (let item in counter) {
    console.log(`${item} => ${counter[item]}`)
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);