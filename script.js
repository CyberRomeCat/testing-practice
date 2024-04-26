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

export { capitalize, reverseStr, cal };
