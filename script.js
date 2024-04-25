function testSubject(test) {
  if (typeof test == "string") {
    let reversed = test.split("").reverse().join("");
    let capitalize = reversed[0].toUpperCase() + reversed.slice(1);
    return capitalize;
  } else if (typeof test == "number") {
    return test;
  }
}

module.exports = testSubject;
