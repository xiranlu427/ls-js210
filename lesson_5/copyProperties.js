function copyProperties(obj1, obj2) {
  let count = 0;
  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }