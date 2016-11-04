function myMap(array, cb) {
  var sum = []
  array.forEach(function(item) {
    sum.push(cb(item));
  });
  return sum;
};

function lengthfinder(array) {
  return array.length;
}

console.log(myMap(["dog", "rabbit", "snake"], lengthfinder));