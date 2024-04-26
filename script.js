function capitalize(test) {
  let capitalize = test[0].toUpperCase() + test.slice(1);
  return capitalize;
}

function reverseStr(test) {
  let reversed = test.split("").reverse().join("");
  return reversed;
}

function cal(para) {
  return para;
}

function caesarCi() {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
}

function analyzeArr() {
  let obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  return obj;
}

export { capitalize, reverseStr, cal, caesarCi, analyzeArr };
