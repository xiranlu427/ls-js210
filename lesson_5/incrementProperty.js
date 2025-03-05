function incrementProperty(obj, property) {
  let keys = Object.keys(obj);
  if (keys.indexOf(property) !== -1) {
    obj[property] += 1;
  } else {
    obj[property] = 1;
  }
}

function incrementProperty2(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }