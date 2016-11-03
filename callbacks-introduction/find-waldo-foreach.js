// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(names, namesIndex) {
    if (names === "Waldo") {
      found(namesIndex);
    }
  });
}

function actionWhenFound(theIndex) {
  console.log("Found waldo at index " + theIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);