var rollDie = function() {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());


//==========================================================================================

var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return function() {
    return list[index ++];

  }

})();

console.log(loadedDie());  // 5

//===========================================================================================


var countdownGenerator = function (x) {
  var counter = x;

  return function() {
    if (counter > 0) {
      console.log("T-minus " + counter + "...")
    } else if (counter === 0) {
      console.log("Blast off!")
    } else {
      console.log("Rocket's already gone, bub!");
    }
    counter -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!












